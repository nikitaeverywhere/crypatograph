import { contractAddress, delegatedBackEndUrl } from './const';
import { utils } from 'ethers';
import { _getWallet, getWalletAddress } from './wallet';
import { httpPost } from './utils';

/**
 * Make an autograph for somebody else. The content which this function returns has to be rendered on QR code.
 * @param {object} params - Parameters.
 * @param {Date} params.expiresAt - When the signature expires.
 * @param {number} params.expiresAt - When the signature expires.
 * @returns {string} - HEX string of the signature.
 */
export async function createAutograph({
  expiresAt = new Date(Date.now() + 1000 * 60 * 2),
  autographs = 50,
} = {}) {
  const wallet = _getWallet();
  const signature = await wallet.signMessage(utils.solidityKeccak256(
    [
      'address',
      'uint256',
      'uint256'
    ],
    [
      contractAddress,
      autographs,
      expiresAt = Math.floor(expiresAt.getTime() / 1000)
    ]
  ));
  return `${autographs}|${expiresAt}|${signature}`;
}

/**
 * Claims autograph (delegated transaction which resolves once the NFT token is claimed).
 * @param {string} autograph - Somebody elses autograph (created via createAutograph).
 * @returns {string} - 'confirmed'
 */
export async function claimAutograph(autograph) {
  const args = autograph.split('|');
  const wallet = _getWallet();
  const { id, signatureOptions } = await httpPost(`${delegatedBackEndUrl}/request`, {
    contractAddress: contractAddress,
    from: getWalletAddress(),
    functionArguments: args,
    functionName: 'claimAutograph'
  });
  const sigOption = signatureOptions.find(x => x.standard === 'eth_personalSign');
  if (!sigOption) {
    throw new Error(`No signature option eth_personalSign is provided by back end ${delegatedBackEndUrl}`);
  }
  const delegatedSignature = await wallet.signMessage(utils.solidityKeccak256(
    [
      'address',
      'uint256',
      'uint256',
      'bytes'
    ],
    [
      contractAddress,
      ...args
    ]
  ));
  const { result } = await httpPost(`${delegatedBackEndUrl}/response`, {
    requestId: id,
    signatureStandard: 'eth_personalSign',
    signature: delegatedSignature
  });
  return result.status; // should be "confirmed"
}

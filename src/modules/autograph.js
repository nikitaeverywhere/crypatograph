import { contractAddress } from './const';
import { utils } from 'ethers';
import { _getWallet } from './wallet';

/**
 * Make an autograph for somebody else. The content which this function returns has to be rendered on QR code.
 * @param {object} params - Parameters.
 * @param {Date} params.expiresAt - When the signature expires.
 * @returns {string} - HEX string of the signature.
 */
export async function createAutograph({
  expiresAt = new Date(Date.now() + 1000 * 60 * 2)
} = {}) {
  const wallet = _getWallet();
  return await wallet.signMessage(utils.solidityKeccak256(
    [
      'address',
      'uint256'
    ],
    [
      contractAddress,
      Math.floor(expiresAt.getTime() / 1000)
    ]
  ));
}

/**
 * Claims autograph (delegated transaction which resolves once the NFT token is claimed).
 * @param {string} autograph - Somebody elses autograph (created via createAutograph).
 */
export async function claimAutograph(autograph) {

}

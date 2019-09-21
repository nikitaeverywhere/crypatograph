import { Wallet } from 'ethers';

const storageMnemonic = 'wallet-mnemonic';
const storagePath = 'wallet-path';

let wallet = localStorage.getItem(storageMnemonic) && localStorage.getItem(storagePath)
  ? Wallet.fromMnemonic(localStorage.getItem(storageMnemonic), localStorage.getItem(storagePath))
  : Wallet.createRandom();

function updateWalletStorage() {
  localStorage.setItem(storageMnemonic, wallet.mnemonic);
  localStorage.setItem(storagePath, wallet.path); // Defaults to m/44’/60’/0’/0/0
}

updateWalletStorage();

/**
 * Restores wallet from mnemonic.
 * @param {string} mnemonic - Seed words.
 */
export async function restoreFromBip039Mnemonic(mnemonic) {
  wallet = Wallet.fromMnemonic(mnemonic); // Assuming default path
  updateWalletStorage();
}

/**
 * Returns seed words of the currently generated wallet.
 * @returns {string} - Seed words.
 */
export async function revealSeedWords() {
  return wallet.mnemonic;
}

/**
 * @returns {string} - Current wallet's address.
 */
export async function getWalletAddress() {
  return wallet.address;
}

export function _getWallet() {
  return wallet;
}

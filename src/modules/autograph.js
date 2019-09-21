/**
 * Make an autograph for somebody else. The content which this function returns has to be rendered on QR code.
 * @param {object} params - Parameters.
 * @param {Date} params.expiresAt - When the signature expires.
 * @returns {string} - HEX string of the signature.
 */
export async function createAutograph({
  expiresAt = new Date(Date.now() + 1000 * 60 * 2)
} = {}) {
  await new Promise(r => setTimeout(r, 1000));
  return '0x0b30919188578ad860ffbdfb6ada9938894b893e0d768b13508b4f11629f152a107d781efe1ec639dc7864dfade20b9aad81a8af6cd92dddf538c98f482de6931b';
}

/**
 * Claims autograph (delegated transaction which resolves once the NFT token is claimed).
 * @param {string} autograph - Somebody elses autograph (created via createAutograph).
 */
export async function claimAutograph(autograph) {

}

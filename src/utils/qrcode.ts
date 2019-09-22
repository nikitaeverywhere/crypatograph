import qrcode from 'qrcode-generator'

export const make = (input: string) => {
  try {
    const qr = qrcode(0, 'M')
    qr.addData(input)
    qr.make()
    return qr
  } catch (e) {
    console.log(e)
  }
}

export default {
  qrcode,
  make
}

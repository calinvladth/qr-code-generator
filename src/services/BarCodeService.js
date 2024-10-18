const bwipjs = require('bwip-js')

function generateSVG (data) {
  return bwipjs.toSVG({
    bcid: 'code128', // Barcode type
    text: data, // Text to encode
    height: 12, // Bar height, in millimeters
    includetext: true, // Show human-readable text
    textxalign: 'center', // Always good to set this
    textcolor: 'ff0000'
  })
}

const BarCodeService = { generateSVG }

module.exports = BarCodeService

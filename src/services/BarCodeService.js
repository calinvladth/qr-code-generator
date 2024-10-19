const bwipjs = require('bwip-js')

function generateSVG (data) {
  return bwipjs.toSVG({
    bcid: 'code128',
    text: data,
    height: 12,
    includetext: true,
    textxalign: 'center',
    textcolor: 'ff0000'
  })
}

const BarCodeService = { generateSVG }

module.exports = BarCodeService

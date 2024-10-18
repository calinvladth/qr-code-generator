const BarCodeService = require('../services/BarCodeService')

async function generateBarcode (req, res, next) {
  const { data } = req.body

  if (!data) {
    res.status(500).send('Data is missing')
    return
  }

  req.svg = await BarCodeService.generateSVG(data)
  next()
}

const BarCodeController = {
  generateBarcode
}

module.exports = BarCodeController

function handleSVGMiddleware (req, res) {
  if (!req.svg) {
    res.status(500).send('Something went wrong')
  }

  res.writeHead(200, { 'Content-Type': 'image/svg+xml', 'Content-Length': req.svg.length })
  res.end(req.svg)
}

module.exports = handleSVGMiddleware

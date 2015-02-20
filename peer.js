module.exports = Peer

var hat = require('hat')

function Peer() {
  this.id = new Buffer(hat(160), 'hex')
}

Peer.prototype.ping = function() {
  console.log('ping')
}

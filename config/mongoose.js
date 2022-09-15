const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.MONGODB_URI_URLSHORTENER, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', () => {
	console.log('mongodb error!')
})
db.once('open', () => {
	console.log('mongodb connected!')
})

module.exports = db
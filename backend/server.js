const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const todoRoutes = require('./routes/todoRoute');
const app = express()
const PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.json())

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
}

app.use(todoRoutes);

try {
	mongoose.connect(process.env.MONGO_DB_SECRET, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	console.log('MongoDb connected successfully!')
} catch (error) {
	console.log(error)
}

app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`)
})
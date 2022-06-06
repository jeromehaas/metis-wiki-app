const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:1IgX1qj2E1af@sinto.cpcwz.mongodb.net/?retryWrites=true&w=majority')
.then((res) => {
	console.log(`🗂️ Database connected!`)
})
.catch((error) => {
	console.log(`🔥 Error: Database not connected!`)
	console.log(`🔥 Error: ${error.message}`)
});

module.exports = mongoose;

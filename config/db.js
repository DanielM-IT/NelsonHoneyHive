const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')

// Asynchronous connection to the database. It sends a call to connect to the database and
// awaits for the returned promise. If there is an error the process will exit and display
// error as a message.
const connnectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })

    console.log('MongoDB Connected...')
  } catch (error) {
    console.error(error.message)
    // Exit process with failure
    process.exit(1)
  }
}

// Export the module
module.exports = connnectDB
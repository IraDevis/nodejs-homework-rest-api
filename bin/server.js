const app = require('../app');
const { connect } = require('../db/connection');

const PORT = process.env.PORT || 3000
const DB_HOST = process.env.DB_HOST

const start = async() => {
  try {
    await connect(DB_HOST)
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()

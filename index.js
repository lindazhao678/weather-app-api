const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    const api = `${process.env.REACT_APP_WEATHER_API_ROOTURL}?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=Melbourne&days=3&aqi=no&alerts=no`

    axios.get(api)
    .then((response) => {
        res.json(response.data)
    })
    .catch((err) => {
        console.log(err)
    })
})

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port, () => console.log(`Server is running on ${port}`))
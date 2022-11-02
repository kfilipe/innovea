const cors = require('cors')
const express = require('express')
const app = express()
const axios = require("axios")


app.use(cors())

app.use(express.json())

app.get("/", async (req, res) => {

    try {
        const { data } = await axios('https://newsapi.org/v2/everything?q=Apple&from=2022-11-01&sortBy=popularity&apiKey=94abdf35b455442cba9be3b148326104')

        console.log(data)

        return res.json(data)

    } catch (error) {
        console.log(error)
    }

})

app.listen(8000)
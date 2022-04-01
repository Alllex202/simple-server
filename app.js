
const express = require('express')
const redis = require('redis')

const app = express()

const redisClient = redis.createClient();

(async() => {
//    await redisClient.connect()
})()

//const host = '192.168.56.13'
const host = 'localhost'
const port = '8080'

app.get('/set', async(req, res) => {
//    await redisClient.set(req.query.key, req.query.value)
    res.end(`KEY:VALUE ${req.query.key}:${req.query.value}`)
})

app.get('/get/:key', async(req, res) => {
    res.end(`KEY ${req.params.key} = ${/*await redisClient.get(req.params.key)*/'123'}`)
})

app.listen(port, host, () => {
    console.log(`Listening port ${host}:${port}`)
})

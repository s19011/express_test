const express = require('express')
const app = express()
const port = 8081

app.get('/', (req, res, next) => {
    res.send('Hello Worldd')

})
app.get('/users', (req, res) => {
    ressend((JSON.stringify(
        {name:omas}, {name'louiee'})
})

app.listen(port)


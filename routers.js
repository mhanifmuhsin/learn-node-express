const express = require('express');
const routers = express.Router();

routers.get('/',(req,res) => {
    res.send('Hello World')
});

routers.get('/post/:id',(req,res) => {
    res.send('artikel-'+req.params.id)
});

module.exports = routers
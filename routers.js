const express = require('express');
const routers = express.Router();

routers.get('/',(req,res) => {
    res.send('Hello World')
});

routers.get('/post/:id',(req,res) => {
    res.send('artikel-'+req.params.id)
});

// routers.post('/login',(req,res) =>{
//     const {username, password} = req.body
//     res.send(`Anda login dengan username : ${username} dan password : ${password}`)
//     // res.send(`Anda login dengan username `)

// })
routers.post('/login',(req, res) => {
    const { username, password } = req.body
    // var username = req.body.username;
    // var password = req.body.password;
    res.send(`Anda login dengan username ${username} dan password
    ${password}`) })
    

routers.post('/api/users', function(req, res) {
    var user_id = req.body.id;
    var token = req.body.token;
    var geo = req.body.geo;

    res.send(user_id + ' ' + token + ' ' + geo);
});
   

module.exports = routers
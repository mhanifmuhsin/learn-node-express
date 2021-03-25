const express = require('express');
const routers = require('./routers');
const app = express();
const port = 3000;

// app.METHOD(ROUTE, CALLBACK)
app.get('/',(req,res) => {
    res.send('Hello World')
});

// app.get('/post/:id',(req,res) => {
//     res.send('artikel-'+req.params.id)
// });

//contoh middleware 1
// const log = (req,res,next) =>{
//     console.log(Date.now() + '' +req.ip+ '' +req.originalUrl)
//     next()
// };

//contoh middleware 2
// const log = (req,res,next) =>{
//     res.status(404).send('resource tidak ditemukan');
// }

// contoh middleware 3 404 routers tidak ditemukan
const log = (req, res, next) => {
    res.json({
        status: 'error',
        message: 'resource tidak ditemukan'
    })
}

// contoh middleware handling error 500
const handleError = (err, req, res, next) => {
    res.json({
        status: 'error',
        message: 'terjadi kesalahan server'
    })
}




// app.use(handleError)
// app.use(log)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// penempatan mempengaruhi
app.use(routers)
app.listen(port, () => console.log(`server running at http://localhost:${port}`));


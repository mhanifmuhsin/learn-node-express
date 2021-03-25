const express = require('express');
const routers = require('./routers')
const app = express();
const port = 3000

// app.METHOD(ROUTE, CALLBACK)
// app.get('/',(req,res) => {
//     res.send('Hello World')
// });

// app.get('/post/:id',(req,res) => {
//     res.send('artikel-'+req.params.id)
// });

app.use(routers)

app.listen(port,()=> console.log(`server running at http://localhost:${port}`));


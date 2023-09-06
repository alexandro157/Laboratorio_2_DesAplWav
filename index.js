const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.sendFile('./static/index.html',{
        root:__dirname
    })
})
app.get('/clientes',(req,res)=>{
    res.sendFile('./static/clientes.html',{
        root:__dirname
    })
})
app.get('/servicio',(req,res)=>{
    res.sendFile('./static/servicio.html',{
        root:__dirname
    })
})
app.get('/contacto',(req,res)=>{
    res.sendFile('./static/contacto.html',{
        root:__dirname
    })
})
app.get('/nosotros',(req,res)=>{
    res.sendFile('./static/nosotros.html',{
        root:__dirname
    })
})

app.use((req, res)=> {
    res.status(404).sendFile('./static/error.html',{
            root:__dirname
    });
});

app.listen('3000')
console.log(`Server on port ${3000}`)
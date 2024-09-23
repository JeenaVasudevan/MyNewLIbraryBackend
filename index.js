const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const movieRoutes=require('./routes/movieRoutes')
const genreRoutes=require('./routes/genreRoutes')
const languageRoutes=require('./routes/languageRoutes')
const personRoutes=require('./routes/personRoutes')
const castRoutes=require('./routes/castRoutes')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use('/movies',movieRoutes)
app.use('/genres',genreRoutes)
app.use('/language',languageRoutes)
app.use('/persons',personRoutes)
app.use('/casts',castRoutes)

app.get('/',(req,res)=>{
    res.send("Hello from API")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

main().then(()=>console.log("Connected")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://jeenavasudevan001:frH2nKkQVz8doNzK@cluster0.p1mgb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');}

const express = require('express')
const userRouter = require('./routers/user.routers')
const postRouter = require('./routers/post.routers')

const PORT = process.env.PORT || 8080
const app = express()


// app.get('/',(req,res) =>
// {
//     res.send('Hello postgres!!!')
// })



app.use(express.json())
app.use('/api', userRouter)
app.use('/api', postRouter)

app.listen(PORT, ()=>console.log(`server port ${PORT}`))
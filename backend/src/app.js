import express from 'express'
import pics from './routes/photos.routes'
import bodyParser from 'body-parser'
import auth from './routes/auth.routes'
import follow from './routes/follows.routes'
import comment from './routes/commet.routes'
import cors from 'cors'

const App = express()

App.use(bodyParser.urlencoded({extended: true}))
App.use(bodyParser.json())
App.use(cors())
App.use(pics)
App.use(auth)
App.use(follow)
App.use(comment)


export default App 
import express, {Express, Request, Response} from "express"
import { getApi } from "./controllers/api"
const app: Express = express()
const port = 3333

app.get('/', getApi)

app.listen(port, ()=>{
    console.log(`Serveur démarré sur le port ${port}`)
})

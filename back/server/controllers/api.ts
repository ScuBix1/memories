import {Request, Response} from "express"
export function getApi(req: Request, res: Response){
    res.send("Hello World!")
}
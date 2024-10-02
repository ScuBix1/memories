import {Request, Response} from "express"
import { Fame } from "../models/fame"

const MOCK: Fame[] = [
    new Fame('john', 1000)
]

export function getApiWof(req: Request, res: Response){
    res.send(MOCK)
}
export function postApiWof(req: Request, res: Response){
    const json = req.body
    const fame = new Fame(json.name, json.score)
    MOCK.push(fame)
    res.send()
}
import express from "express"
import cookieParser from "cookie-parser"
import { home } from "./controllers/globalController/global"

const app = express()

app.set("view engine", "pug")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.get("/", home)

export default app

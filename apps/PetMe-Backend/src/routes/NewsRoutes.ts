import { Router } from "express"
import NewsController from "../controllers/NewsControllers"
import NewsService from "../services/NewsService"
import NewsModel from "../models/NewsModel"
const NewsRoutes = Router()

const newsModel = new NewsModel()
const newsService = new NewsService(newsModel)
const newsContoller = new NewsController(newsService)

NewsRoutes.post("/", (req, res) => {
  newsContoller.createNews(req, res)
})

NewsRoutes.get("/bulk", (req, res) => {
  newsContoller.getAllNews(req, res)
})

NewsRoutes.get("/:NewsId", (req, res) => {
  newsContoller.getNewsById(req, res)
})

NewsRoutes.delete("/:NewsId", (req, res) => {
  newsContoller.deleteNewsById(req, res)
})

export default NewsRoutes

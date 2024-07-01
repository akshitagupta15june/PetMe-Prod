import { Request, Response } from "express"
import NewsService from "../services/NewsService"

export default class NewsController {
  constructor(private NewsService: NewsService) {}

  public async getAllNews(req: Request, res: Response): Promise<Response> {
    try {
      const response = await this.NewsService.getAllNews()

      if (!response) {
        return res.status(404).json({
          message: "No News found",
        })
      }
  
      return res.status(200).json({
        msg: "success",
        response,
      })
    } catch (error) {
      return res.status(500).json({
        message: "Error while fetching Newss",
        error,
      })
    }
  }

  public async getNewsById(req: Request, res: Response): Promise<Response> {
    try {
      const { NewsId } = req.params
      const response = await this.NewsService.getNewsById(NewsId)

      if (!response) {
        return res.status(404).json({
          message: "News not found",
        })
      }

      return res.status(200).json({
        msg: "success",
        response,
      })
    } catch (error) {
      return res.status(500).json({
        message: "Error while fetching News",
        error,
      })
    }
  }

  public async createNews(req: Request, res: Response): Promise<Response> {
    try {
      const body = req.body
      const response = await this.NewsService.createNews(body)

      if (!response) {
        return res.status(500).json({
          message: "News not created",
        })
      }

      return res.status(200).json({
        msg: "success",
        response,
      })
    } catch (error) {
      return res.status(500).json({
        message: "Error while creating News",
        error,
      })
    }
  }

  public async deleteNewsById(req: Request, res: Response): Promise<Response> {
    try {
      const { NewsId } = req.params
      const News = await this.NewsService.getNewsById(NewsId)
      if (!News) {
        return res.status(404).json({
          message: "News not found",
        })
      }

      const response = await this.NewsService.deleteNewsById(NewsId)
      return res.status(202).json({ 
        message: "News deleted successfully", 
        response 
      })
    } catch (error) {
      return res.status(500).json({
        message: "Error while deleting News",
        error,
      })
    }
  }
}

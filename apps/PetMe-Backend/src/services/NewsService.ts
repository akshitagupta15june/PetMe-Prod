import { response } from "express"
import { News } from "../interfaces/News/News"
import IStatusMap from "../interfaces/StatusMap/StatusMap"
import NewsModel from "../models/NewsModel"

export default class NewsService {
  constructor(private NewsModel: NewsModel) {}

  async getNewsById(id: string): Promise<News | null> {
    const response = await this.NewsModel.getNewsById(id)
    return response
  }

  async getAllNews(): Promise<News[]> {
    const response = await this.NewsModel.getAllNews()
    return response
  }

  async createNews(NewsData: News): Promise<IStatusMap> {
    const response = await this.NewsModel.createNews(NewsData)
    return response
}

	async deleteNewsById(id: string): Promise<IStatusMap> {
		const response = await this.NewsModel.deleteNewsById(id)
		return response
	}
}

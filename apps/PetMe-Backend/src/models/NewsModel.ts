import prisma from "../db"
import { News } from "../interfaces/News/News"
import IStatusMap from "../interfaces/StatusMap/StatusMap"

export default class NewsModel {
    private prisma = prisma
    async getNewsById(id: string): Promise<News | null> {
        const news = await this.prisma.news.findUnique({
            where: {
                id: id
            }
        })
        if (!news) { return null }
        return news;   
    }

    async getAllNews(): Promise<News[]> {
        const news = await this.prisma.news.findMany({});
        return news
    }

    async createNews(newsData: News): Promise<IStatusMap> {
       
        await this.prisma.news.create({
            data: {
                user:newsData.user,
                title: newsData.title,
                content: newsData.content,
                tags: newsData.tags,
                imageSrc: newsData.imageSrc
            }
        })
        return {
            status: 'success',
            message: 'news created successfully',
            code: 200
        }
    }

    async deleteNewsById(id: string): Promise<IStatusMap> {
       await this.prisma.news.delete({
            where: {
                id: id
            }
        })
        return {
            status: 'success',
            message: 'news deleted successfully',
            code: 202
        }
    }
}
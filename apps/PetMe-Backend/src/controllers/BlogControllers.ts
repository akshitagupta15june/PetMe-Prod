import { Request, Response } from "express";
import BlogService from "../services/BlogService";

export default class BlogController {

    constructor (
        private blogService: BlogService
    ) {}

    public async getBlogs(req: Request, res: Response): Promise<Response> {
        try {
            const response = await this.blogService.getAllBlogs();

            if(!response) {
                return res.status(404).json({ 
                    message: 'No blogs found' 
                });
            }

            return res.status(200).json({
                msg: "success",
                response
            });
        } catch(error) {
            return res.status(500).json({ 
                message: 'Error while fetching blogs' ,
                error
            });
        }
    }

    public async getBlogById(req: Request, res: Response): Promise<Response> {
        try {
            const { blogId } = req.params;
            const response = await this.blogService.getBlogById(blogId);

            if(!response) {
                    return res.status(404).json({ 
                    message: 'Blog not found' 
                });
            }

            return res.status(200).json({
                msg: "success",
                response
            });
        } catch(error) {
            return res.status(500).json({
                message: 'Error while fetching blog',
                error
            })
        }
    }

    public async createBlog(req: Request, res: Response): Promise<Response> {
        try {
            const body = req.body
            const response = await this.blogService.createBlog(body);

            if(!response) {
                return res.status(500).json({ 
                    message: 'Blog not created'
                })
            }

            return res.status(200).json({
                msg: "success",
                response
            });
        } catch(error){
            return res.status(500).json({
                message: 'Error while creating blog',
                error
            })
        }
    }

    public async deleteBlogById(req: Request, res: Response): Promise<Response> {
        try {
            const { blogId } = req.params;
            const blog = await this.blogService.getBlogById(blogId);
            if(!blog){
                    return res.status(404).json({ 
                    message: 'Blog not found' 
                });
            }

            const response = await this.blogService.deleteBlogById(blogId);
            return res.status(200).json({ message: "Blog deleted successfully" });
        } catch(error){
            return res.status(500).json({
                message: 'Error while deleting blog',
                error
            })
        }
    }

    public async editBlogById(req: Request, res: Response): Promise<Response> {
        try {
            const { blogId } = req.params;
            const body = req.body
            const blog = await this.blogService.getBlogById(blogId);
            if(!blog){
                return res.status(404).json({ 
                    message: 'Blog not found' 
                });
            }
            const response = await this.blogService.editBlogById(blogId, body);

            return res.status(200).json({
                msg: "success",
                response
            });
        } catch(error) {
            return res.status(500).json({
                message: 'Error while editing blog',
                error
            })
        }
    }
}
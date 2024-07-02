export interface News {
    id: string,
    title: string,
    user: string,
    content: string,
    tags :  string[],
    imageSrc: string,
    publishedAt: Date 
}
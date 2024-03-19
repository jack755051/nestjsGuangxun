export interface LastestNews {
    news_title: string;
    news_date: Date;
    news_content: string;
    news_type: newsType;
    news_image?: Buffer; // 使其可选，因为可能直接使用URL
    news_image_url?: string; // 添加用于存储图片URL的字段
}

export interface getLastestNews {
    news_type: newsType | null;
    page:number;
    singlePageCount:number;
}

export enum newsType {
    NewsFlash = '新聞快訊',
    Event = '活動消息',
    KnowledgeShare = '知識分享',
}

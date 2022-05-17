import React from 'react';

import { NewsItem } from '@Entities/main-page/content/news-item/index'

export const NewsList: React.FC = () => {
    const news = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <div>
            {news.map(item => {
                return <NewsItem key={item} />
            })}
        </div >
    );
}
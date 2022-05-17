import React from 'react';

import styles from './news-item.module.css'

export const NewsItem: React.FC = () => {
    return (
        <div className={styles.container}>
            <div>SiteIcon</div>
            <div className={styles.content}>
                <div className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                <div className={styles.subscription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro est nulla aperiam, eveniet vel laudantium deleniti maxime earum cum nesciunt ipsa libero hic, officia minus nostrum cumque at dolores enim.</div>
            </div>
        </div >
    );
}
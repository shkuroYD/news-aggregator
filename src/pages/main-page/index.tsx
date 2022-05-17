import React from 'react';
import styles from './main-page.module.css'

import { Header } from '@Entities/main-page/header/index'
import { NewsList } from '@Entities/main-page/content/news-list/index'

export const MainPage: React.FC = () => {
    return (
        <div className={styles.mainPage}>
            <Header />
            <NewsList />
        </div >
    );
}
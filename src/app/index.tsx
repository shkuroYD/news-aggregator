import React from 'react';
import '@App/styles/index.css';
import styles from '@App/styles/app.module.css'
import { MainPage } from "@Pages/main-page/index";
import Button from '@mui/material/Button';

export const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <MainPage />
    </div>
  );
}
import React from 'react';
import styles from './header.module.css'

import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Replay from '@mui/icons-material/Replay';

import { ReloadBtn } from './reload-btn'

export const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <div>Main Page</div>
            <div className={styles.reloadBtn}>
                <ReloadBtn />
            </div>
        </div >
    );
}
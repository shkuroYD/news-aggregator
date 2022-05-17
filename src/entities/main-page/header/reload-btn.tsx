import React from 'react';

import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Replay from '@mui/icons-material/Replay';

export const ReloadBtn: React.FC = () => {
    return (
        <Tooltip title="Обновить новости">
            <IconButton>
                <Replay />
            </IconButton>
        </Tooltip>
    );
}
import SensorsIcon from '@mui/icons-material/Sensors';
import { Box, Button } from "@mui/material";
import { dataContext } from '../../../Context/MetricsContext';
import { useEffect, useState, useContext } from 'react';

const ScannerDevice = () => {
    const { isPermanent, setPermanent } = useContext(dataContext);
    return (
        <Box
            sx={{
                height: '100vh',
                pl: isPermanent ? 30 : 5
            }}
        >
            <Button variant="outlined" startIcon={<SensorsIcon />}>
                Escanear
            </Button>
        </Box>
    );
}

export default ScannerDevice;

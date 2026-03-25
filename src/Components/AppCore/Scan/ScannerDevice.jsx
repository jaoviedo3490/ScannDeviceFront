import SensorsIcon from '@mui/icons-material/Sensors';
import { Box, Button, Typography, Card, Stack, CardContent, ListItemButton, AppBar, Toolbar, IconButton } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import * as React from 'react';
import { useState, useContext } from 'react';
import { dataContext } from '../../../Context/MetricsContext';
import image from '../../../../public/NetworkDevice.png';
import DetailsIcon from '@mui/icons-material/Details';
import SingleDevice from '../Scan/singleDevice';

const ScannerDevice = () => {
    const { isPermanent } = useContext(dataContext);
    const { isLoadingPetition, setLoading } = useContext(dataContext);

    const [data, setData] = useState(null);
    const [error, setError] = useState('');
    const { singleDevice, setDevice } = useContext(dataContext);
    const [singleDataDevice, setSingleData] = useState([]);

    const handleDeviceDetails = (param) => {
        setSingleData(param);
        setDevice(true);
    }
    const handleScanClick = () => {
        setLoading(true);
        setError('');
        setData(null);

        fetch('http://localhost:3000/scan')
            .then(res => res.json())
            .then(json => {
                console.log(json);
                setData(json);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError('Error al conectarse con el servidor');
                setLoading(false);
            });
    };


    const hosts = Array.isArray(data?.nmaprun?.host)
        ? data.nmaprun.host
        : data?.nmaprun?.host
            ? [data.nmaprun.host]
            : [];

    return (
        <>

            {!singleDevice ? (<Box
                sx={{
                    height: '100vh',
                    ml: isPermanent ? 30 : 5,
                    p: 2,
                    transition: "margin .3s ease"
                }}>
                <Button
                    variant="outlined"
                    startIcon={<SensorsIcon />}
                    onClick={handleScanClick}
                    disabled={isLoadingPetition}
                >
                    {isLoadingPetition ? 'Escaneando...' : 'Escanear'}
                </Button>

                <Box sx={{ mt: 3 }}>
                    {error && (
                        <Typography color="error" sx={{ mt: 2 }}>
                            {error}
                        </Typography>
                    )}

                    <Stack direction="row" spacing={1} flexWrap="wrap">
                        {hosts.map((obj, i) => (
                            <Card sx={{ maxWidth: 280 }} key={obj.address?.$.addr || i}>
                                <CardHeader
                                    title={obj.address?.$.addr || 'IP no disponible'}
                                    titleTypographyProps={{ variant: 'subtitle1', color: 'text.secondary' }}
                                />
                                {obj.address?.$.statusAgent}
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={image}
                                    alt="DeviceConnected" />
                                <ListItemButton>
                                    <Button
                                        variant="outlined"
                                        startIcon={<DetailsIcon />}
                                        onClick={() => handleDeviceDetails(obj.address?.$)}
                                        disabled={isLoadingPetition}
                                        sx={{ width: '100%' }} >
                                        Ver detalles
                                    </Button>
                                </ListItemButton>
                            </Card>
                        ))}
                    </Stack>
                </Box>
            </Box>) : (<Box>
                <Box
                    sx={{
                        height: '100vh',
                        ml: isPermanent ? 30 : 5,
                        p: 2,
                        transition: "margin .3s ease"
                    }}>
                    <SingleDevice onBack={() => { setDevice(false) }} data={singleDataDevice} />
                </Box>
            </Box>)}
        </>

    );
};

export default ScannerDevice;


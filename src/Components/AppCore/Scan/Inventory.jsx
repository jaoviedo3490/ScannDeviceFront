import { Box, Typography, Button, ButtonGroup, Card, Stack, CardContent, ListItemButton, AppBar, Toolbar, IconButton } from "@mui/material";
import { useState, useContext, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { dataContext } from "../../../Context/MetricsContext";

const Inventory = () => {
    const { isPermanent } = useContext(dataContext);
    const [temporalData, setTemporalData] = useState(null);
    const [temporalDataTTL,setTTL] = useState('');
    const [isError, setError] = useState(false);
    let data = ''
    let ttl = ''


    useEffect(() => {
        fetch(`http://localhost:3000/InventoryTemp/redis/Inventory`)
            .then(res => res.json()
                .then(json => {
                    if (json.status === 200) {
                        data = JSON.parse(json?.message);
                        ttl = json?.ttl_var;
                        setTTL(ttl);
                        setTemporalData((data));
                        setError(false)
                    } else {
                        setError(true);
                    }
                })
            )
    }, [])




    return (
        <>
            <Box>
                <Typography variant="h5">Inventarios Temporales</Typography>
            </Box>
            <Typography>{isError ? 'No Disponible' : (<Box sx={{ ml: isPermanent ? 30 : 5, }}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Herramienta de Red</TableCell>
                                <TableCell>Fecha de escaneo</TableCell>
                                <TableCell>Version</TableCell>
                                <TableCell>Tiempo Restante</TableCell>
                                <TableCell>Acciones</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>1</TableCell>
                                <TableCell>{temporalData?.nmaprun?.$?.scanner}</TableCell>
                                <TableCell>{temporalData?.nmaprun?.$?.startstr}</TableCell>
                                <TableCell>{temporalData?.nmaprun?.$?.version}</TableCell>
                                <TableCell>{temporalDataTTL === -2 ? 'Inventario Expirado' : temporalData === -1 ? 'Tiempo Ilimitado' : `${temporalDataTTL} Segundos`}</TableCell>
                                <TableCell>
                                    <ButtonGroup>
                                        <Button variant="outlined" size="small" sx={{ background: '#2b96b6ff', color: 'white' }}
                                            startIcon={<RemoveRedEyeIcon sx={{ color: 'white' }} />}>
                                            Ver
                                        </Button>
                                        <Button variant="contained" size="small" sx={{ background: '#2bb675ff' }}
                                            startIcon={<SaveAltIcon />}>
                                            Guardar
                                        </Button>
                                    </ButtonGroup>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>)}</Typography>

        </>

    );
};

export default Inventory;

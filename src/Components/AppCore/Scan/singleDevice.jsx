import * as React from 'react';
import { Box, Button, Typography, Stack } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useContext } from 'react';
import { dataContext } from '../../../Context/MetricsContext';

const SingleDevice = (props) => {
    const { setDevice } = useContext(dataContext);
    const array = props?.data?.Processor ? Object.keys(props?.data?.Processor) : [];
    const arrayBios = props?.data?.Bios ? Object.keys(props?.data?.Bios) : [];
    const arrayMotherBoard = props?.data?.MotherBoard ? Object.keys(props?.data?.MotherBoard) : [];
    const arrayKeyboard = props?.data?.Keyboard ? Object.keys(props?.data?.Keyboard) : [];
    const arraySoftwareInfo = props?.data?.SystemOperating ? Object.keys(props?.data?.SystemOperating) : [];
    console.log(array);
    const handleBackButton = () => {
        setDevice(false);
    };

    return (
        <>
            <Button variant="text" onClick={handleBackButton}>Atrás</Button>
            <Box>
                <Stack direction="row" spacing={2}>
                    {/* SEPARA LOS ACORDEONES EN DIVS INDEPENDIENTES */}
                    <Box>
                        <Accordion sx={{ width: 600 }}>
                            <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
                                <Typography>Detalles de Hardware</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Stack direction='row' spacing={3}>
                                    <Typography>Protocolo de Internet:</Typography>
                                    <Typography>{props.data?.addrtype}</Typography>
                                </Stack>
                                <Box>
                                    <Accordion sx={{ boxShadow: "none", border: "1px solid #ccc" }}>
                                        <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
                                            <Typography>Procesador</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            {array.map((obj) => {
                                                return (
                                                    <Stack direction='row' key={`id-${obj}`} spacing={2}>
                                                        <Typography>{obj}: </Typography>
                                                        <Typography>{props.data.Processor[obj]}</Typography>
                                                    </Stack>
                                                );
                                            }) || 'No disponible'}
                                        </AccordionDetails>
                                    </Accordion>
                                </Box>

                                <Box>

                                    <Accordion sx={{ boxShadow: "none", border: "1px solid #ccc" }}>
                                        <AccordionSummary expandIcon={<ArrowDownwardIcon />}>Memoria Ram</AccordionSummary>
                                        <AccordionDetails>
                                            {props.data?.Ram?.map((ramObj, idx) => {
                                                return (
                                                    <Box>
                                                        <Accordion sx={{ boxShadow: "none", border: "1px solid #ccc" }} key={`id-${idx}`}>
                                                            <AccordionSummary expandIcon={<ArrowDownwardIcon />}>Ranura {idx + 1}</AccordionSummary>
                                                            <AccordionDetails>{`${JSON.stringify(ramObj)}`}</AccordionDetails>
                                                        </Accordion>

                                                    </Box>
                                                );
                                            }) || 'No disponible'}

                                        </AccordionDetails>
                                    </Accordion>
                                </Box>
                                <Box>
                                    <Accordion sx={{ boxShadow: "none", border: "1px solid #ccc" }}>
                                        <AccordionSummary expandIcon={<ArrowDownwardIcon />}>Almacenamiento</AccordionSummary>
                                        <AccordionDetails>
                                            {props.data?.Disk?.map((diskObj, idx) => {
                                                return (
                                                    <Box>
                                                        <Accordion sx={{ boxShadow: "none", border: "1px solid #ccc" }} key={`id-${idx}`}>
                                                            <AccordionSummary expandIcon={<ArrowDownwardIcon />}>Dispositivo {idx + 1}</AccordionSummary>
                                                            <AccordionDetails>{`${JSON.stringify(diskObj)}`}</AccordionDetails>
                                                        </Accordion>

                                                    </Box>
                                                );
                                            }) || 'No disponible'}

                                        </AccordionDetails>
                                    </Accordion>
                                </Box>
                                <Box>
                                    <Accordion sx={{ boxShadow: "none", border: "1px solid #ccc" }}>
                                        <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
                                            <Typography>Bios</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            {arrayBios.map((obj) => {
                                                return (
                                                    <Stack direction='row' key={`id-${obj}`} spacing={2}>
                                                        <Typography>{obj}: </Typography>
                                                        <Typography>{props.data.Bios[obj]}</Typography>
                                                    </Stack>
                                                );
                                            }) || 'No disponible'}
                                        </AccordionDetails>
                                    </Accordion>
                                </Box>
                                <Box>
                                    <Accordion sx={{ boxShadow: "none", border: "1px solid #ccc" }}>
                                        <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
                                            <Typography>Tarjeta Madre</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            {arrayMotherBoard.map((obj) => {
                                                return (
                                                    <Stack direction='row' key={`id-${obj}`} spacing={2}>
                                                        <Typography>{obj}: </Typography>
                                                        <Typography>{props.data.MotherBoard[obj]}</Typography>
                                                    </Stack>
                                                );
                                            }) || 'No disponible'}
                                        </AccordionDetails>
                                    </Accordion>
                                </Box>
                                <Box>
                                    <Accordion sx={{ boxShadow: "none", border: "1px solid #ccc" }}>
                                        <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
                                            <Typography>Teclado</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            {arrayKeyboard.map((obj) => {
                                                return (
                                                    <Stack direction='row' key={`id-${obj}`} spacing={2}>
                                                        <Typography>{obj}: </Typography>
                                                        <Typography>{props.data.Keyboard[obj]}</Typography>
                                                    </Stack>
                                                );
                                            }) || 'No disponible'}
                                        </AccordionDetails>
                                    </Accordion>
                                </Box>
                                <Box>

                                    <Accordion sx={{ boxShadow: "none", border: "1px solid #ccc" }}>
                                        <AccordionSummary expandIcon={<ArrowDownwardIcon />}>Raton</AccordionSummary>
                                        <AccordionDetails>
                                            {props.data?.Mouse?.map((mouseObj, idx) => {
                                                return (
                                                    <Box>
                                                        <Accordion sx={{ boxShadow: "none", border: "1px solid #ccc" }} key={`id-${idx}`}>
                                                            <AccordionSummary expandIcon={<ArrowDownwardIcon />}>Controlador {idx + 1}</AccordionSummary>
                                                            <AccordionDetails>{`${JSON.stringify(mouseObj)}`}</AccordionDetails>
                                                        </Accordion>

                                                    </Box>
                                                );
                                            }) || 'No disponible'}

                                        </AccordionDetails>
                                    </Accordion>
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                    <Box>
                        <Accordion sx={{ width: 600 }}>
                            <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
                                <Typography>Detalles de Software</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <AccordionDetails>


                                    <Box>
                                        <Accordion sx={{ boxShadow: "none", border: "1px solid #ccc" }}>
                                            <AccordionSummary expandIcon={<ArrowDownwardIcon />}>Sistema Operativo</AccordionSummary>
                                            <AccordionDetails>{arraySoftwareInfo[0] ?? "No Disponible"}: {props?.data?.SystemOperating?.[arraySoftwareInfo[0]] ?? "No Disponible"}</AccordionDetails>
                                            <AccordionDetails>{arraySoftwareInfo[1] ?? "No Disponible"}: {props?.data?.SystemOperating?.[arraySoftwareInfo[1]] ?? "No Disponible"}</AccordionDetails>
                                            <AccordionDetails>{arraySoftwareInfo[2] ?? "No Disponible"}: {props?.data?.SystemOperating?.[arraySoftwareInfo[2]] ?? "No Disponible"}</AccordionDetails>
                                        </Accordion>

                                    </Box>
                                    <Box>
                                        <Accordion sx={{ boxShadow: "none", border: "1px solid #ccc" }}>
                                            <AccordionSummary expandIcon={<ArrowDownwardIcon />}>Nombre del Dispositivo</AccordionSummary>
                                            <AccordionDetails>{props.data?.NameDevice ?? 'No disponible'}</AccordionDetails>

                                        </Accordion>

                                    </Box>



                                </AccordionDetails>
                            </AccordionDetails>
                        </Accordion>
                    </Box>


                </Stack>

            </Box>
        </>
    );
};

export default SingleDevice;

//{ "data": { "addr": "192.168.1.39", "addrtype": "ipv4", "Processor": { "Name": "AMD Ryzen 7 5700G with Radeon Graphics ", "Manufacturer": "AuthenticAMD", "NumberOfCores": 8, "NumberOfLogicalProcessors": 16, "MaxClockSpeed": 3801 }, "Ram": [{ "Capacity": 17179869184, "Speed": 3200, "Manufacturer": "A-DATA Technology" }, { "Capacity": 17179869184, "Speed": 3200, "Manufacturer": "A-DATA Technology" }], "Disk": [{ "DeviceID": "C:", "Size": 511167164416, "FreeSpace": 103300472832 }, { "DeviceID": "E:", "Size": 960178941952, "FreeSpace": 126931038208 }], "Bios": { "Manufacturer": "American Megatrends International, LLC.", "SMBIOSBIOSVersion": "1.H0", "ReleaseDate": "20240308000000.000000+000" }, "MotherBoard": { "Product": "A520M-A PRO (MS-7C96)", "Manufacturer": "Micro-Star International Co., Ltd.", "SerialNumber": "07C9611_O31E179846" }, "Keyboard": { "Name": "Mejorado (101 � 102 teclas)", "Manufacturer": null, "PNPDeviceID": "HID\\VID_0458&PID_6013&MI_01&COL04\\8&1BFF1EFA&0&0003" }, "Mouse": [{ "Name": "Mouse compatible con HID", "Manufacturer": "Microsoft", "PNPDeviceID": "HID\\VID_0458&PID_6013&MI_01&COL09\\8&1BFF1EFA&0&0008" }, { "Name": "Dispositivo de entrada USB", "Manufacturer": "(Dispositivos de sistema est�ndar)", "PNPDeviceID": "USB\\VID_30FA&PID_1440&MI_00\\7&BA28ECC&0&0000" }], "OS": "Desconocido" } }
import { Box, Button, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { dataContext } from "../Context/MetricsContext";
import { useMediaQuery, useTheme } from "@mui/material";
const DashBoard = () => {
    const { isPermanent} = useContext(dataContext);
    return (
        <Box
            sx={{
                height: '100vh',
                ml: isPermanent ? 30 : 5,
                transition: "margin .3s ease"
            }}>
            <Typography variant="h5">Desde DashBoard</Typography>
        </Box>
    );
}
export default DashBoard;
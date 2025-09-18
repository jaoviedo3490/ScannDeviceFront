import { Box, Button, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { dataContext } from "../Context/MetricsContext";
const DashBoard = () => {
    const { isPermanent, setPermanent } = useContext(dataContext);
    return (
        <Box
            sx={{
                height: '100vh',
                pl: isPermanent ? 30 : 5
            }}>
            <Typography variant="h5">Desde DashBoard</Typography>
        </Box>
    );
}
export default DashBoard;
import { IconButton, Toolbar, AppBar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { dataContext } from "../Context/MetricsContext";
import { useContext, useEffect, useState } from "react";

const AppBarComponent = () => {
    const { isPermanent, setPermanent } = useContext(dataContext);
    const [appBarWidth, setAppBar] = useState('');

    const handleMenuButton = () => {
        let val = (isPermanent) ? false : true;
        setPermanent(val);
    }
    useEffect(() => {
        let width = (isPermanent) ? '82%' : 'calc(100% - 50px)';
        setAppBar(width);
    }, [isPermanent]);

    return (
        <AppBar sx={{ bgcolor: '#A1E8DB', width: `${appBarWidth}` }}>
            <Toolbar >
                <IconButton onClick={handleMenuButton}>
                    <MenuIcon></MenuIcon>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}
export default AppBarComponent;
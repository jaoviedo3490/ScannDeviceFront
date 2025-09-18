import { Toolbar, Drawer, ListItemButton, ListItemIcon, ListItemText, List, ListSubheader, IconButton, Stack } from "@mui/material";
import { useState, useContext, useEffect } from "react";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import { dataContext } from "../Context/MetricsContext";
import InventoryIcon from '@mui/icons-material/Inventory';
const SideBar = () => {
    const { isPermanent, setPermanent } = useContext(dataContext);
     const {LayoutOption,setOption} = useContext(dataContext);
    const [drawerWidth, setDrawerW] = useState('');


const handleScannerClick = () =>{
    setOption(1);
}
    const MenuIcons =
        <Stack direction="column" spacing={2}>
            <IconButton onClick={handleScannerClick}><PodcastsIcon /></IconButton>
            <IconButton><InventoryIcon /></IconButton>
        </Stack>

    useEffect(() => {
        let val = (isPermanent) ? '250px' : '50px';
        setDrawerW(val);
    }, [isPermanent])
    return (
        <Drawer variant='permanent' open={true} slotProps={{
            paper: {
                sx: { width: `${drawerWidth}`, bgcolor: '#ffffffff' }
            }
        }}>
            <Toolbar></Toolbar>
            <List subheader={!isPermanent ? MenuIcons : undefined}>
                {isPermanent && (<>
                    <ListItemButton onClick={handleScannerClick}>
                        <ListItemIcon><Toolbar><PodcastsIcon /><ListItemText primary="Escanear Red"></ListItemText></Toolbar></ListItemIcon>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon><Toolbar><InventoryIcon /><ListItemText primary="Inventario"></ListItemText></Toolbar></ListItemIcon>
                    </ListItemButton>
                </>)}
            </List>
        </Drawer>
    );
}
export default SideBar;
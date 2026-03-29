import { Toolbar, Drawer, ListItemButton, ListItemIcon, ListItemText, List, ListSubheader, IconButton, Stack } from "@mui/material";
import { useState, useContext, useEffect } from "react";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import { dataContext } from "../Context/MetricsContext";
import InventoryIcon from '@mui/icons-material/Inventory';
import image from '../../public/ScanImagge.png';
import { useMediaQuery, useTheme } from "@mui/material";
import singleImage from '../../public/ScanImaggee.png'
import { Padding } from "@mui/icons-material";
const SideBar = () => {
    const { isPermanent, setOption } = useContext(dataContext);
    const [drawerWidth, setDrawerW] = useState('');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleScannerClick = (param) => {
        setOption(param);
    }

    const MenuIcons = <>
        <ListItemButton onClick={() => handleScannerClick(1)}>
            <ListItemIcon><PodcastsIcon /></ListItemIcon>
        </ListItemButton>
        <ListItemButton onClick={() => handleScannerClick(2)} >
            <ListItemIcon><InventoryIcon /></ListItemIcon>
        </ListItemButton>
    </>
    const MenuIcons2 = <>
        <ListItemButton onClick={() => handleScannerClick(1)}>
            <ListItemIcon><Toolbar><PodcastsIcon /><ListItemText primary="Escanear Red"></ListItemText></Toolbar></ListItemIcon>
        </ListItemButton>
        <ListItemButton onClick={() => handleScannerClick(2)} >
            <ListItemIcon><Toolbar><InventoryIcon /><ListItemText primary="Inventario"></ListItemText></Toolbar></ListItemIcon>
        </ListItemButton>
    </>

    useEffect(() => {
        let val = (isPermanent) ? '250px' : '60px';
        setDrawerW(val);
    }, [isPermanent])
    return (
        <Drawer variant={isPermanent ? 'permanent' : 'persistent'} open={true} slotProps={{
            paper: {
                sx: { width: `${drawerWidth}`, bgcolor: '#ffffffff' }
            }
        }}>
            <Toolbar disableGutters>
                <img src={isPermanent ? image : singleImage} width={isPermanent ? '250px' : '60px'} height={isPermanent ? '80px' : '40px'} alt='scanLogo' />
            </Toolbar>
            <List subheader={!isPermanent ? MenuIcons : MenuIcons2}>

            </List>
        </Drawer>
    );
}
export default SideBar;
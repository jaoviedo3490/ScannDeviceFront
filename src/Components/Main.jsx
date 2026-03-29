import { Backdrop, CircularProgress, Toolbar } from "@mui/material";
import AppBarComponent from "./AppBarComponent";
import SideBar from "./SideBar";
import ScannerDevice from "./AppCore/Scan/ScannerDevice";
import DashBoard from "./dashBoard";
import { dataContext } from "../Context/MetricsContext";
import { useContext } from "react";
import Inventory from "./AppCore/Scan/Inventory";
const Main = () => {
    const {LayoutOption,setOption} = useContext(dataContext);
    const {isLoadingPetition,setLoading} = useContext(dataContext);
    return (
        <div>
            <AppBarComponent></AppBarComponent>
            <SideBar></SideBar>
            <Toolbar sx={{px:0}}></Toolbar>
            {(LayoutOption==0 &&(<DashBoard></DashBoard>))}
            {(LayoutOption==1 &&(<ScannerDevice></ScannerDevice>))}
            {(LayoutOption==2 &&(<Inventory></Inventory>))}
            <Backdrop open={isLoadingPetition} sx={(theme)=>({color:"white",zIndex:theme.zIndex.drawer+1})}>
                <CircularProgress/>
            </Backdrop>
        </div>
    );
}
export default Main;
import { Toolbar } from "@mui/material";
import AppBarComponent from "./AppBarComponent";
import SideBar from "./SideBar";
import ScannerDevice from "./AppCore/Scan/ScannerDevice";
import DashBoard from "./dashBoard";
import { dataContext } from "../Context/MetricsContext";
import { useContext } from "react";
const Main = () => {
    const {LayoutOption,setOption} = useContext(dataContext);
    return (
        <div>
            <AppBarComponent></AppBarComponent>
            <SideBar></SideBar>
            <Toolbar></Toolbar>
            {(LayoutOption==0 &&(<DashBoard></DashBoard>))}
            {(LayoutOption==1 &&(<ScannerDevice></ScannerDevice>))}
        </div>
    );
}
export default Main;
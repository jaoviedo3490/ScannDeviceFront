import { createContext } from "react";
import { useContext,useState } from "react";

const dataContext = createContext({});
const UserProvide =({children})=>{
    const [isPermanent,setPermanent] = useState(false);
    const [isMobile,setMobile] = useState(false);
    const [LayoutOption,setOption] = useState(0);

    return(
        <dataContext.Provider value={{isPermanent,setPermanent,isMobile,setMobile,LayoutOption,setOption}}>
            {children}
        </dataContext.Provider>
    );
}
export {dataContext,UserProvide};
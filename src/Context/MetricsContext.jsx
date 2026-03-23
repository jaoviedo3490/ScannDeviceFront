import { createContext } from "react";
import { useContext, useState } from "react";

const dataContext = createContext({});
const UserProvide = ({ children }) => {
    const [isPermanent, setPermanent] = useState(false);
    const [isMobile, setMobile] = useState(false);
    const [LayoutOption, setOption] = useState(0);
    const [isLoadingPetition, setLoading] = useState(false);
    const [singleDevice, setDevice] = useState('');

    return (
        <dataContext.Provider value={{ singleDevice, setDevice,isPermanent, setPermanent, isMobile, setMobile, LayoutOption, setOption, isLoadingPetition, setLoading }}>
            {children}
        </dataContext.Provider>
    );
}
export { dataContext, UserProvide };
import React, { ReactNode } from "react";
//@ts-ignore
import Sponsors from "./Sponsors";
import Organizers from "./Organizers";
import Map from "./Map";

interface IProps {
   children?: ReactNode
}

const Layout: React.FC<IProps> = ({children}) => {
   return (
       <>
           <Map/>
           <Sponsors/>
           <Organizers/>
           <main>
               {children}
           </main>
       </>
   )
}
export default Layout;
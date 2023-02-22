import React, { ReactNode } from "react";
import Navigation from "./Navigation";
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
           <Navigation />
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
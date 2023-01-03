
import Head from 'next/head'
import styles from "./Layout.module.css"
import Navbar from '../Navbar'
import * as React from 'react';

type Props = {
    children?: React.ReactNode
  };
export const BlueLayaout:React.FC<Props> = ({children}) => {
    return (
        <div style={{backgroundColor:"#2C74B3",borderRadius:"5px",padding:"10"}}>
          
         
           <h2>Blue Layauts</h2>
           
            {children}
        
        </div>
      )
}





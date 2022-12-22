import './src/styles/global.css';
import React from "react"
import { DataProvider } from "./src/components/context/dataContext";


export const wrapRootElement = ({ element }) => (
    <DataProvider>{element}</DataProvider>
)
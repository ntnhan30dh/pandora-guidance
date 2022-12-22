


import React, { useContext } from "react";
import { graphql, useStaticQuery } from "gatsby";


const DataContext = React.createContext();

export const useData = () => {
  return useContext(DataContext);
};



export const DataProvider = ({children}) => {

const data = useStaticQuery(graphql`
    { 
      allWpPage {
        edges {
          node {
            titleandcontent {
              title
              content
            }
            title
          }
        }
      }
      allWpPrinciple {
        edges {
          node {
            titleandcontent {
              title
              content
            }
            title
          }
        }
      }
    }
  `);
  return (
    <DataContext.Provider value={{data}}>
        {children}
    </DataContext.Provider>
  );
};

/* eslint-disable react-refresh/only-export-components */
import PropTypes  from "prop-types";
import React, { useContext, useState} from "react";

const contextColor = React.createContext();
const contextSetColor = React.createContext();

export function useContextColor() {
  return useContext(contextColor)
}

export function useContextSetColor() {
  return useContext(contextSetColor)
}

export default function UseProvider({children}) {
  const [color, setColor] = useState("primary");
  return (
    <>
      <contextColor.Provider value={color}>
        <contextSetColor.Provider value={setColor}>
          {children}
        </contextSetColor.Provider>
      </contextColor.Provider>
    </>
  )
}
UseProvider.propTypes = {
  children: PropTypes.element
}
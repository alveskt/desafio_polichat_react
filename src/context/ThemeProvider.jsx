import React, { useState } from 'react'

export const ThemeContext = React.createContext({})

export const ThemeProvider = ({children})=>{

    const[theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((current) => (current === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => React.useContext(ThemeContext);


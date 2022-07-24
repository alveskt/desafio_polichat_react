import React, { useState } from 'react';

import Chats from './components/Chats/Chats'
import Chat from './components/Chat/Chat'
import Header from './components/Header/Header'
import SideMenu from './components/SideMenu/SideMenu'
import {ChatProvider} from '../src/context/ChatProvider'
import {ThemeProvider} from '../src/context/ThemeProvider'
import ReactSwitch from 'react-switch';


import {BsSun} from 'react-icons/bs'
import {BsMoonStarsFill} from 'react-icons/bs'

import './App.css'
import './index.css';

const App = () => {
   
    const[theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme((current) => (current === 'light' ? 'dark' : 'light'));
    };

    return (
        <>
        <ThemeProvider value ={{theme, toggleTheme}}>
            <div id={theme}>
                <ChatProvider>
                    <Header/>
                    <SideMenu />
                    <div className={theme === 'dark' ? 'boxChatDark' : 'boxChatLight'}>
                        <Chats />
                        <Chat />
                    </div>
                </ChatProvider>
            </div>
            <div className='switch'>
                <label> {theme === 'dark' ? <BsMoonStarsFill size={28} color='white'/> : '' }</label>
                <ReactSwitch onChange={toggleTheme} checked={theme ==='dark'}/>
                <label> {theme === 'light' ? <BsSun size={28}/> : '' }</label>
            </div>
        </ThemeProvider>
        </>
    )
}
export default App;
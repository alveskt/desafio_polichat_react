import React, { useState } from 'react';
import perfil1 from '../assets/img/perfil1.jpeg'

export const ChatContext = React.createContext({});

export const ChatProvider = ({children}) => {
  const [chatsContext, setChatsContext] = useState({
            picture: perfil1,
            name: 'Gustavo Alves',
            last_message: 'Olá, tudo bem?',
            last_activity: 'Há 23 horas',
  });

  return (
    <ChatContext.Provider
      value={{ chatsContext, setChatsContext }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => React.useContext(ChatContext);
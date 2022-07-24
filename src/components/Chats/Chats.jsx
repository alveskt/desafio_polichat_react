import React, { useState } from 'react';

import {useChat} from '../../context/ChatProvider'
import './Chats.css'

import perfil1 from '../../assets/img/perfil1.jpeg'
import perfil2 from '../../assets/img/perfil2.jpeg'
import perfil3 from '../../assets/img/perfil3.jpeg'

import {FaWhatsappSquare} from 'react-icons/fa'
import {AiOutlineComment} from 'react-icons/ai'
import {FaCommentDots} from 'react-icons/fa'
import {GoMail} from 'react-icons/go'
import {CgUserList} from 'react-icons/cg'
import {FiFilter} from 'react-icons/fi'

const Chats = () => {

    const {setChatsContext} = useChat();

    const msgs = [
        {
            id: '1',
            picture: perfil2,
            name: 'Gustavo Alves',
            last_activity: 'Há 23 horas',
            last_message: 'Olá, tudo bem?',
            contact_name: 'Thiago Cunha',
            online: false,
        },
        {
            id: '2',
            picture: perfil1,
            name: 'Gustavo Silveira',
            last_activity: 'Há 6 horas',
            last_message: 'Oi',
            contact_name: 'Fabricio Leonard',
            online: false,
        },
        {
            id: '3',
            picture: perfil3,
            name: 'Gustavo A. Silveira',
            last_activity: 'Há 2 horas',
            last_message: 'Bom dia',
            contact_name: 'Celso Brandão',
            online: false,
        },
        {
            id: '4',
            picture: perfil2,
            name: 'Gustavo',
            last_activity: 'Há 7 horas',
            last_message: 'Boa tarde',
            contact_name: 'José Maria',
            online: false,
        },
        {
            id: '5',
            picture: perfil3,
            name: 'Gustavo A. Silveira',
            last_activity: 'Há 2 horas',
            last_message: 'Bom dia',
            contact_name: 'Marcella Motta',
            online: false,
        },
        {
            id: '6',
            picture: perfil1,
            name: 'Gustavo A. Silveira',
            last_activity: 'Há 2 horas',
            last_message: 'HELP',
            contact_name: 'Joaquin Barbosa',
            online: false,
        },
    ]

    const [chatSelected, setChatSelected] = useState(0);

    const handleChatSelect = (msg) =>{
        setChatSelected(msg.id)
        setChatsContext(msg)
    }

    return (
        <div className='chats-container'>
            <section className='chats-icones-topo'>
                <p className='icones-chats'> <AiOutlineComment size={28}/></p>
                <p className='icones-chats'> <FaCommentDots size={28}/></p>
                <p className='icones-chats'> <GoMail size={28}/></p>
            </section>
            <section className='chats-pesquisa'>
                <input className='chat-input' type="search" placeholder='pesquisar' />
                <button className='chats-botao'><CgUserList size={20} color='rgb(100, 131, 160)'/></button>
                <button className='chats-botao'><FiFilter size={20} color='rgb(100, 131, 160)'/></button>
            </section>
            <section className='chats-mensagens-abertas'>
                
                {msgs?.map((msg, i) => (
                    <div className='chats-mensagem' onClick={() => handleChatSelect(msg)} key={i} style={chatSelected === msg.id ? {borderLeft: '6px solid #00a884'} : {}}>
                        <img className='img-perfil' src={msg?.picture}  alt="Picture" />
                        <p className='chats-nome'>{msg?.name}</p>
                        <p className='chats-tempo__msg'>{msg?.last_activity} <FaWhatsappSquare size={15} color='rgba(8,185,137,255)'/></p>
                        <p className='chats-msg__enviada'>{msg?.last_message}</p>
                        <p className='chats-contato'> <CgUserList size={15} color='rgb(100, 131, 160)'/> {msg?.contact_name}</p>                
                    </div>
                ))}
            </section>
        </div>
    )
}
export default Chats;
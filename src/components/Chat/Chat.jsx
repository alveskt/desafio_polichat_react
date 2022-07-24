import React from 'react';

import {useChat} from '../../context/ChatProvider'

import './Chat.css'
import '../Chats/Chats'

import {BsThreeDotsVertical} from 'react-icons/bs'
import {BsPhone} from 'react-icons/bs'
import {GiOpenBook} from 'react-icons/gi'
import {MdTextFields} from 'react-icons/md'
import {TbNotebook} from 'react-icons/tb'
import {BsPaperclip} from 'react-icons/bs'
import {GoRocket} from 'react-icons/go'
import {FaRegSmile} from 'react-icons/fa'
import {FaWhatsappSquare} from 'react-icons/fa'
import {FaMicrophone} from 'react-icons/fa'
import {RiSendPlaneFill} from 'react-icons/ri'
import {FcBusinesswoman} from 'react-icons/fc'
import {BiCheckDouble} from 'react-icons/bi'

const Chat = () =>{

    const {chatsContext} = useChat();
    return (
        <section className='chat-aberto-container'>
            <section className='chat-aberto-topo'>
                <div className='chat-aberto-topo-inicio'>
                    <img className='chat-aberto-circ' src={chatsContext.picture}  alt='Picture'/>
                    <p className='chat-aberto-nome'>{chatsContext.name}</p>
                </div>
                <div className='chat-aberto-topo-final'>
                    <p className='chat-aberto-circ ga'>GA</p>
                    <p className='icone-3dots'><BsThreeDotsVertical size={25} color='white' /></p>
                </div>
            </section>
            <section className='chat-aberto-corpo__msg'>
                <div className='msg__enviada__fixa'>
                    <p className='icone-mulher'><FcBusinesswoman size={25}/></p>
                    <div>
                        <p className='msg-fixa__importante'>
                            Atribua uma nota ao nosso atendimento clicando no link a seguir:
                        </p>
                        <a className='link' href="https://polichat.com.br/">https://polichat.com.br/</a>
                        <p className='msg-fixa__lembrete'>
                        Lembrando que a nota da 1º pergunta é referente ao meu atendimento.
                        </p>
                    </div>
                    <div> 
                        <p>
                           <p  className='msg-fixa__importante'>
                           <GiOpenBook size={25} color='white'/>
                            Confira nossa Central de Ajuda no site:
                            </p> 
                            <p className='link'> <a  href="https://polichat.com.br/">https://polichat.com.br/</a></p> 
                            Seu protocolo foi o número 41712188
                        </p>
                        <p className='send'>
                            18:22
                            <BiCheckDouble size={15} color='#00aced'/>
                        </p>
                    </div>
                </div>
                <div className='conversa-finalizada'>
                    <p className='msg-conversa-finalizada'>Esta conversa foi finalizada por Gustavo Alves em 24/07/2022 às 00:00</p>
                </div>
                <div className='chat-aberto-msg__enviada'>   
                    <img className='chat-aberto-circ' src={chatsContext.picture}  alt="Picture" />
                    <div className='chat-msg__enviada'>
                        <p className='msg-enviada'>{chatsContext.last_message}</p>
                        <p className=' hora-msg-enviada'>
                            {chatsContext.last_activity}
                        </p>
                    </div>
                    <p className='icones icone-chat-aberto'><FaWhatsappSquare size={20} color='rgba(8,185,137,255)'/></p>
              </div>
            </section>
            <section className='input-chat'>
               <p className='icones icone-chat-aberto'><FaWhatsappSquare size={20} color='rgba(8,185,137,255)'/></p>
               <input type="text" placeholder='Aa' className='chat-aberto__input'/>
            </section>
            <section className='chat-rodape'>
                <div className='chat-aberto-icones'>
                    <p className='icones icones-rodape-chat'><MdTextFields size={20} /></p>
                    <p className='icones icones-rodape-chat'><BsPhone size={20} /></p>
                </div>
                <div className='chat-aberto-icones'>
                    <p className='icones icones-rodape-chat'><TbNotebook size={20} /></p>
                    <p className='icones icones-rodape-chat'><BsPaperclip size={20} /></p>
                    <p className='icones icones-rodape-chat'><GoRocket size={20} /></p>
                    <p className='icones icones-rodape-chat'><FaRegSmile size={20} /></p>
                    <p className='icones icones-rodape-chat'><FaMicrophone size={20} /></p>
                    <p className='icones icones-rodape-chat'><RiSendPlaneFill size={20} color='rgba(6, 96, 105, 255)' /></p>
                </div>
               
            </section>
        </section>
    )
};

export default Chat;
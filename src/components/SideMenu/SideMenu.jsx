
import React, { useState } from 'react';

import './SideMenu.css'
import '../Header/Header.css'

import {VscHome} from 'react-icons/vsc'
import {AiOutlineComment} from 'react-icons/ai'
import {BiPieChart} from 'react-icons/bi'
import {FaRegBuilding} from 'react-icons/fa'
import {BsGear} from 'react-icons/bs'
import {MdAttachMoney} from 'react-icons/md'
import {FiTool} from 'react-icons/fi'
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import {BsChevronDoubleRight} from 'react-icons/bs'

const SideMenu  = () => {
    return (
        <div className='meu-lateral-container'>
                <a className='icone-lateral'>
                    <p> <VscHome size={28}/></p>
                </a>
                <a className='icone-lateral'>
                    <p><AiOutlineComment size={28}/></p>
                </a>
                <a className='icone-lateral'>
                    <p><BiPieChart size={28}/></p>
                </a>
                <a className='icone-lateral'>
                    <p><FaRegBuilding size={28}/></p>
                </a>
                <a className='icone-lateral'>
                    <p><BsGear size={28}/></p>
                </a>
                <a className='icone-lateral'>
                    <p><MdAttachMoney size={28}/></p>
                </a>
                <a className='icone-lateral'>
                    <p><FiTool size={28}/></p>            
                </a>
                <p className='icone-lateral interrogacao'> <AiOutlineQuestionCircle size={28}/></p>
                <div className='circ_inicial gh'>
                    <p>GA</p>
                </div>
                <p className='icone-lateral seta'> <BsChevronDoubleRight size={18}/></p>
                <div className='versao'>
                    <h5>Versão</h5>
                    <h4>v0.15.182</h4>
                </div>    
        </div>
    )
}

export default SideMenu;
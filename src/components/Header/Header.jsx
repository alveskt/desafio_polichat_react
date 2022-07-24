import React, { useState } from 'react';

import './Header.css'

import {AiOutlineComment} from 'react-icons/ai'
import {RiWhatsappFill} from 'react-icons/ri'
import {GoGlobe} from 'react-icons/go'
import {GiMegaphone} from 'react-icons/gi'
import {AiOutlineDeploymentUnit} from 'react-icons/ai'
import {AiOutlineDown} from 'react-icons/ai'
import {BsToggle2On} from 'react-icons/bs'
import {BsSun} from 'react-icons/bs'
import {BsMoonStarsFill} from 'react-icons/bs'
import {MdSupportAgent} from 'react-icons/md'

const Header = () => {
     return (
        <div className='header-container'>
            <div className='logo'>
                
            </div>
            <div className='header__polichat'>
                <p className='icone'> <AiOutlineComment size={28} color='rgba(6, 96, 105, 255)'/></p>
                <h2>POLICHAT</h2>
            </div>
            <div className='circ_inicial P'>
                <p>P</p>
            </div>
            <div>
                <p>Poli</p>
            </div>
            <p className='icone seta-baixo1'><AiOutlineDown size={18}/>  </p>
            <p className='zap'> <RiWhatsappFill size={25} color='rgba(8,185,137,255)'/></p>
            <div className='canal'>
                <p>Canal Canal SDR 0001</p>
                <p><i>90</i><em>/1000</em> Contatos-dia</p>
            </div>
            <p className='icone'><AiOutlineDown size={18} color='white'/>  </p> 
            <div>
                <button className='botao-indique'>Indique e ganhe</button>
            </div>
            <p className='icone'> <MdSupportAgent size={28}/></p>
            <p className='icone'> <GoGlobe size={28}/></p>
            <p className='icone'> <GiMegaphone size={28}/></p>
            <p className='icone'> <AiOutlineDeploymentUnit size={28}/></p>
            {/* <p className='icone'> <BsSun size={28}/></p>
            <p className='icone'> <BsToggle2On size={28} color='rgb(13,187,196)'/></p>
            <p className='icone'> <BsMoonStarsFill size={28}/></p> */}
      </div>
    )
};

export default Header;
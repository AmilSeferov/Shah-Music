import './nav.css'
import { IoHome } from "react-icons/io5";
import { GiCompass } from "react-icons/gi";
import { SiYoutubemusic } from "react-icons/si";
import { MdWorkspacePremium } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useState } from 'react';
export const Nav=()=>{
    const [style, setstyle]=useState([1,0,0,0])
    return<>
    <ul onClick={(e)=>{
   console.log( e.target)

    }}>
        <li onClick={()=>{
            setstyle([1,0,0,0])
        }}
         style={style[0]?{backgroundColor:' rgb(82, 82, 81)' }:{}}>
            <Link to='/'>
        <IoHome style={{fontSize:'25px'}}/>
          <p className='title'>Home</p>
          </Link>
        </li>
        <li onClick={()=>{
            setstyle([0,1,0,0])
        }}
         style={style[1]?{backgroundColor:' rgb(82, 82, 81)' }:{}}>
        <Link to='/Discovery'>
        <GiCompass style={{fontSize:'25px'}}/>
            <p className='title'>Discover</p>
            </Link>
        </li>
        <li onClick={()=>{
            setstyle([0,0,1,0])
        }}
        style={style[2]?{backgroundColor:' rgb(82, 82, 81)' }:{}}>
        <Link to='/'>
        <SiYoutubemusic style={{fontSize:'25px'}}/>
            <p className='title'>Bookcase</p>
            </Link>
        </li>
        <li onClick={()=>{
            setstyle([0,0,0,1])
        }} 
        style={style[3]?{backgroundColor:' rgb(82, 82, 81)' }:{}}>
        <Link to='/'>
        <MdWorkspacePremium style={{fontSize:'25px'}}/>
            <p className='title'>LevelUp</p>
            </Link>
        </li>
    </ul>
    </>
}
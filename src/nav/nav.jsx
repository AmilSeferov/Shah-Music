import './nav.css'
import { IoHome } from "react-icons/io5";
import { GiCompass } from "react-icons/gi";
import { SiYoutubemusic } from "react-icons/si";
import { MdWorkspacePremium } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useState } from 'react';
export const Nav=({pr})=>{
    const [style, setstyle]=useState([1,0,0,0])
    if(pr){
return<>
<nav>
    <ul className='ul1'>
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
    <button type="button" className="button">
  <span className="button__text">Add List</span>
  <span className="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
</button>
<ul className='list'>
    <li>
        <p className='listName'>Funny</p>
        <p className='user'>Amil Safarov</p>
    </li>
    <li>
        <p className='listName'>Funny</p>
        <p className='user'>Amil Safarov</p>
    </li>
    <li>
        <p className='listName'>Funny</p>
        <p className='user'>Amil Safarov</p>
    </li>
    <li>
        <p className='listName'>Funny</p>
        <p className='user'>Amil Safarov</p>
    </li>
    <li>
        <p className='listName'>Funny</p>
        <p className='user'>Amil Safarov</p>
    </li>
    <li>
        <p className='listName'>Funny</p>
        <p className='user'>Amil Safarov</p>
    </li>
    <li>
        <p className='listName'>Funny</p>
        <p className='user'>Amil Safarov</p>
    </li>
    <li>
        <p className='listName'>Funny</p>
        <p className='user'>Amil Safarov</p>
    </li>
    <li>
        <p className='listName'>Funny</p>
        <p className='user'>Amil Safarov</p>
    </li>
    <li>
        <p className='listName'>Funny</p>
        <p className='user'>Amil Safarov</p>
    </li>
    <li>
        <p className='listName'>Funny</p>
        <p className='user'>Amil Safarov</p>
    </li>
</ul>
    </nav>
</>
    }else{
   return<>
    <ul className='ul'  onClick={(e)=>{
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
}
import './nav.css'
import { IoHome } from "react-icons/io5";
import { GiCompass } from "react-icons/gi";
import { SiYoutubemusic } from "react-icons/si";
import { MdWorkspacePremium } from "react-icons/md";
import { Link } from 'react-router-dom';
export const Nav=()=>{
    return<>
    <ul onClick={(e)=>{
   console.log( e.target)

    }}>
        <li  style={{backgroundColor:' rgb(82, 82, 81)' }}>
            <Link to='/'>
        <IoHome style={{fontSize:'25px'}}/>
          <p className='title'>Home</p>
          </Link>
        </li>
        <li>
        <Link to='/Discovery'>
        <GiCompass style={{fontSize:'25px'}}/>
            <p className='title'>Discover</p>
            </Link>
        </li>
        <li>
        <Link to='/'>
        <SiYoutubemusic style={{fontSize:'25px'}}/>
            <p className='title'>Bookcase</p>
            </Link>
        </li>
        <li>
        <Link to='/'>
        <MdWorkspacePremium style={{fontSize:'25px'}}/>
            <p className='title'>LevelUp</p>
            </Link>
        </li>
    </ul>
    </>
}
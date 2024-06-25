import './nav.css'
import { IoHome } from "react-icons/io5";
import { GiCompass } from "react-icons/gi";
import { SiYoutubemusic } from "react-icons/si";
import { MdWorkspacePremium } from "react-icons/md";
export const Nav=()=>{
    return<>
    <ul onClick={(e)=>{
   console.log( e.target)
    }}>
        <li  style={{backgroundColor:' rgb(82, 82, 81)' }}>
        <IoHome style={{fontSize:'25px'}}/>
            <p className='title'>Home</p>
        </li>
        <li>
        <GiCompass style={{fontSize:'25px'}}/>
            <p className='title'>Discover</p>
        </li>
        <li>
        <SiYoutubemusic style={{fontSize:'25px'}}/>
            <p className='title'>Bookcase</p>
        </li>
        <li>
        <MdWorkspacePremium style={{fontSize:'25px'}}/>
            <p className='title'>LevelUp</p>
        </li>
    </ul>
    </>
}
import './play.css'
import { MdFullscreen } from "react-icons/md";
import { CgMiniPlayer } from "react-icons/cg";
export const Play =()=>{

    return<>
    <div className="playcontainer">
        <div className="imgcontainer">
       <button><CgMiniPlayer/></button> 
       <button><MdFullscreen/></button> 
       
        </div>
    </div>
    </>
}


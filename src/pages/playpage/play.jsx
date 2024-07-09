import './play.css'
import { MdFullscreen } from "react-icons/md";
import { CgMiniPlayer } from "react-icons/cg";
import { Player } from '../../player-queue/player-queue';
export const Play =()=>{

    return<>
    <div className="playcontainer">
        <div className="imgcontainer">
       <button><CgMiniPlayer/></button> 
       <button><MdFullscreen/></button> 
       
        </div>
        <div className="side_panel">
          <Player/>
        </div>
    </div>
    </>
}


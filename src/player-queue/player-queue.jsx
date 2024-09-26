import { useSelector } from 'react-redux'
import {Player_queue_item} from './player-queue-item/player-queue-item.jsx'
import './player-queue.css'
export const Player=()=>{
    const data =useSelector(state=>state.music.data)
    console.log(data)
    return<>
    <div className="player_queue">
        <Player_queue_item/>
        <Player_queue_item/>
        <Player_queue_item/>
        <Player_queue_item/>
        <Player_queue_item/>
        <Player_queue_item/>
        <Player_queue_item/>
        <Player_queue_item/>
        <Player_queue_item/>
        <Player_queue_item/>
        <Player_queue_item/>
        <Player_queue_item/>
        <Player_queue_item/>
        <Player_queue_item/>
        <Player_queue_item/>
        <Player_queue_item/>
    </div>
    
    </>
}
import './player-queue-item.css'
export const Player_queue_item = ({artist,name,images}) =>{
   
   return <>
    <div className="p_q_item">
        <div style={images?{backgroundImage:`url('${images[2].url}')`}:''} className="img"></div>
        <div className="title"><p className='info'><span>{name}</span><span className='autor'>{artist}</span></p><span className='time'>2:23</span><button>i</button></div>
    </div>
    </>
}

import { useSelector } from "react-redux"
import { CardsList } from "../../cardsList/cardsList"
import './home.css'
import { Player } from "../../player-queue/player-queue"
import { Player_queue_item } from "../../player-queue/player-queue-item/player-queue-item"
export const Home=()=>{
const data =useSelector(state=>state.music.data)
    return<>
    <div className="home">
        {/* {
data.map((item,index)=>{
    console.log(item.album.images[0]);
  return <CardsList artists={item.artists} images={item.album.images[1]} index={index} key={index}/>
})
        }
       <CardsList/> */}
      {
        data.map(item=>{
        console.log(item.album.images)
        return<>
        <Player_queue_item artist={item.album.artists[0].name} name={item.album.name} images={item.album.images}/>
        </>
        })
        // console.log(data.album)
      }
      

        </div>
    
         </>
}
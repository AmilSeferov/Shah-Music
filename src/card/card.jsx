import './card.css'
import './../../bmw.jpg'
export const Card=({artist,images})=>{
    console.log(images)
    return<>
    <div className="card-container">
        {/* <div style={{backgroundImage:`${images}`}} className="img"></div> */}
        <div  className="title">
            <p>{artist}</p>
            <p>narmalni</p>
        </div>
    </div>
    
    </>
}
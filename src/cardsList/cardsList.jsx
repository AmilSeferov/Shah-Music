import { Card } from '../card/card';
import './cardsList.css'

export const CardsList = ({artists,images,index}) => {
// console.log(images[0])
  return (
    <>

      <div className="cardsList">
        <h1 className="red">Famous</h1>
        <div className="list">
          {/* <Card artist={artists} images={images} key={index}/> */}
        </div>
      </div>
    </>
  );
};

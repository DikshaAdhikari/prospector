import React from 'react';
import "./middle.css";
import Segment from '../segment/segment'
import Sdata from "../Sdata";
import AddIcon from '@material-ui/icons/Add';

const Middle = () => {
  return (
      <>
          <div className='middle'>
            <h3>Prospector</h3>
            <input 
                type='text'
                placeholder='Search for a table or a segment'    
            />
            <p className='segments'>SEGMENTS</p>
            <div className='seg-div'>
                {Sdata.map((val, index) =>{
                    return(
                        <Segment 
                            key={index}
                            img={val.imgsrc}
                            num={val.num}
                        />
                    );
                })}
            </div>
            <div className='btn flex'><AddIcon className='small'/> Add a segment</div>
          </div>
      </>
  );
}
export default Middle;
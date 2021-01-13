import React from 'react';

const Segment = (props) => {
  return (
      <>
          <div className='segment'>
          <p className='flex'>
                    <img src={props.img} alt='seg'/>
                    <span>Segment {props.num}</span>
                </p>
          </div>
      </>
  );
}
export default Segment;
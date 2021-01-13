import React, {useState} from 'react';
import './main.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AppsIcon from '@material-ui/icons/Apps';
import ListIcon from '@material-ui/icons/List';

const Main = () => {
    const [expand, setExpand] = useState(false);
    const InputEvent = () => {
        setExpand(true);
    }
    const Shrink = () => {
        setExpand(false);
    }
  return (
      <>
          <div className='main' >
            <div className='header' >
                <img src='images/list.svg' alt='list'/>
                <ExpandMoreIcon style={{cursor: 'pointer'}} onClick={InputEvent}/>
                <img src='images/four.svg' alt="logo" width='20%'/>
            </div>
            <hr/>
            {expand?
                <div className='list'>
                    <div className='flex'>
                        <ListIcon/>
                        <span>List view</span>
                    </div> 
                    <div className='flex'>
                        <AppsIcon/>
                        <span>Grid view</span>
                    </div>    
                </div>
            :null}
            <div className='overview' onClick={Shrink}>
            </div>
          </div>
      </>
  );
}
export default Main;
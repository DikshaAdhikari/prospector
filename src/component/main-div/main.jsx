import React, {useState} from 'react';
import './main.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AppsIcon from '@material-ui/icons/Apps';
import ListIcon from '@material-ui/icons/List';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import AddIcon from '@material-ui/icons/Add';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import Tooltip from "@material-ui/core/Tooltip";

const Main = () => {
    const [expand, setExpand] = useState(false);

    const InputEvent = () => setExpand(true);
    const Shrink = () => setExpand(false);
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
                <div className='head'>
                    <SentimentSatisfiedAltIcon />
                    <h3>Segment 1</h3>
                    <ExpandMoreIcon style={{cursor: 'pointer', color: '#1875F0'}}/>
                </div>
                <div className='sub'>
                    <div className="box">
                        <AddIcon/>
                    </div>   
                </div>  
                
                <div className='head'>
                    <SentimentSatisfiedAltIcon />
                    <h3>Segment 2</h3>
                    <ExpandMoreIcon style={{cursor: 'pointer', color: '#888888'}}/>
                </div>
                <div className='sub'>
                    <div className='align'>
                        <div className="box" style={{borderColor: '#EA5A47'}}>
                            <SentimentSatisfiedAltIcon style={{color: '#EA5A47'}}/>
                        </div>
                        <div>Newyork-IT<br/>es-11-50</div>  
                    </div> 
                    <div className='align'>
                        <div className="box" style={{borderColor: '#F01875'}}>
                            <ThumbUpAltIcon style={{color: '#F01875'}}/>
                        </div>
                        <div>Newyork-IT<br/>es-11-50</div>  
                    </div>
                    <div className='align'>
                        <div className="box" style={{borderColor: '#7718F0'}}>
                            <ThumbUpAltIcon style={{color: '#7718F0'}}/>
                        </div>
                        <div>Newyork-IT<br/>es-11-50</div>  
                    </div>
                    <div className='align'>
                        <div className="box" style={{borderColor: '#1BB157'}}>
                            <ThumbUpAltIcon style={{color: '#1BB157'}}/>
                        </div>
                        <div>Newyork-IT<br/>es-11-50</div>  
                    </div>
                    <Tooltip title="Add a new table">
                    <div className='align'>
                        <div className="box" style={{borderColor: '#334BFA'}}>
                            <AddIcon style={{color: '#334BFA'}}/>
                        </div> 
                    </div>
                    </Tooltip>
                </div> 
                
                <div className='head'>
                        <SentimentSatisfiedAltIcon />
                        <h3>Segment 3</h3>
                </div>
                <div className='grid'>
                    <div className='flex'>
                        <img src='images/seq1.svg' alt='seg' />
                        <p>Newyork-ITes-11-50</p>
                    </div>
                    <div className='flex'>
                        <img src='images/seq1.svg' alt='seg' />
                        <p>Newyork-ITes-11-50</p>
                    </div>
                    <div className='flex'>
                        <img src='images/seq1.svg' alt='seg' />
                        <p>Newyork-ITes-11-50</p>
                    </div>
                    <div className='flex'>
                        <div className='button'>+</div>
                        <p>Add a table</p>
                    </div>
                </div>
            </div>
          </div>
      </>
  );
}
export default Main;
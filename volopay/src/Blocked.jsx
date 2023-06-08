import React from 'react'
import { useNavigate } from 'react-router-dom';

const Blocked = () => {
  const navigate = useNavigate();

  return (<>
    <div className='Head'>
      <h2>Select Tab</h2>
    </div>

    <div className="Select">
      <span className="unselected" onClick={() => navigate('/')}>All</span>
      <button className="unselected" onClick={() => navigate('/Your')}>
        Your
      </button>
      <button className="selected">
        Blocked
      </button>
    </div>
    <div className='msg'>Your blocked cards displayed here</div>

    <div className='cardportion'>
      <div className='blockedCard'>
        <span className='blockStatus'>
          Status : <span>Inactive</span>
        </span>
        <span  className='blockedname'>Hotstar</span>
      </div>
      <div className='blockedCard'>
        <span className='blockStatus'>
          Status : <span>Inactive</span>
        </span>
        <span  className='blockedname'>Ahaa</span>
      </div>
      <div className='blockedCard'>
        <span className='blockStatus'>
          Status : <span>Inactive</span>
        </span>
        <span  className='blockedname'>SBI</span>
      </div>
    </div>
    
  </>)
}

export default Blocked
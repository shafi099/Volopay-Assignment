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
    <button className="unselected"  onClick={() => navigate('/Your')}>
      Your
    </button>
    <button className="selected">
      Blocked
    </button>
  </div>
  </>)
}

export default Blocked
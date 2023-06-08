import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Your = ({ cards }) => {
  const navigate = useNavigate();
  const [selectedOwnerId, setSelectedOwnerId] = useState('None');

  const handleOwnerChange = (event) => {
    setSelectedOwnerId(event.target.value);
  };

  return (
    <>
      <div className='Head'>
        <h2>Select Tab</h2>
      </div>

      <div className="Select">
        <span className="unselected" onClick={() => navigate('/')}>All</span>
        <button className="selected">
          Your
        </button>
        <button className="unselected" onClick={() => navigate('/Blocked')}>
          Blocked
        </button>
      </div>

      <div  className='idOptions'>
        <label htmlFor='ids'>Select Id</label>
        <select name='ids' value={selectedOwnerId} onChange={handleOwnerChange}>
          <option value="None">None</option>
          <option value="1">Id 1</option>
          <option value="2">Id 2</option>
        </select>
      </div>

      <div className="cardportion">
        {cards.map((card) => {
          if (card.owner_id.toString() === selectedOwnerId || selectedOwnerId === '') {
            return (
              <div key={card.name} className="card">
                <div className="card-type">{card.card_type}</div>
                <div className="Name">{card.name}</div>
                <div className="expiry">
                  {card.card_type === 'burner' && <span>Expiry: {card.expiry}</span>}
                  {card.card_type === 'subscription' && <span>Limit: {card.limit}</span>}
                  <span>Status: {card.status}</span>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </>
  );
}

export default Your;

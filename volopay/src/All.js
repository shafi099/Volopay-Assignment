import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const All = ({ cards }) => {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [cardTypeFilter, setCardTypeFilter] = useState('All');
  const [limitFilter, setLimitFilter] = useState('None');
  const Navigate = useNavigate();

  const handleSearch = (event) => {
    setCardTypeFilter('All');
    setSearchQuery(event.target.value);
  };

  const handleCardTypeFilter = (event) => {
    setCardTypeFilter(event.target.value);
  };

  const handleLimitFilter = (event) => {
    setLimitFilter(event.target.value);
  };

  const filteredCards = cards.filter((card) =>
    card.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filterByLimit = (card) => {
    if (limitFilter === 'None') {
      return true;
    } else if (limitFilter === '50') {
      return card.limit > 50;
    } else if (limitFilter === '49') {
      return card.limit <= 50;
    }
  };

  return (
    <>
      <div className='Head'>
        <h2>Select Tab</h2>
      </div>

      <div className="Select">
        <span className="selected">All</span>
        <button className="unselected" onClick={() => Navigate('/Your')}>
          Your
        </button>
        <button className="unselected" onClick={() => Navigate('/Blocked')}>
          Blocked
        </button>
      </div>

      <div className='SearchOptions'>
        <input
          type="text"
          placeholder="Search by card name"
          value={searchQuery}
          onChange={handleSearch}
        />
        <select value={cardTypeFilter} onChange={handleCardTypeFilter}>
          <option value="All">All Card Types</option>
          <option value="burner">Burner Cards</option>
          <option value="subscription">Subscription Cards</option>
        </select>
      </div>

      {cardTypeFilter === 'subscription' && (
        <div className='SearchOptions'>
          <label htmlFor='limit'>Sort by Limit</label>
          <select name='limit' value={limitFilter} onChange={handleLimitFilter}>
            <option value="None">None</option>
            <option value="50">Limit above 50</option>
            <option value="49">Limit below 50</option>
          </select>
        </div>
      )}

      <div className="cardportion">
        {filteredCards.map((card) => {
          if (cardTypeFilter === 'All' || card.card_type === cardTypeFilter) {
            if (card.card_type === 'subscription' && !filterByLimit(card)) {
              return null;
            }
            return (
              <div key={card.name} className="card">
                <div className="card-type">{card.card_type}</div>
                <div className="Name">{card.name}</div>
                <div className="expiry">
                  {card.card_type === 'burner' && (
                    <span>Expiry: <span className='expire'>{card.expiry}</span></span>
                  )}
                  {card.card_type === 'subscription' && (
                    <span>Limit: <span className='expire'>{card.limit}</span></span>
                  )}
                  <span>Status: <span className='active'>{card.status}</span></span>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </>
  );
};

export default All;

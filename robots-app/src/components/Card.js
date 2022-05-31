import React from 'react';

const Card = ({ id, name, userName, email }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <h1>{userName}</h1>
      <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
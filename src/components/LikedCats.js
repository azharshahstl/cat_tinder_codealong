import React from 'react';
import CatCard from './CatCard';

const LikedCats = ({ cats, handleChangeOfHeart }) => {
  const catCards = cats.map(cat => (
    <CatCard
      key={cat.id}
      cat={cat}
      handleChangeOfHeart={handleChangeOfHeart}
    />
  )
);

  return (
    <div className="LikedCats">
      <h2>Liked Cats</h2>
      { catCards }
    </div>
  )
}

export default LikedCats;

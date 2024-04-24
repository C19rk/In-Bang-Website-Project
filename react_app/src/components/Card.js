import React from 'react';
import '../screens/AboutUs.css'; // 카드 스타일을 위한 CSS 파일

function Card({ image }) {
  return (
    <div className="card">
      <img src={image} alt="Card" />
    </div>
  );
}

export default Card;

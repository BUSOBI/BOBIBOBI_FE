import React from 'react';
import './Survey.css';
import mathImage from '../images/math.png'; // 올바른 경로로 수정

const items = [
  { id: 1, text: '수학', image: mathImage, link: '/path1' },
  { id: 2, text: '수학', image: mathImage, link: '/path2' },
  { id: 3, text: '수학', image: mathImage, link: '/path3' },
  { id: 4, text: '수학', image: mathImage, link: '/path4' },
  { id: 5, text: '수학', image: mathImage, link: '/path5' },
];

const Survey = () => {
  return (
    <div>
      <div className="survey">
        <h2>부비부비에</h2>
        <p className="subtexts">추가 되었으면 하는 과목을 알려주세요!</p>
        <p className="subtext">설문에 참여해주세요!</p>
        <div className="right-text">부비부비</div>
      </div>
      <div className="items-container">
        {items.map(item => (
          <a key={item.id} href={item.link} className="item">
            <img src={item.image} alt={item.text} />
            <p>{item.text}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Survey;

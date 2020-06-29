import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  font-size: 24px;
  > ul {
    display: flex;
    background: #c4c4c4;
    > li {
      flex-grow: 1;
      text-align: center;
      padding: 18px 0;
      position: relative;
      &.selected::after {
        content: '';
        display: block;
        height: 4px;
        background: #333333;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
      }
    }
  }
`;

const CategorySection: React.FC = () => {
  const [category, setCategory] = useState('expense');
  return (
    <Wrapper>
      <ul>
        <li className={category === 'expense' ? 'selected' : ''} onClick={() => setCategory('expense')}>支出</li>
        <li className={category === 'income' ? 'selected' : ''} onClick={() => setCategory('income')}>收入</li>
      </ul>
    </Wrapper>
  );
};

export {CategorySection};
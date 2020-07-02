import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.section`
  font-size: 24px;
  > ul {
    display: flex;
    background: #ffffff;
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

type Props = {
  value: 'expense' | 'income'
  onChange: (value: 'expense' | 'income') => void
}

const CategorySection: React.FC<Props> = (props) => {

  return (
    <Wrapper>
      <ul>
        <li className={props.value === 'expense' ? 'selected' : ''} onClick={() => props.onChange('expense')}>支出</li>
        <li className={props.value === 'income' ? 'selected' : ''} onClick={() => props.onChange('income')}>收入</li>
      </ul>
    </Wrapper>
  );
};

export {CategorySection};
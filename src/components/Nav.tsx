import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';

const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  > ul {
    display: flex;
    > li {
      flex-grow: 1;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 6px 0;
    }
  }
`;

function Nav() {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="/tags">
            <Icon name="tags"/>
            <span>标签</span>
          </Link>
        </li>
        <li>
          <Link to="/money">
            <Icon name="money"/>
            <span>记账</span>
          </Link>
        </li>
        <li>
          <Link to="/statistics">
            <Icon name="statistics"/>
            <span>统计</span>
          </Link>
        </li>
      </ul>
    </NavWrapper>
  );
}

export default Nav;
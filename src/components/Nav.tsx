import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';

require('assets/icons/money.svg');
require('assets/icons/tags.svg');
require('assets/icons/statistics.svg');

const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  > ul {
    display: flex;
    > li{
      flex-grow: 1;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 6px 0;
      > .nav-icon{
        width: 24px;
        height: 24px;
        margin-bottom: 2px;
      }
    }
  }
`;

function Nav() {
  return (
    <NavWrapper>
      <ul>
        <li>
          <svg className="nav-icon">
            <use xlinkHref="#tags"/>
          </svg>
          <Link to="/tags">标签</Link>
        </li>
        <li>
          <svg className="nav-icon">
            <use xlinkHref="#money"/>
          </svg>
          <Link to="/money">记账</Link>
        </li>
        <li>
          <svg className="nav-icon">
            <use xlinkHref="#statistics"/>
          </svg>
          <Link to="/statistics">统计</Link>
        </li>
      </ul>
    </NavWrapper>
  );
}

export default Nav;
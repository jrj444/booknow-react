import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';

const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  background: #ffffff;
  > ul {
    display: flex;
    > li {
      flex-grow: 1;
      text-align: center;
      > a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 6px 0;
        .icon {
          width: 24px;
          height: 24px;
          margin-bottom: 2px;
        }
        &.selected {
          color: #027aff;
          .icon{
            fill: #027aff;
          }
        }
      }
    }
  }
`;

function Nav() {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink exact to="/tags" activeClassName="selected">
            <Icon name="tags"/>
            <span>标签</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name="money"/>
            <span>记账</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="statistics"/>
            <span>统计</span>
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
}

export default Nav;
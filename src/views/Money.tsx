import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';

const TagsSection = styled.section`
  background: #ffffff;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  flex-grow: 1;
  > ol {
    display: flex;
    margin: 0 -12px;
    > li {
      background: #d9d9d9;
      border-radius: 18px;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
    }
  }
  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333333;
    color: #666666;
    margin-top: 8px;
  }
`;

const NotesSection = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  > label {
    display: flex;
    align-items: center;
    > span {
      margin-right: 16px;
      white-space: nowrap;
    }
    > input {
      display: block;
      width: 100%;
      height: 72px;
      border: none;
      background: none;
    }
  }
`;

const CategorySection = styled.section`
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

const NumberPadSection = styled.section`
  display: flex;
  flex-direction: column;
  > .output {
    background: #ffffff;
    font-size: 36px;
    text-align: right;
    padding: 0 16px;
    line-height: 72px;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25), inset 0 5px 5px -5px rgba(0,0,0,0.25)
  }
  > .pad {
    > button {
      float: left;
      width: 25%;
      height: 64px;
      border: none;
      &.ok {
        height: 128px;
        float: right;
      }
      &.zero {
        width: 50%;
      }
    }
  }
`;

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`


function Money() {
  return (
    <MyLayout>
      <TagsSection>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <button>新增标签</button>
      </TagsSection>
      <NotesSection>
        <label>
          <span>备注</span>
          <input type="text" placeholder="在这里添加备注"/>
        </label>
      </NotesSection>
      <CategorySection>
        <ul>
          <li className="selected">支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <NumberPadSection>
        <div className="output">100</div>
        <div className="pad clearfix">
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button className="ok">OK</button>
          <button className="zero">0</button>
          <button>.</button>
        </div>
      </NumberPadSection>
    </MyLayout>
  );
}

export default Money;
import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
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
      font-size: 18px;
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

const NumberPadSection = () => {
  const [output, _setOutput] = useState('0');
  const setOutput = (stringNum: string) => {
    if (stringNum.length > 16) {
      stringNum = stringNum.slice(0, 16);
    } else if (stringNum.length === 0) {
      stringNum = '0';
    }
    _setOutput(stringNum);
  };
  const onNumberClick = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) {return;}
    switch (text) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if (output === '0') {
          setOutput(text);
        } else {
          setOutput(output + text);
        }
        break;
      case '.':
        if (output.indexOf('.') >= 0) {return;}
        setOutput(output + '.');
        break;
      case 'OK':

        break;
      case '删除':
        if (output.length === 1) {
          setOutput('0');
        } else {
          setOutput(output.slice(0, -1) || '0');
        }
        break;
      case '清空':
        setOutput('0');
        break;
    }

  };
  return (
    <Wrapper>
      <div className="output">{output}</div>
      <div className="pad clearfix" onClick={onNumberClick}>
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
    </Wrapper>
  );
};

export {NumberPadSection};
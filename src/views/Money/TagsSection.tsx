import styled from 'styled-components';
import React from 'react';
import {useTags} from '../../hooks/useTags';

const Wrapper = styled.section`
  background: #ffffff;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  flex-grow: 1;
  > ol {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -12px;
    > li {
      background: #d9d9d9;
      display: inline-block;
      border-radius: 18px;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
      &.selected {
        background: #666666;
        color: #ffffff;
      }
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

type Props = {
  value: number[]
  onChange: (value: number[]) => void
}

const TagsSection: React.FC<Props> = (props) => {
  const {tags, addTag} = useTags();
  const selectedTagID = props.value;
  const onToggleTag = (tagID: number) => {
    if (selectedTagID.indexOf(tagID) >= 0) {
      props.onChange(selectedTagID.filter(t => t !== tagID));
    } else {
      props.onChange([...selectedTagID, tagID]);
    }
  };
  const getClass = (tagID: number) => {
    return selectedTagID.indexOf(tagID) >= 0 ? 'selected' : '';
  };
  return (
    <Wrapper>
      <ol>
        {tags.map(tag => <li key={tag.id} onClick={() => onToggleTag(tag.id)}
                             className={getClass(tag.id)}>{tag.name}</li>)}
      </ol>
      <button onClick={addTag}>新增标签</button>
    </Wrapper>
  );
};

export {TagsSection};
import styled from 'styled-components';
import React, {useState} from 'react';

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

const TagsSection: React.FC = () => {
  const [tags, setTags] = useState<string[]>(['购物', '饮食', '住宿', '交通']);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const onAddTag = () => {
    const tagName = window.prompt('请输入标签名：');
    if (tagName !== null) {
      setTags([...tags, tagName]);
    }
  };
  const onToggleTag = (tag: string) => {
    if (selectedTags.indexOf(tag) >= 0) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  const getClass = (tag: string) => {
    return selectedTags.indexOf(tag) >= 0 ? 'selected' : '';
  };
  return (
    <Wrapper>
      <ol>
        {tags.map(tag => <li key={tag} onClick={() => onToggleTag(tag)} className={getClass(tag)}>{tag}</li>)}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );
};

export {TagsSection};
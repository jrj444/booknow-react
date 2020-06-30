import React from 'react';
import {useTags} from '../useTags';
import {useParams} from 'react-router-dom';
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import {Button} from '../components/Button';
import styled from 'styled-components';

type Params = {
  id: string
}

const TopBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: #ffffff;
`;

const TagWrapper = styled.div`
  background: #ffffff;
  padding: 0 16px;
  font-size: 16px;
  margin-top: 8px;
  > label {
    display: flex;
    align-items: center;
    > span {
      margin-right: 12px;
      white-space: nowrap;
    }
    > input {
      display: block;
      width: 100%;
      height: 44px;
      border: none;
      background: none;
    }
  }
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 45px;
  > Button {
    background: #f56c5f;
    color: #ffffff;
  }
`;

const TagEdit: React.FC = () => {
  const {findTag, updateTag, deleteTag} = useTags();
  let {id: idString} = useParams<Params>();
  const tag = findTag(parseInt(idString));
  return (
    <Layout>
      <TopBar>
        <Icon name="left"/>
        <span>编辑标签</span>
        <Icon/>
      </TopBar>
      <TagWrapper>
        <label>
          <span>标签名</span>
          <input value={tag.name} onChange={(e) => updateTag(tag.id, e.target.value)} type="text" placeholder="标签名"/>
        </label>
      </TagWrapper>
      <Center>
        <Button onClick={() => {deleteTag(tag.id);}}>删除标签</Button>
      </Center>
    </Layout>
  );
};

export {TagEdit};
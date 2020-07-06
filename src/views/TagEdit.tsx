import React from 'react';
import {useTags} from 'hooks/useTags';
import {useParams, useHistory} from 'react-router-dom';
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import {Button} from 'components/Button';
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
    justify-content: center;
    > span {
      margin-right: 12px;
      white-space: nowrap;
      padding-top: 4px;
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
  let {id} = useParams<Params>();
  const tag = findTag(parseInt(id));
  const history = useHistory();
  const onCLickBack = () => {
    history.goBack();
  };
  if (tag) {
    return (
      <Layout>
        <TopBar>
          <Icon name="left" onClick={onCLickBack}/>
          <span>编辑标签</span>
          <Icon/>
        </TopBar>
        <TagWrapper>
          <label>
            <span>标签名</span>
            <input value={tag.name} onChange={(e) => updateTag(tag.id, {name: e.target.value})}
                   placeholder="标签名" type="text"/>
          </label>
        </TagWrapper>
        <Center>
          <Button onClick={() => deleteTag(tag.id)}>删除标签</Button>
        </Center>
      </Layout>
    );
  } else {
    return (
      <div>
        tag不存在
      </div>
    );
  }

};

export {TagEdit};
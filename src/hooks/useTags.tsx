import {useEffect, useState} from 'react';
import {createID} from 'lib/createID';
import {useUpdate} from './useUpdate';

const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>([]);
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tagList') || '[]');
    if (localTags.length === 0) {
      localTags = [
        {id: createID(), name: '购物'},
        {id: createID(), name: '饮食'},
        {id: createID(), name: '交通'},
        {id: createID(), name: '工资'},
        {id: createID(), name: '奖金'},
        {id: createID(), name: '其他'}
      ];
    }
    setTags(localTags);
  }, []);
  useUpdate(() => {
    window.localStorage.setItem('tagList', JSON.stringify(tags));
  }, tags);

  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };
  const updateTag = (id: number, obj: { name: string }) => {
    const index = findTagIndex(id);
    const tagsClone = JSON.parse(JSON.stringify(tags));
    tagsClone.splice(index, 1, {id: id, name: obj.name});
    setTags(tagsClone);
  };
  const deleteTag = (id: number) => {
    const index = findTagIndex(id);
    const tagsClone = JSON.parse(JSON.stringify(tags));
    tagsClone.splice(index, 1);
    setTags(tagsClone);
  };
  const addTag = () => {
    const tagName = window.prompt('请输入标签名：');
    if (tagName === '') {
      window.alert('标签名不能为空，请重新新建标签！');
    } else if (tagName !== null) {
      setTags([...tags, {id: createID(), name: tagName}]);
    }
  };
  const getName = (id: number) => {
    const tag = tags.filter(t => t.id === id)[0];
    return tag ? tag.name : '';
  };
  return {tags, setTags, findTag, updateTag, findTagIndex, deleteTag, addTag, getName};
};

export {useTags};


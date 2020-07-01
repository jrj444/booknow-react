import {useEffect, useState} from 'react';
import {createID} from './lib/createID';
import {useUpdate} from './hooks/useUpdate';

const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>([]);
  useEffect(() => {
    setTags(JSON.parse(window.localStorage.getItem('tagList') || '[]'));
  }, []);
  useUpdate(() => {
    window.localStorage.setItem('tagList', JSON.stringify(tags));
  }, [tags]);

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
  const updateTag = (id: number, name: string) => {
    setTags(tags.map(tag => tag.id === id ? {id, name} : tag));
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
  };
  const addTag = () => {
    const tagName = window.prompt('请输入标签名：');
    if (tagName !== null) {
      setTags([...tags, {id: createID(), name: tagName}]);
    }
  };
  return {tags, setTags, findTag, updateTag, findTagIndex, deleteTag, addTag};
};

export {useTags};


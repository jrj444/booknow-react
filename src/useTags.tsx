import {useState} from 'react';
import {createID} from './lib/createID';

const defaultTags = [
  {id: createID(), name: '购物'},
  {id: createID(), name: '饮食'},
  {id: createID(), name: '住宿'},
  {id: createID(), name: '交通'},
];

const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>(defaultTags);
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  return {tags, setTags, findTag};
};

export {useTags};


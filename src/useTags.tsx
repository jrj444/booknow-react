import {useState} from 'react';
import {createID} from './lib/createID';

const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>([
    {id: createID(), name: '购物'},
    {id: createID(), name: '饮食'},
    {id: createID(), name: '住宿'},
    {id: createID(), name: '交通'},
  ]);
  return {tags, setTags};
};

export {useTags};


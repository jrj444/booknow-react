import {useState} from 'react';

const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>([
    {id: 1, name: '购物'},
    {id: 2, name: '饮食'},
    {id: 3, name: '住宿'},
    {id: 4, name: '交通'},
  ]);
  return {tags, setTags};
};

export {useTags};


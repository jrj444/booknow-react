import {useState} from 'react';

const useTags = () => {
  const [tags, setTags] = useState<string[]>(['购物', '饮食', '住宿', '交通']);
  return {tags, setTags};
};

export {useTags};


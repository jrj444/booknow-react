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
  const tagsClone = JSON.parse(JSON.stringify(tags));
  const updateTag = (id: number, name: string ) => {
    const index = findTagIndex(id);
    tagsClone.splice(index, 1, {id: id, name: name});
    setTags(tagsClone);
  };
  return {tags, setTags, findTag, updateTag, findTagIndex};
};

export {useTags};


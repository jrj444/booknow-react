import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {CategorySection} from './Money/CategorySection';
import {NumberPadSection} from './Money/NumberPadSection';
import {TagsSection} from './Money/TagsSection';
import {NoteSection} from './Money/NoteSection';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

type Category = 'expense' | 'income';

function Money() {
  const [record, setRecord] = useState({
    tagID: [] as number[],
    note: '',
    category: 'expense' as Category,
    amount: 0
  });
  const onChange = (recordObj: Partial<typeof record>) => {
    setRecord({...record, ...recordObj});
  };
  return (
    <MyLayout>
      <TagsSection value={record.tagID}
                   onChange={(tagID) => onChange({tagID})}/>
      <NoteSection value={record.note}
                   onChange={(note) => onChange({note})}/>
      <CategorySection value={record.category}
                       onChange={(category) => onChange({category})}/>
      <NumberPadSection value={record.amount}
                        onChange={(amount) => onChange({amount})}
                        onOk={() => {}}/>
    </MyLayout>
  );
}

export default Money;
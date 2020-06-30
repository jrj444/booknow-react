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
    tags: [] as string[],
    note: '',
    category: 'expense' as Category,
    amount: 0
  });
  return (
    <MyLayout>
      <TagsSection value={record.tags}
                   onChange={(tags) => setRecord({...record, tags: tags})}/>
      <NoteSection value={record.note}
                   onChange={(note) => setRecord({...record, note: note})}/>
      <CategorySection value={record.category}
                       onChange={(category) => setRecord({...record, category: category})}/>
      <NumberPadSection value={record.amount}
                        onChange={(amount) => setRecord({...record, amount: amount})}
                        onOk={() => {}}/>
    </MyLayout>
  );
}

export default Money;
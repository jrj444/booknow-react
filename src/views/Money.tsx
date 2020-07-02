import Layout from 'components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {CategorySection} from './Money/CategorySection';
import {NumberPadSection} from './Money/NumberPadSection';
import {TagsSection} from './Money/TagsSection';
import {NoteSection} from './Money/NoteSection';
import {useRecords} from 'hooks/useRecords';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

type Category = 'expense' | 'income';

const initRecord = {
  tagID: [] as number[],
  note: '',
  category: 'expense' as Category,
  amount: '0',
  createTime: ' '
};

function Money() {
  const [record, setRecord] = useState(initRecord);
  const {addRecord} = useRecords();
  const onChange = (recordObj: Partial<typeof record>) => {
    setRecord({...record, ...recordObj});
  };
  const submit = () => {
    if (addRecord(record)) {
      console.log('1');
      window.alert('记录已保存');
      setRecord(initRecord);
    }
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
                        onOk={submit}/>
    </MyLayout>
  );
}

export default Money;
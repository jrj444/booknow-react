import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

type RecordData = {
  tagID: number[]
  note: string
  category: 'expense' | 'income'
  amount: number
  createTime?: string
}

const useRecords = () => {
  const [records, setRecords] = useState<RecordData[]>([]);
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('recordList') || '[]'));
  }, []);

  useUpdate(() => {
    window.localStorage.setItem('recordList', JSON.stringify(records));
  }, [records]);

  const addRecord = (record: RecordData) => {
    if (record.amount <= 0) {
      window.alert('请输入金额噢');
      return false;
    }
    if (record.tagID.length === 0) {
      window.alert('请选择标签噢');
      return false;
    }
    setRecords([...records, record]);
  };


  return {records, addRecord};
};

export {useRecords};
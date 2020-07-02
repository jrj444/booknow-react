import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

export type RecordData = {
  tagID: number[]
  note: string
  category: 'expense' | 'income'
  amount: string
  createTime: string
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
    if (parseFloat(record.amount) <= 0) {
      window.alert('请输入金额噢');
      return false;
    }
    if (record.tagID.length === 0) {
      window.alert('请选择标签噢');
      return false;
    }
    const r = {...record, createTime: (new Date()).toISOString()};
    setRecords([...records, r]);
    return true;
  };


  return {records, addRecord};
};

export {useRecords};

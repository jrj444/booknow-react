import Layout from 'components/Layout';
import React, {useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import {RecordData, useRecords} from 'hooks/useRecords';
import {useTags} from 'hooks/useTags';
import day from 'dayjs';
import styled from 'styled-components';

const Records = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  font-size: 16px;
  line-height: 20px;
  padding: 10px 16px;
  > .note {
    font-size: 14px;
    flex-grow: 1;
    margin-left: 16px;
    color: #999999;
  }
`;

const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`;

function Statistics() {
  const [category, setCategory] = useState<'expense' | 'income'>('expense');
  const {records} = useRecords();
  const {getName} = useTags();
  const hash: { [key: string]: RecordData[] } = {};
  const selectedRecords = records.filter(r => r.category === category);
  selectedRecords.forEach(r => {
    const key = day(r.createTime).format('YYYY-MM-DD');
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
  });
  // @ts-ignore
  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] < b[0]) {return -1;}
    if (a[0] > b[0]) {return 1;}
    return 0;
  });

  return (
    <Layout>
      <CategorySection value={category} onChange={value => setCategory(value)}/>
      {array.map(([date, records], index) => <div key={index}>
          <Header>
            {date}
          </Header>
          <div>
            {records.map(r => {
              return (
                <Records key={r.createTime}>
                  <div className="tag">
                    {r.tagID.map(t => <span key={t}>{getName(t)}</span>)}
                  </div>
                  <div className="note">
                    {r.note}
                  </div>
                  <div className="amount">
                    ￥{r.amount}
                  </div>
                </Records>
              );
            })}
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Statistics;
import React, { useState, useRef, useCallback } from 'react';
import PageWrap from './common/PageWrap';
import { Button, Pullup, ScrollTop, Cell, Spin, Space } from 'react-uni-comps';

const pageSize = 30;

const App = () => {
  const [list, setList] = useState([]);
  const [finished, setFinished] = useState(false);
  const ref = useRef(0);

  const fetchData = useCallback(() => {
    return new Promise((resolve) => {
      var ar = [];
      for (var i = 0; i < pageSize; i++) {
        ar.push(ref.current * pageSize + i + 1);
      }
      setTimeout(() => {
        setList((d) => d.concat(ar));
        ref.current++;

        console.log(ref.current);

        if (ref.current > 3) {
          setFinished(true);
        }
        resolve();
      }, 500);
    });
  }, []);

  // 定义refresh才支持下拉刷新
  const refresh = useCallback(() => {
    return new Promise((resolve) => {
      ref.current = 0;
      setFinished(false);
      var ar = [];
      const randomChar = Math.random().toString()[6];
      for (var i = 0; i < pageSize; i++) {
        ar.push(i + 1 + '-' + randomChar);
      }
      setTimeout(() => {
        setList(ar);

        resolve();
      }, 1000);
    });
  }, []);

  return (
    <PageWrap style={{ padding: 0, userSelect: 'none' }}>
      <Pullup
        useWindowScroll
        dataList={list}
        refreshText={
          <Space>
            <Spin />
            下拉刷新~
          </Space>
        }
        fetchData={fetchData}
        refresh={refresh}
        finished={finished}
        dataRender={(data) => <Cell title={`item${data}`} />}
      />

      <ScrollTop visibilityHeight={100}>
        <Button
          type="primary"
          circle
          style={{
            width: 40,
            height: 40,
            position: 'fixed',
            bottom: 60,
            right: 20,
          }}
        >
          top
        </Button>
      </ScrollTop>
    </PageWrap>
  );
};

export default App;

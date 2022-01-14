import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/Block';
import { Button, Space, WaitLoading, Spin } from 'react-uni-comps';

export default function App() {
  const [v, setV] = useState(false);
  return (
    <PageWrap>
      <DemoBlock title="防闪烁">
        <Space>
          <Button type="primary" onClick={() => setV(true)} loading={v}>
            1秒后显示 loading
          </Button>

          <Button onClick={() => setV(false)}>隐藏loading </Button>
        </Space>

        <div style={{ marginTop: 24 }}>
          <WaitLoading wait={1000} visible={v}>
            <Spin style={{ fontSize: 30, color: '#00bc8d' }} />
          </WaitLoading>
        </div>
      </DemoBlock>
    </PageWrap>
  );
}

import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/Block';
import { Space, Switch } from 'react-uni-comps';

export default function App() {
  const [c, setC] = useState(false);

  return (
    <PageWrap>
      <DemoBlock title="示例">
        <Space siz={16} wrap>
          <Space>
            <Switch checked={c} onChange={setC} />
            {c ? 'checked' : 'unchecked'}
          </Space>

          <Switch checked />

          <Space>
            <Switch defaultChecked /> 默认打开
          </Space>

          <Space>
            <Switch disabled defaultChecked /> 禁用
          </Space>

          <Space>
            <Switch disabled /> 禁用
          </Space>
        </Space>
      </DemoBlock>
    </PageWrap>
  );
}

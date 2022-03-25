import React from 'react';
import PageWrap from './common/PageWrap';
import Block from './common/DemoBlock';
import { Empty, styled, AutoCenter, Button } from 'react-uni-comps';

const StyledEmpty1 = styled(Empty)`
  border: 1px solid #eee;
  padding: 20px 0;
  width: 50vw;
  .image {
    width: 92px;
  }
  .desc {
    color: red;
    font-size: 12px;
  }
`;

const StyledEmpty2 = styled(Empty)`
  .image {
    width: 240px;
  }
  .desc {
    color: #999;
    margin: 16px auto;
  }
`;

export default function App() {
  return (
    <PageWrap>
      <Block title="默认">
        <Empty />
      </Block>

      <Block title="例2">
        <AutoCenter>
          <StyledEmpty1 />
        </AutoCenter>
      </Block>

      <Block title="例3">
        <AutoCenter>
          <StyledEmpty2
            image="https://t7.baidu.com/it/u=4162611394,4275913936&fm=193&f=GIF"
            desc="no data"
            extra={<Button type="primary">go back</Button>}
          />
        </AutoCenter>
      </Block>
    </PageWrap>
  );
}

import React, { useState } from 'react';
import { styled, Space, Modal, Button, isMobile } from '../src';

const StyledModal = styled(Modal)`
  color: #1a1a1a;
  .header {
    font-size: 16px;
    font-family: PingFangSC, PingFangSC-Semibold;
    font-weight: 600;
    text-align: left;
    line-height: 20px;
  }
  .body {
    padding-top: 16px;
  }
`;

const StyleMobileModal = styled(Modal)`
  width: 297px;
  height: 139px;
  border-radius: 12px;
  padding: 30px 21px 24px;

  .body {
    font-size: 15px;
    font-family: PingFangSC, PingFangSC-Medium;
    font-weight: 500;
    text-align: center;
    color: #262626;
    line-height: 22px;
  }

  .uc-btn {
    width: 120px;
    height: 39px;
    border-radius: 21px;
  }
`;

export default function App() {
  const [visible, setVisible] = useState(false);
  const [v, setV] = useState(false);
  const onClose = () => setVisible(false);
  return (
    <div style={{ margin: 50 }}>
      <Button onClick={() => setV(true)} style={{ marginRight: 20 }}>
        open mobile modal
      </Button>
      <Button type="primary" onClick={() => setVisible(true)}>
        open Modal left
      </Button>

      <Button
        type="primary"
        onClick={() => setVisible(true)}
        style={{ position: 'fixed', right: '10%', top: '10%' }}
      >
        open Modal right
      </Button>

      <Button
        type="primary"
        onClick={() => setVisible(true)}
        style={{ position: 'fixed', left: '10%', bottom: '10%' }}
      >
        open Modal bottom left
      </Button>

      <Button
        type="primary"
        onClick={() => setVisible(true)}
        style={{ position: 'fixed', right: '10%', bottom: '10%' }}
      >
        open Modal bottom right
      </Button>

      <StyledModal
        visible={visible}
        closable
        style={{ width: isMobile ? '70vw' : 600, height: 300, top: isMobile ? '40%' : 120 }}
        onClose={onClose}
        header={'新建权限组'}
        footer={
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Space size={16}>
              <Button style={{ width: 80, height: 32 }} onClick={onClose}>
                取消
              </Button>
              <Button type="primary" style={{ width: 80, height: 32 }} onClick={onClose}>
                确定
              </Button>
            </Space>
          </div>
        }
      >
        <div>body 区域</div>
      </StyledModal>

      <StyleMobileModal
        visible={v}
        closeOnMaskClick={false}
        onClose={() => setV(false)}
        footer={
          <Space size={16} style={{ display: 'flex', justifyContent: 'center' }}>
            <Button onClick={() => setV(false)}>取消</Button>
            <Button type="primary" onClick={() => setV(false)}>
              确定
            </Button>
          </Space>
        }
      >
        确认给 张帆帆 投票?
      </StyleMobileModal>
    </div>
  );
}

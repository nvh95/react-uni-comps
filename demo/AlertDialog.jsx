import React, { useState } from 'react';
import { SoundOutlined } from '@ant-design/icons';
import { AlertDialog, Space, Button, Toast } from '../src';

export default function App() {
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(true);

  return (
    <div style={{ margin: 60 }}>
      <Space direction="vertical">
        <Button onClick={() => setVisible(true)}>show Alert dialog</Button>
        <Button onClick={() => setVisible1(true)}>show mobile Alert dialog</Button>
        <Button onClick={() => AlertDialog.show('are you sure?', 'sure to leave china')}>
          show Alert dialog via static show
        </Button>
        <Button
          onClick={() =>
            AlertDialog.show('are you sure?', 'sure to leave china', 'yes', null, 'no')
          }
        >
          show Alert dialog via static show ok/cancel
        </Button>
        <Button
          onClick={() =>
            AlertDialog.show(
              'are you sure?',
              'sure to leave china',
              'yes',
              () => {
                Toast.show('no');
              },
              'no'
            )
          }
        >
          show Alert dialog via static show onConfirm
        </Button>
      </Space>

      <AlertDialog
        closable
        buttonSpace={16}
        buttonWidth={80}
        confirmText="确定"
        cancelText="cancel"
        title={
          <span>
            <SoundOutlined /> 提示
          </span>
        }
        visible={visible}
        onClose={() => setVisible(false)}
        content="In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development.
        After massive project practice and summaries, Ant Design, a design language for background applications, is refined by Ant UED Team, which aims touniform the user interface specs for internal background projects, lower the unnecessary cost of design differences and implementation and liberate the resources of design and front-end development."
      />

      <AlertDialog
        confirmText="确定"
        // cancelText="cancel"
        visible={visible1}
        onClose={() => setVisible1(false)}
        content="hello,world"
      />
    </div>
  );
}

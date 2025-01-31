import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Skeleton from '../src/Skeleton';

const title = 'Skeleton';

describe('Skeleton test groups', () => {
  test('render loading', () => {
    render(
      <Skeleton
        title="Skeleton"
        loading
        avatar
        row={2}
        rowWidth={['38%', '50%', '70%', '70%', '90%']}
        style={{ margin: '24px 20px' }}
      >
        <div title="content"></div>
      </Skeleton>
    );
    const el = screen.queryByTitle('Skeleton');
    expect(el).toBeDefined();
    expect(screen.queryByTitle('content')).toBeNull();
  });

  test('render loading', () => {
    render(
      <Skeleton
        title="Skeleton"
        loading
        row={2}
        rowWidth={['38%', '50%', '70%', '70%', '90%']}
        style={{ margin: '24px 20px' }}
      >
        <div title="content"></div>
      </Skeleton>
    );
    const el = screen.queryByTitle('Skeleton');
    expect(el).toBeDefined();
    expect(screen.queryByTitle('content')).toBeNull();
  });

  test('render children', () => {
    render(
      <Skeleton
        title="Skeleton"
        loading={false}
        avatar
        row={2}
        rowWidth={['38%', '50%', '70%', '70%', '90%']}
        style={{ margin: '24px 20px' }}
      >
        <div title="content"></div>
      </Skeleton>
    );
    const el = screen.queryByTitle('Skeleton');
    expect(el).toBeDefined();
    expect(screen.queryByTitle('content')).not.toBeNull();
  });
});

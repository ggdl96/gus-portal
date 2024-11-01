import React from 'react';
import { Text } from 'react-native';
import { render, screen } from '@testing-library/react-native';

import Connect from './info-container';

describe('Connect component', () => {
  test('should render properly', () => {
    render(<Connect title="connect" />);

    const title = screen.getByText('connect');

    expect(title).toBeDefined();
  });

  test('should render children properly', () => {
    render(
      <Connect title="connect">
        <Text>Test</Text>
      </Connect>,
    );

    const title = screen.getByText('connect');
    const text = screen.getByText('Test');

    expect(title).toBeDefined();
    expect(text).toBeDefined();
  });
});

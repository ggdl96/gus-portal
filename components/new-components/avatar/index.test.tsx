import React from 'react';
import Avatar from '.';
import { render } from '@testing-library/react-native';

describe('Avatar', () => {
  test('given no src prop, it should not fail rendering', () => {
    const avatarElement = () => render(<Avatar />).getByTestId('avatarNoImage');

    expect(avatarElement).not.toThrow();
  });

  test('given a src prop, it should not fail rendering', () => {
    const avatarElement = () => render(<Avatar src={{ uri: '' }} />).getAllByTestId('avatarImage');

    expect(avatarElement).not.toThrow();
  });
});

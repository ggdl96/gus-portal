import React from 'react';
import Avatar from '.';
import { render } from '@testing-library/react-native';

describe('Avatar', () => {
  test('given no src prop, it should not fail rendering', () => {
    // TODO IMPROVE TEST
    render(<Avatar />).getAllByTestId('avatarNoImage');
  });

  test('given a src prop, it should not fail rendering', () => {
    // TODO IMPROVE TEST
    render(<Avatar src={{ uri: '' }} />).getAllByTestId('avatarImage');
  });
});

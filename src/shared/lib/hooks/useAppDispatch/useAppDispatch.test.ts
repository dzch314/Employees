import { renderHook } from '@testing-library/react';
import { useDispatch } from 'react-redux';

import { useAppDispatch } from './useAppDispatch';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('Test useAppDispatch hook', () => {
  test('calls hook and returns its result', () => {
    const mockDispatch = jest.fn();

    (useDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);

    const { result } = renderHook(() => useAppDispatch());

    expect(useDispatch).toHaveBeenCalled();
    expect(result.current).toBe(mockDispatch);
  });
});

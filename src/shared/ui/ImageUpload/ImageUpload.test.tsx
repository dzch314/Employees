import { render, fireEvent, screen } from '@testing-library/react';

import { ImageUpload } from './ImageUpload';

describe('Test ImageUpload component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('with label', () => {
    render(<ImageUpload label="Upload file" />);
    expect(screen.getByText('Upload file')).toBeInTheDocument();
  });

  test('with placeholder', () => {
    render(<ImageUpload placeholder="Select a file" />);
    expect(screen.getByRole('button')).toHaveTextContent('Select a file');
  });

  test('click on button clicks on input', () => {
    render(<ImageUpload />);
    const input = screen.getByTestId('fileInput');
    const button = screen.getByRole('button');
    const clickMock = jest.spyOn(input, 'click');
    fireEvent.click(button);
    expect(clickMock).toHaveBeenCalled();
    clickMock.mockRestore();
  });
});

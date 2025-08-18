import {
  render, fireEvent, screen, act,
} from '@testing-library/react';

import { Modal } from './Modal';

jest.useFakeTimers();

describe('Test Modal component', () => {
  const onCloseMock = jest.fn();

  beforeEach(() => {
    onCloseMock.mockClear();
  });

  test('doesnt render if lazy=true и isOpen=false', () => {
    const { container } = render(<Modal isOpen={false} lazy><div>Content</div></Modal>);
    expect(container.firstChild).toBeNull();
  });

  test('renders if isOpen=true', () => {
    render(<Modal isOpen><div>Content</div></Modal>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  test('calls onClose on Overlay click', () => {
    render(<Modal isOpen onClose={onCloseMock}><div>content</div></Modal>);
    const overlay = screen.getByTestId('overlay');
    expect(overlay).toBeInTheDocument();
    fireEvent.click(overlay!);
    expect(onCloseMock).not.toHaveBeenCalled();
    act(() => {
      jest.advanceTimersByTime(300);
    });
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  test('doesnt call onClose while clicking inside content', () => {
    render(
      <Modal isOpen onClose={onCloseMock}>
        <div data-testid="content">content</div>
      </Modal>,
    );

    const content = screen.getByTestId('content');
    fireEvent.click(content);
    expect(onCloseMock).not.toHaveBeenCalled();
  });

  test('closes on escape', () => {
    render(<Modal isOpen onClose={onCloseMock}>content</Modal>);
    fireEvent.keyDown(window, { key: 'Escape' });
    act(() => {
      jest.advanceTimersByTime(300);
    });
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});

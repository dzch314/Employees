import {
  render, screen, fireEvent, act,
} from '@testing-library/react';

import { Input } from './Input';
import cls from './Input.module.scss';

jest.useFakeTimers();

describe('Test Input component', () => {
  test('with placeholder and additional class', () => {
    render(<Input className="custom-class" placeholder="Type here" />);
    const input = screen.getByPlaceholderText('Type here');
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass(cls.input);
    expect(screen.getByRole('textbox').parentElement?.parentElement).toHaveClass('custom-class');
  });

  test('with label', () => {
    render(<Input label="My Label" />);
    expect(screen.getByText('My Label')).toBeInTheDocument();
    expect(screen.getByText('My Label')).toHaveClass(cls.label);
  });

  test('with Icon', () => {
    const Icon = <span data-testid="icon">icon</span>;
    render(<Input Icon={Icon} />);
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  test('with underline', () => {
    render(<Input isUnderlined />);
    expect(screen.getByRole('textbox').parentElement?.parentElement).toContainHTML('<hr');
    expect(screen.getByRole('textbox').parentElement?.parentElement?.querySelector('hr')).toHaveClass(cls.divider);
  });

  test('with onChange', () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'abc' } });
    expect(input).toHaveValue('abc');
    act(() => {
      jest.advanceTimersByTime(200);
    });
    expect(handleChange).toHaveBeenCalledWith('abc');
  });

  test('with initial value', () => {
    render(<Input value="initial" />);
    expect(screen.getByRole('textbox')).toHaveValue('initial');
  });
});

import { render, screen } from '@testing-library/react';

import { Text, TextTheme } from './Text';

import cls from './Text.module.scss';

describe('Test Text component', () => {
  test('renders with primary theme', () => {
    render(<Text />);
    const container = screen.getByText((content, element) => element?.classList.contains(cls.Text) ?? false);
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass(cls.Text);
    expect(container).toHaveClass(cls.primary);
  });

  test('with title', () => {
    render(<Text title="Title" />);
    const title = screen.getByText('Title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass(cls.title);
  });

  test('with text', () => {
    render(<Text text="Text" />);
    const text = screen.getByText('Text');
    expect(text).toBeInTheDocument();
    expect(text).toHaveClass(cls.text);
  });

  test('with Error theme', () => {
    render(<Text theme={TextTheme.ERROR} text="Error" />);
    expect(screen.getByTestId('text')).toHaveClass(cls.error);
  });

  test('with customClass', () => {
    const customClass = 'my-class';
    render(<Text className={customClass} text="Text" />);
    expect(screen.getByTestId('text')).toHaveClass(customClass);
  });
});

import { render, screen } from '@testing-library/react';

import { Loader } from './Loader';
import cls from './Loader.module.scss';

describe('Test Loader component', () => {
  test('renders', () => {
    render(<Loader />);
    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
    expect(loader).toHaveClass(cls.Loader);
  });

  test('renders with classname', () => {
    const customClass = 'my-custom-class';
    render(<Loader className={customClass} />);
    const loader = screen.getByTestId('loader');
    expect(loader).toHaveClass(cls.Loader);
    expect(loader).toHaveClass(customClass);
  });
});

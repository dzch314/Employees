import { render, screen } from '@testing-library/react';

import { Select, SelectSize } from './Select';
import type { SelectOption } from './Option';

const options: SelectOption<string>[] = [
  { value: 'opt1', content: 'Option 1' },
  { value: 'opt2', content: 'Option 2' },
];

describe('Select', () => {
  it('renders placeholder when no value is selected', () => {
    render(<Select placeholder="Choose..." options={options} />);
    expect(screen.getByText('Choose...')).toBeInTheDocument();
  });

  it('renders label when provided', () => {
    render(<Select label="Label text" options={options} />);
    expect(screen.getByText('Label text')).toBeInTheDocument();
  });

  it('renders with underlined style when isUnderlined is true', () => {
    const { container } = render(<Select isUnderlined options={options} />);
    expect(container.querySelector('hr')).toBeInTheDocument();
  });

  it('applies size class', () => {
    const { container } = render(<Select size={SelectSize.S} options={options} />);
    expect(container.querySelector(`.${SelectSize.S}`)).toBeInTheDocument();
  });
});

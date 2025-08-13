import { render } from '@testing-library/react';

import { Portal } from './Portal';

describe('Test Portal component', () => {
  test('render child inside element from props', () => {
    const portalRoot = document.createElement('div');
    portalRoot.setAttribute('data-testid', 'portal-root');
    document.body.appendChild(portalRoot);

    const { getByText } = render(
      <Portal element={portalRoot}>
        <div>content</div>
      </Portal>,
    );

    expect(getByText('content')).toBeInTheDocument();
    expect(portalRoot).toContainElement(getByText('content'));
    document.body.removeChild(portalRoot);
  });

  test('renders child inside document.body by default', () => {
    const { getByText } = render(
      <Portal>
        <div>content</div>
      </Portal>,
    );

    expect(getByText('content')).toBeInTheDocument();
    expect(document.body).toContainElement(getByText('content'));
  });
});

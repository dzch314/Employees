import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/lib/context/ThemeContext';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: any) => {
  document.body.className = theme;

  return (
    <ThemeProvider initialTheme={theme}>
      <div className='app' style={{ alignContent: 'space-around' }}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  );
};

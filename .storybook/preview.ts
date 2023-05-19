import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { ThemeProvider } from 'styled-components';
import { myTheme } from '../src/theme/theme';
import { GlobalStyles } from '../src/styles/global';

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles,
    themes: {
      light: myTheme,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
  }),
];

export const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

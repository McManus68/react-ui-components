import { Theme } from '@bit/mcmanus68.webmaker.types.types'
import { lightenDarkenColor } from '@bit/mcmanus68.webmaker.utils.utils-color'

export function createTheme(theme: Theme): Theme {
  var theme = theme ? { ...theme } : defaultTheme()
  theme.color.primaryLight = lightenDarkenColor(theme.color.primary, 20)
  theme.color.primaryDark = lightenDarkenColor(theme.color.primary, -20)
  theme.color.secondaryLight = lightenDarkenColor(theme.color.secondary, 20)
  theme.color.secondaryDark = lightenDarkenColor(theme.color.secondary, -20)
  return theme
}

export function defaultTheme(): Theme {
  return {
    color: {
      primary: '#bd10e0',
      secondary: '#402d9e',
      font: '#524e66',
      bg: '#ffffff',
    },
    footer: {
      color: '#fff',
      bg: '#121212',
    },
    header: {
      color: '#fff',
      bg: '#121212',
    },
    block: {
      padding: '2.4rem',
      spacing: '1.2rem',
    },
    section: {
      padding: '2.2rem 1.8rem',
    },
    font: {
      primary: 'Source Sans Pro, sans-serif',
      secondary: 'Times New Roman, Times, serif',
      body: 'Arial, Helvetica, sans-serif',
    },
    breakpoint: {
      sm: '576px',
      md: '768px',
      xl: '1200px',
      lg: '992px',
    },
  }
}

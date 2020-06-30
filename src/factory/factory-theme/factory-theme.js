import { lightenDarkenColor } from '@bit/mcmanus68.webmaker.utils.utils-color'

export function createTheme(theme) {
  var theme = theme ? { ...theme } : defaultTheme()
  theme.color.primaryLight = lightenDarkenColor(theme.color.primary, 20)
  theme.color.primaryDark = lightenDarkenColor(theme.color.primary, -20)
  theme.color.secondaryLight = lightenDarkenColor(theme.color.secondary, 20)
  theme.color.secondaryDark = lightenDarkenColor(theme.color.secondary, -20)
  return theme
}

export function defaultTheme() {
  return {
    color: {
      primary: '#4c2bdb',
      secondary: '#28682f',
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

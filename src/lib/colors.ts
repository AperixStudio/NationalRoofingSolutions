export const colors = {
  primary: '#05070d',
  primaryRgb: '5, 7, 13',
  secondary: '#0a3478',
  accent: '#1f6fd6',
  accentLight: '#8bb6ff',
  ink: '#07111f',
  muted: '#59677b',
  background: '#f3f7ff',
  surface: '#060912',
  line: '#cfdaef',
}

export const gradients = {
  heroOverlay: `linear-gradient(
    135deg,
    rgba(5, 7, 13, 0.9),
    rgba(10, 52, 120, 0.74) 54%,
    rgba(31, 111, 214, 0.64)
  )`,
}

export const colorVariables = {
  '--color-primary': colors.primary,
  '--color-primary-rgb': colors.primaryRgb,
  '--color-secondary': colors.secondary,
  '--color-accent': colors.accent,
  '--color-accent-light': colors.accentLight,
  '--color-ink': colors.ink,
  '--color-muted': colors.muted,
  '--color-background': colors.background,
  '--color-surface': colors.surface,
  '--color-line': colors.line,
  '--hero-overlay': gradients.heroOverlay,
}

export function applyColorVariables() {
  Object.entries(colorVariables).forEach(([name, value]) => {
    document.documentElement.style.setProperty(name, value)
  })
}

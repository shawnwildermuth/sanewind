const plugin = require('tailwindcss/plugin')

function register({ addBase, theme }) {
  const formStyles = {
    width: theme('width.full'),
    padding: theme('padding.2'),
    borderStyle: 'solid',
    borderColor: theme('colors.slate.400'),
    borderWidth: 1,
    marginTop: '.25rem',
    marginBottom: '.25rem',
    outline: 'none',
    '&:focus': {
      borderWidth: 2,
    },
    '&:disabled': {
      backgroundColor: theme('colors.gray.200'),
      color: theme('colors.gray.400')
    }
  }

  const buttonStyles = {
    fontSize: theme('fontSize.sm'),
    padding: theme('padding.2'),
    margin: theme('margin.1'),
    borderRadius: theme('spacing.1'),
    backgroundColor: theme('colors.blue.700'),
    color: theme('colors.white'),
    '&:hover': {
      filter: "brightness(1.25)",
    },
    '&:disabled': {
      backgroundColor: theme('colors.gray.500'),
      color: theme('colors.gray.600'),
      '&:hover': {
        filter: "brightness(1)",
      },
    },
  }

  addBase({
    h1: { fontSize: theme('fontSize.4xl'), fontWeight: theme('fontWeight.bold') },
    h2: { fontSize: theme('fontSize.3xl'), fontWeight: theme('fontWeight.bold') },
    h3: { fontSize: theme('fontSize.2xl'), fontWeight: theme('fontWeight.bold') },
    h4: { fontSize: theme('fontSize.xl'), fontWeight: theme('fontWeight.bold') },
    button: buttonStyles,
    "[type='button']": buttonStyles,
    "[type='submit']": buttonStyles,
    "[type='text']": formStyles,
    'input:where(:not([type]))': formStyles,
    "[type='email']": formStyles,
    "[type='url']": formStyles,
    "[type='password']": formStyles,
    "[type='number']": formStyles,
    "[type='date']": formStyles,
    "[type='datetime-local']": formStyles,
    "[type='month']": formStyles,
    "[type='search']": formStyles,
    "[type='tel']": formStyles,
    "[type='time']": formStyles,
    "[type='week']": formStyles,
    '[multiple]': formStyles,
    textarea: formStyles,
    select: formStyles,
    label: { fontWeight: theme('fontWeight.bold'), display: 'block' },
  })
}

module.exports = plugin(register);
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      padding: {
        '4': '4px',
        '16': '16px',
        '20': '20px',
      },

      fontSize: {
        '14': '14px',
        '18': '18px',
        '36': '36px',
        '48': '48px',
      },

      backgroundImage: {
        'menu-open': "url('./../icons/menu-open.svg')",
        'menu-close': "url('./../icons/menu-close.svg')",
        'facebook': "url('./../icons/Facebook.svg')",
        'twitter': "url('./../icons/Twitter.svg')",
        'dribbble': "url('./../icons/Dribble.svg')",
      }
    },
    screens: {
      'sm': '768px',
    }
  },
  plugins: [],
}

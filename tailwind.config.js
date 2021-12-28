module.exports = {
  content: ["./src/**/*.{html,js}", 'index.html'],
  theme: {
    extend: {
      container: {
        padding: '20px',
      },

      margin: {
        '40': '40px',
        '44': '44px',
      },

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
        '73': '73px',
      },

      backgroundImage: {
        'menu-open': "url('./icons/menu-open.svg')",
        'menu-close': "url('./icons/menu-close.svg')",
        'facebook': "url('./icons/Facebook.svg')",
        'facebook-hover': "url('./icons/Facebook_hover.svg')",
        'twitter': "url('./icons/Twitter.svg')",
        'twitter-hover': "url('./icons/Twitter_hover.svg')",
        'dribble': "url('./icons/Dribble.svg')",
        'dribble-hover': "url('./icons/Dribble_hover.svg')",
        'slider-item': "url('./icons/slider-item.png)"
      }
    },
    screens: {
      'sm': '769px',
      'md': '1160px',
    }
  },
  plugins: [],
}

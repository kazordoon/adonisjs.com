// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'AdonisJS',
  siteUrl: 'https://preview.adonisjs.com',
  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-62429600-3',
      }
    },
    {
      use: '@gridsome/plugin-critical',
      options: {
        paths: ['/*'],
        width: 1300,
        height: 900
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
    },
    {
      use: "gridsome-plugin-service-worker",
      options: {
        networkFirst: {
          routes: ['/*']
        },
        cacheFirst: {
          routes: ['/fonts', '/img']
        }
      }
    }
  ],
}

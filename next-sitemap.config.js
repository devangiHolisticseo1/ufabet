/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.ufabet.com',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};

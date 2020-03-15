require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: `Mega Ultra Studios`,
    description: `Multimedia Production`,
    siteUrl: process.env.SITE_URL,
    logo: `logo.png`,
    copyright: `© YYYY Mega Ultra Studios. All rights reserved.`,
    headerLinks: [
      {
        title: `Home`,
        path: `/`,
      },
      {
        title: `About`,
        path: `/about`,
      },
    ],
    footerLinks: [
      {
        title: `Home`,
        path: `/`,
      },
      {
        title: `About`,
        path: `/about`,
      },
    ],
  },
  plugins: [`gatsby-theme-flex`],
}

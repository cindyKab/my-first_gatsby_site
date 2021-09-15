module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My_first_gatsby_site_number1",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
  ],
};

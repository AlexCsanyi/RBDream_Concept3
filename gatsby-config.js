module.exports = {
  siteMetadata: {
    title: "RB Dream | Fishing | Pets",
    author: "RB Dream Team | Kristina Barbul",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-transformer-remark",
  ],
}

module.exports = {
  siteMetadata: {
    title: "Shane's Blog",
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        start_url: "/",
        name: "Shane's Blog",
        display: "standalone",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        icon: "src/images/floppy-disk-icon.png"
      }
    }
  ],
};

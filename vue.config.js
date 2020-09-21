module.exports = {
  devServer: {
    proxy: 'https://api.boomset.com/',
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/scss/main.scss";
          `,
      },
    },
  },
};

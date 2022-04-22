const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
 
  devServer: {
    proxy: 'http://54.255.4.75/'
  }
})


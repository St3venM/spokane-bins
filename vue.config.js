const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  alias: {
    '@': path.resolve(__dirname, 'src')
  }
})

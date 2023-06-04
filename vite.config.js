const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: '/index.html',
        game: '/game.html',
     
      }
    }
  }
})
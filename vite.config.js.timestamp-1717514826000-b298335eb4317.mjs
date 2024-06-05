// vite.config.js
import { defineConfig } from "file:///C:/coding/DhanwisTechInfoSolutionKNR/node_modules/vite/dist/node/index.js";
import react from "file:///C:/coding/DhanwisTechInfoSolutionKNR/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { ViteImageOptimizer } from "file:///C:/coding/DhanwisTechInfoSolutionKNR/node_modules/vite-plugin-image-optimizer/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        // https://sharp.pixelplumbing.com/api-output#png
        quality: 40
      },
      jpeg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 40
      },
      jpg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 40
      },
      tiff: {
        // https://sharp.pixelplumbing.com/api-output#tiff
        quality: 40
      },
      // gif does not support lossless compression
      // https://sharp.pixelplumbing.com/api-output#gif
      gif: {},
      webp: {
        // https://sharp.pixelplumbing.com/api-output#webp
        lossless: true
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxjb2RpbmdcXFxcRGhhbndpc1RlY2hJbmZvU29sdXRpb25LTlJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXGNvZGluZ1xcXFxEaGFud2lzVGVjaEluZm9Tb2x1dGlvbktOUlxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovY29kaW5nL0RoYW53aXNUZWNoSW5mb1NvbHV0aW9uS05SL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG5pbXBvcnQgeyBWaXRlSW1hZ2VPcHRpbWl6ZXIgfSBmcm9tICd2aXRlLXBsdWdpbi1pbWFnZS1vcHRpbWl6ZXInXHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtyZWFjdCgpLFxyXG5cclxuICAgIFZpdGVJbWFnZU9wdGltaXplcih7XHJcbiAgICAgIHBuZzoge1xyXG4gICAgICAgIC8vIGh0dHBzOi8vc2hhcnAucGl4ZWxwbHVtYmluZy5jb20vYXBpLW91dHB1dCNwbmdcclxuICAgICAgICBxdWFsaXR5OiA0MCxcclxuICAgICAgfSxcclxuICAgICAganBlZzoge1xyXG4gICAgICAgIC8vIGh0dHBzOi8vc2hhcnAucGl4ZWxwbHVtYmluZy5jb20vYXBpLW91dHB1dCNqcGVnXHJcbiAgICAgICAgcXVhbGl0eTogNDAsXHJcbiAgICAgIH0sXHJcbiAgICAgIGpwZzoge1xyXG4gICAgICAgIC8vIGh0dHBzOi8vc2hhcnAucGl4ZWxwbHVtYmluZy5jb20vYXBpLW91dHB1dCNqcGVnXHJcbiAgICAgICAgcXVhbGl0eTogNDAsXHJcbiAgICAgIH0sXHJcbiAgICAgIHRpZmY6IHtcclxuICAgICAgICAvLyBodHRwczovL3NoYXJwLnBpeGVscGx1bWJpbmcuY29tL2FwaS1vdXRwdXQjdGlmZlxyXG4gICAgICAgIHF1YWxpdHk6IDQwLFxyXG4gICAgICB9LFxyXG4gICAgICAvLyBnaWYgZG9lcyBub3Qgc3VwcG9ydCBsb3NzbGVzcyBjb21wcmVzc2lvblxyXG4gICAgICAvLyBodHRwczovL3NoYXJwLnBpeGVscGx1bWJpbmcuY29tL2FwaS1vdXRwdXQjZ2lmXHJcbiAgICAgIGdpZjoge30sXHJcbiAgICAgIHdlYnA6IHtcclxuICAgICAgICAvLyBodHRwczovL3NoYXJwLnBpeGVscGx1bWJpbmcuY29tL2FwaS1vdXRwdXQjd2VicFxyXG4gICAgICAgIGxvc3NsZXNzOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgXSxcclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvUyxTQUFTLG9CQUFvQjtBQUNqVSxPQUFPLFdBQVc7QUFDbEIsU0FBUywwQkFBMEI7QUFHbkMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQUMsTUFBTTtBQUFBLElBRWQsbUJBQW1CO0FBQUEsTUFDakIsS0FBSztBQUFBO0FBQUEsUUFFSCxTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0EsTUFBTTtBQUFBO0FBQUEsUUFFSixTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0EsS0FBSztBQUFBO0FBQUEsUUFFSCxTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0EsTUFBTTtBQUFBO0FBQUEsUUFFSixTQUFTO0FBQUEsTUFDWDtBQUFBO0FBQUE7QUFBQSxNQUdBLEtBQUssQ0FBQztBQUFBLE1BQ04sTUFBTTtBQUFBO0FBQUEsUUFFSixVQUFVO0FBQUEsTUFDWjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=

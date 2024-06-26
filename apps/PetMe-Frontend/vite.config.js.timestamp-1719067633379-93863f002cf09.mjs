// vite.config.js
import { defineConfig } from "file:///home/zen/Documents/opensource/PetMe-Prod/node_modules/vite/dist/node/index.js";
import react from "file:///home/zen/Documents/opensource/PetMe-Prod/apps/PetMe-Frontend/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    rootDir: "./src",
    useAtomics: true,
    setupFiles: "./src/test/setup.jsx",
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    coverage: {
      provider: "istanbul",
      dir: "./coverage",
      reporters: ["lcov", "text"],
      include: ["src/**/*.{js,jsx,ts,tsx}"]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS96ZW4vRG9jdW1lbnRzL29wZW5zb3VyY2UvUGV0TWUtUHJvZC9hcHBzL1BldE1lLUZyb250ZW5kXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS96ZW4vRG9jdW1lbnRzL29wZW5zb3VyY2UvUGV0TWUtUHJvZC9hcHBzL1BldE1lLUZyb250ZW5kL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3plbi9Eb2N1bWVudHMvb3BlbnNvdXJjZS9QZXRNZS1Qcm9kL2FwcHMvUGV0TWUtRnJvbnRlbmQvdml0ZS5jb25maWcuanNcIjsvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMgKi9cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgdGVzdDoge1xuICAgIGdsb2JhbHM6IHRydWUsXG4gICAgZW52aXJvbm1lbnQ6ICdqc2RvbScsXG4gICAgcm9vdERpcjogJy4vc3JjJyxcbiAgICB1c2VBdG9taWNzOiB0cnVlLFxuICAgIHNldHVwRmlsZXM6ICcuL3NyYy90ZXN0L3NldHVwLmpzeCcsXG4gICAgLy8geW91IG1pZ2h0IHdhbnQgdG8gZGlzYWJsZSBpdCwgaWYgeW91IGRvbid0IGhhdmUgdGVzdHMgdGhhdCByZWx5IG9uIENTU1xuICAgIC8vIHNpbmNlIHBhcnNpbmcgQ1NTIGlzIHNsb3dcbiAgICBjb3ZlcmFnZToge1xuICAgICAgcHJvdmlkZXI6ICdpc3RhbmJ1bCcsXG4gICAgICBkaXI6ICcuL2NvdmVyYWdlJyxcbiAgICAgIHJlcG9ydGVyczogWydsY292JywgJ3RleHQnXSxcbiAgICAgIGluY2x1ZGU6IFsnc3JjLyoqLyoue2pzLGpzeCx0cyx0c3h9J10sXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVztBQUdsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsTUFBTTtBQUFBLElBQ0osU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLElBQ2IsU0FBUztBQUFBLElBQ1QsWUFBWTtBQUFBLElBQ1osWUFBWTtBQUFBO0FBQUE7QUFBQSxJQUdaLFVBQVU7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLEtBQUs7QUFBQSxNQUNMLFdBQVcsQ0FBQyxRQUFRLE1BQU07QUFBQSxNQUMxQixTQUFTLENBQUMsMEJBQTBCO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K

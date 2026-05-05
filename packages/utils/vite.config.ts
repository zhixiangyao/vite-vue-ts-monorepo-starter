import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [dts({ tsconfigPath: './tsconfig.json' })],
  build: {
    target: 'esnext',
    reportCompressedSize: false,
    lib: {
      entry: 'src/index.ts',
      name: 'Utils',
      formats: ['es'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['dayjs'],
      output: {
        globals: {
          dayjs: 'dayjs',
        },
      },
    },
  },
})

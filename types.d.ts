import type { Plugin } from 'vite';

declare module 'vite-plugin-copy' {
  export default function copy(options: { targets: Array<{ src: string; dest: string }> }): Plugin;
}

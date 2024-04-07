import * as path from 'path';
import { defineConfig } from 'rspress/config';
import obsidian from './src';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Rspress x Obsidian Example',
  plugins: [obsidian()],
});
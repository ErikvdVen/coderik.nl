import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import vue from '@astrojs/vue'
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'
import {transformerNotationDiff, transformerMetaHighlight} from '@shikijs/transformers'

import expressiveCode from 'astro-expressive-code';

import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://coderik.nl/',
  integrations: [expressiveCode(), mdx(), sitemap(), UnoCSS({
    injectReset: true,
  }), vue()],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light-default',
        dark: 'github-dark-default',
      },
      wrap: true,
      transformers: [transformerNotationDiff(),transformerMetaHighlight()],
    },
  },
})
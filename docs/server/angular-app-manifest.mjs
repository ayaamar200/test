
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/test/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 511, hash: '4ec9f1deb2ff19556daaf739f871b565b67fe6d4ec5e0f47b1a6d7ba58dbc87f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1024, hash: '51ff113868f6e835ab13b84c70b66ce67cd7ebd1f99aeceb54d47fa63336ea9b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};

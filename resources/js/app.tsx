import "../scss/app.scss"
import './bootstrap';
import 'highlight.js/styles/atom-one-dark-reasonable.css';

import {createInertiaApp} from '@inertiajs/react';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';
import {createRoot, hydrateRoot} from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
  title: title => {
    return title.length > 0 ? title : appName;
  },
  resolve: (name) =>
    resolvePageComponent(
      `./Pages/${name}.tsx`,
      import.meta.glob('./Pages/**/*.tsx'),
    ),
  setup({el, App, props}) {
    if (import.meta.env.SSR) {
      hydrateRoot(el, <App {...props} />);
      return;
    }

    createRoot(el).render(<App {...props} />);
  },
  progress: {
    color: '#006aff',
    showSpinner: true,
  },
});

import { createInertiaApp } from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import ReactDOMServer from 'react-dom/server';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createServer((page) =>
    createInertiaApp({
        page,
        render: ReactDOMServer.renderToString,
        title: (title) => (title ? `${title} - ${appName}` : appName),
        resolve: async (name) => {
            const pages = import.meta.glob('./pages/**/*.{jsx,tsx}');
            // Try .jsx first, then .tsx
            try {
                return await resolvePageComponent(
                    `./pages/${name}.jsx`,
                    pages,
                );
            } catch {
                return resolvePageComponent(
                    `./pages/${name}.tsx`,
                    pages,
                );
            }
        },
        setup: ({ App, props }) => {
            return <App {...props} />;
        },
    }),
);

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'HAV Consulting',
    tagline: 'Policies and Information',
    url: 'https://havconsulting.info',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    //   favicon: 'img/favicon.ico',
    organizationName: 'HAV Consulting',
    projectName: 'privacy site',

    presets: [
        [
            'classic',
            ({
            /** @type {import('@docusaurus/preset-classic').Options} */
            
            theme: {
                customCss: require.resolve('./src/css/custom.css'),
              },
            }),
        ]
    ],
    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
        navbar: {
            title: 'Home',
            // logo: {
            //   alt: 'My Site Logo',
            //   src: 'img/logo.svg',
            items: [
            {
                type: 'doc',
                docId: 'intro',
                position: 'left',
                label: 'Tutorial',
            },
            {
                href: 'https://github.com/HAV-Consulting',
                label: 'GitHub',
                position: 'right',
            }
            ]
        },
        footer: {
            style: 'dark',
            links: [{
                title: 'References',
                items: [
                {
                    label: 'GitHub',
                    href: 'https://github.com/HAV-Consulting/'
                }
            ]
            }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HAV Consulting. Built with Docusaurus.`,
        },
    prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        }
    }),
};

module.exports = config;

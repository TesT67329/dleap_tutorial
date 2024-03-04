import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "HCL Domino Leap Tutorial",
    description: "Tutorial for HCL Domino Leap",
    markdown:{
        theme: {light: 'light-plus', dark: 'night-owl'}
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Examples', link: '/markdown-examples'}
        ],

        sidebar: [
            {
                text: 'Examples',
                items: [
                    {text: 'Markdown Examples', link: '/markdown-examples'},
                    {text: 'Runtime API Examples', link: '/api-examples'},
                ]
            },
            {
                text: 'Basics',
                items: [
                    {text: 'Hello world', link: '/basics/hello_world'},
                    {text: 'Roles', link: '/basics/roles'},
                    {text: 'Data Storage', link: '/basics/data-storage'},
                    {text: 'Permissions', link: '/basics/permissions'},
                    {text: 'Workflow Stages', link: '/basics/stages'},
                    {text: 'Visibility', link: '/basics/visibility'},
                    {text: 'Locking', link: '/basics/locking'},
                ]
            }, {
                text: 'Intermediate (no-code)',
                items: [
                    {text: 'Business object', link: '/intermediate/business_object'},
                    {text: 'Service calls', link: '/intermediate/services'},
                    {text: 'CSS styling', link: '/intermediate/css_styling'},
                    {text: 'Formulas', link: '/intermediate/formulas'},
                    {text: 'Rules', link: '/intermediate/rules'},
                ]
            }, {
                text: 'Low-code basics',
                items: [
                    {text: 'Variables', link: 'low-code-basics/javascript_fundamentals/variables'},
                    {text: 'Branching and loops', link: 'low-code-basics/javascript_fundamentals/branching'},
                    {text: 'Strings', link: 'low-code-basics/javascript_fundamentals/string'},
                    {text: 'Objects', link: 'low-code-basics/javascript_fundamentals/objects'},
                    {text: 'Object referencing', link: 'low-code-basics/javascript_fundamentals/object_referencing'},
                    {text: 'Domino Leap data objects', link: 'low-code-basics/javascript_fundamentals/data_objects'},
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ]
    }
})

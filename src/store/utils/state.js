export default {
    routerLinks: [
        {
            _id: 1,
            _name: "home",
            _path: "/",
        },
        {
            _id: 2,
            _name: "Starter Kits",
            _path: "#starter-kits",
        },
        {
            _id: 3,
            _name: "Documentation",
            _path: "#docs"
        },
        {
            _id: 4,
            _name: "FAQ",
            _path: "#faq"
        }
    ],
    borderHandler: {
        borderBottom: "0.5px solid hsla(263,8%,46%,.2)"
    },
    contents: [
        {
            _id: 1,
            _content: "Quickly identify errors with detailed logs and real-time alerts."
        },
        {
            _id: 2,
            _content: "Comprehensive error categorization for faster resolutions."
        },
        {
            _id: 3,
            _content: "Pinpoint bugs and bottlenecks with intelligent debugging tools."
        },
        {
            _id: 4,
            _content: "Suggestions for code fixes based on patterns and best practices."
        },
        {
            _id: 5,
            _content: "Supports all major programming languages and frameworks."
        },
        {
            _id: 6,
            _content: "Works with CI/CD pipelines and version control systems."
        },
        {
            _id: 7,
            _content: "Share debugging sessions with your team in real-time."
        },
    ],
    currentNav: {
        isNull: true
    },
    CMdata: [
        {
            rows: [
                {
                    _id: 1,
                    _icon: "/src/images/stacks/python.svg",
                    _content: "Python"
                },
                {
                    _id: 2,
                    _icon: "/src/images/stacks/typescript.svg",
                    _content: "Typescript"
                },
                {
                    _id: 3,
                    _icon: "/src/images/stacks/vuejs.svg",
                    _content: "VueJS"
                },
                {
                    _id: 4,
                    _icon: "/src/images/stacks/nextjs.svg",
                    _content: "NextJS"
                }
            ]
        },
        {
            rows: [
                {
                    _id: 1,
                    _icon: "/src/images/stacks/react.svg",
                    _content: "ReactJS"
                },
                {
                    _id: 2,
                    _icon: "/src/images/stacks/adonisjs.svg",
                    _content: "AdonisJS"
                },
                {
                    _id: 3,
                    _icon: "/src/images/stacks/alpinedotjs.svg",
                    _content: "AlpineJS"
                },
                {
                    _id: 4,
                    _icon: "/src/images/stacks/astro.svg",
                    _content: "AstroJS"
                }
            ]
        },
        {
            rows: [
                {
                    _id: 1,
                    _icon: "/src/images/stacks/c.svg",
                    _content: "Csharp"
                },
                {
                    _id: 2,
                    _icon: "/src/images/stacks/cplusplus.svg",
                    _content: "C++"
                },
                {
                    _id: 3,
                    _icon: "/src/images/stacks/javascript.svg",
                    _content: "VanillaJS"
                },
                {
                    _id: 4,
                    _icon: "/src/images/stacks/laravel.svg",
                    _content: "Laravel"
                }
            ]
        },
        {
            rows: [
                {
                    _id: 1,
                    _icon: "/src/images/stacks/mysql.svg",
                    _content: "Mysql"
                },
                {
                    _id: 2,
                    _icon: "/src/images/stacks/tailwind.svg",
                    _content: "Tailwindcss"
                },
                {
                    _id: 3,
                    _icon: "/src/images/stacks/postgresql.svg",
                    _content: "PostgreSQL"
                },
                {
                    _id: 4,
                    _icon: "/src/images/stacks/nuxt.svg",
                    _content: "NuxtJS"
                }
            ]
        }
    ],
    faqData: [
        {
            id: 1,
            title: "What is ErrorBreak?",
            content: "ErrorBreak is the ultimate debugging platform for developers. Identify, analyze, and resolve code issues effortlessly with powerful tools designed to simplify troubleshooting and speed up development. Debug smarter, not harder!."
        },
        {
            id: 2,
            title: "How does ErrorBreak help developers debug their code?",
            content: "ErrorBreak provides real-time error tracking, detailed logs, and insightful debugging tools to streamline the debugging process and reduce development downtime."
        },
        {
            id: 3,
            title: "What programming languages and frameworks does ErrorBreak support?",
            content: "ErrorBreak supports multiple programming languages, including JavaScript, Python, Java, C#, and frameworks like React, Vue, Node.js, and more."
        },
        {
            id: 4,
            title: "Can ErrorBreak integrate with my existing development tools?",
            content: "Yes! ErrorBreak integrates seamlessly with version control systems (GitHub, GitLab, Bitbucket), CI/CD pipelines, and logging tools to fit into your workflow."
        },
        {
            id: 5,
            title: "Does ErrorBreak provide automated debugging suggestions?",
            content: "Yes, our platform includes AI-powered debugging insights that suggest possible fixes and optimizations based on the detected errors."
        },
        {
            id: 6,
            title: "Is ErrorBreak suitable for both solo developers and teams?",
            content: "Absolutely! Whether you're an individual developer or part of a large team, ErrorBreak offers collaboration tools that allow teammates to track and resolve issues together."
        },
        {
            id: 7,
            title: "How secure is ErrorBreak when handling sensitive code and data?",
            content: "We prioritize security with end-to-end encryption, secure cloud storage, and compliance with industry-standard security protocols."
        },
        {
            id: 8,
            title: "Does ErrorBreak offer real-time error notifications?",
            content: "Yes! You can receive instant error alerts via email, Slack, or other notification channels to take immediate action when issues arise."
        },
        {
            id: 9,
            title: "Is there a free version of ErrorBreak?",
            content: "Yes, we offer a free plan with essential debugging features. Paid plans include advanced tools, integrations, and priority support."
        },
        {
            id: 10,
            title: "How can I get started with ErrorBreak?",
            content: "Simply sign up on our website, connect your project, and start debugging effortlessly with our user-friendly interface."
        }
    ],
    cardsData: [
        {
            id: 1,
            title: "Error Tracking and Insights",
            icon: `<svg class="text-orange-100 p-[8px] bg-orange-200 rounded-md " xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="m3.172 7.438 8.83 5.11 8.77-5.08M12 21.61v-9.07" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.39 9.169c0-1.38.99-3.06 2.2-3.73l5.34-2.97c1.14-.63 3.01-.63 4.15 0l5.34 2.97c1.21.67 2.2 2.35 2.2 3.73v5.65c0 1.38-.99 3.06-2.2 3.73l-5.34 2.97c-1.14.63-3.01.63-4.15 0l-5.34-2.97c-1.21-.67-2.2-2.35-2.2-3.73v-.82" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.002 13.242v-3.66l-6.07-3.51-1.05-.6-2.37-1.37" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
            content: "Quickly identify errors with detailed logs and real-time alerts."
        },
        {
            id: 2,
            title: "Code Analysis Tools",
            icon: `<svg class="text-green-100 p-[8px] bg-green-200 rounded-md " xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M18.85 2h-2.7C13.9 2 13 2.9 13 5.15v3.7c0 2.25.9 3.15 3.15 3.15h2.7C21.1 12 22 11.1 22 8.85V5.96M5.15 22h2.7c2.25 0 3.15-.9 3.15-3.15v-3.7C11 12.9 10.1 12 7.85 12h-2.7C2.9 12 2 12.9 2 15.15v3.01M22 15c0 3.87-3.13 7-7 7l1.05-1.75M2 9c0-3.87 3.13-7 7-7L7.95 3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
            content: "Pinpoint bugs and bottlenecks with intelligent debugging tools."
        },
        {
            id: 3,
            title: "Seamless Integration",
            icon: `<svg class="text-blue-100 p-[8px] bg-blue-200 rounded-md " xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="m12 5.25-2.5 8 5-2.5-2.5-5.5Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.08 10.96 18 12.25l-4.5 2.5-.4-.13L6 12.25l4-2M13 15.25l-1 3-2.5-4.68" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
            content: "Supports all major programming languages and frameworks."
        },
        {
            id: 4,
            title: "Collaboration-Friendly",
            icon: `<svg class="text-teal-100 p-[8px] bg-teal-200 rounded-md " xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M20.1 5.69c1.56-1.12 2.31-.55 1.67 1.26l-4.04 11.31c-.14.4-.61.73-1.03.73H7.3c-.42 0-.89-.33-1.03-.73L2.13 6.67c-.59-1.66.1-2.17 1.52-1.15l3.9 2.79c.65.45 1.39.22 1.67-.51l1.76-4.69c.56-1.5 1.49-1.5 2.05 0l1.76 4.69c.28.73 1.02.96 1.66.51l.63-.45M6.5 22h11M9.5 14h5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
            content: "Share debugging sessions with your team in real-time."
        }
    ]
}
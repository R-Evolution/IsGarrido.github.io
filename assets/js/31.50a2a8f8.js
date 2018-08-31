(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{168:function(e,t,r){"use strict";r.r(t);var a=r(0),i=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),r("p",[e._v("VuePress is composed of two parts: a minimalistic static site generator with a Vue-powered theming system, and a default theme optimized for writing technical documentation. It was created to support the documentation needs of Vue's own sub projects.")]),e._v(" "),r("p",[e._v("Each page generated by VuePress has its own pre-rendered static HTML, providing great loading performance and is SEO-friendly. Once the page is loaded, however, Vue takes over the static content and turns it into a full Single-Page Application (SPA). Additional pages are fetched on demand as the user navigates around the site.")]),e._v(" "),e._m(1),e._v(" "),r("p",[e._v("A VuePress site is in fact a SPA powered by "),r("a",{attrs:{href:"http://vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://github.com/vuejs/vue-router",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue Router"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"http://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack"),r("OutboundLink")],1),e._v(". If you've used Vue before, you will notice the familiar development experience when you are writing or developing custom themes (you can even use Vue DevTools to debug your custom theme!).")]),e._v(" "),r("p",[e._v("During the build, we create a server-rendered version of the app and render the corresponding HTML by virtually visiting each route. This approach is inspired by "),r("a",{attrs:{href:"https://nuxtjs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nuxt"),r("OutboundLink")],1),e._v("'s "),r("code",[e._v("nuxt generate")]),e._v(" command and other projects like "),r("a",{attrs:{href:"https://www.gatsbyjs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gatsby"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("Each markdown file is compiled into HTML with "),r("a",{attrs:{href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"}},[e._v("markdown-it"),r("OutboundLink")],1),e._v(" and then processed as the template of a Vue component. This allows you to directly use Vue inside your markdown files and is great when you need to embed dynamic content.")]),e._v(" "),e._m(2),e._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"./markdown.html"}},[e._v("Built-in markdown extensions")]),e._v(" optimized for technical documentation")],1),e._v(" "),r("li",[r("router-link",{attrs:{to:"./using-vue.html"}},[e._v("Ability to leverage Vue inside markdown files")])],1),e._v(" "),r("li",[r("router-link",{attrs:{to:"./custom-themes.html"}},[e._v("Vue-powered custom theme system")])],1),e._v(" "),r("li",[r("router-link",{attrs:{to:"./../config/#serviceworker"}},[e._v("Automatic Service Worker generation")])],1),e._v(" "),r("li",[r("router-link",{attrs:{to:"./../config/#ga"}},[e._v("Google Analytics Integration")])],1),e._v(" "),r("li",[r("router-link",{attrs:{to:"./../default-theme-config/#last-updated"}},[e._v('"Last Updated" based on Git')])],1),e._v(" "),r("li",[r("router-link",{attrs:{to:"./i18n.html"}},[e._v("Multi-language support")])],1),e._v(" "),r("li",[e._v("A default theme with:\n"),r("ul",[r("li",[e._v("Responsive layout")]),e._v(" "),r("li",[r("router-link",{attrs:{to:"./../default-theme-config/#homepage"}},[e._v("Optional Homepage")])],1),e._v(" "),r("li",[r("router-link",{attrs:{to:"./../default-theme-config/#built-in-search"}},[e._v("Simple out-of-the-box header-based search")])],1),e._v(" "),r("li",[r("router-link",{attrs:{to:"./../default-theme-config/#algolia-search"}},[e._v("Algolia Search")])],1),e._v(" "),r("li",[e._v("Customizable "),r("router-link",{attrs:{to:"./../default-theme-config/#navbar"}},[e._v("navbar")]),e._v(" and "),r("router-link",{attrs:{to:"./../default-theme-config/#sidebar"}},[e._v("sidebar")])],1),e._v(" "),r("li",[r("router-link",{attrs:{to:"./../default-theme-config/#git-repo-and-edit-links"}},[e._v("Auto-generated GitHub link and page edit links")])],1)])])]),e._v(" "),e._m(3),e._v(" "),r("p",[e._v("VuePress is still a work in progress. There are a few things that it currently does not support but are planned:")]),e._v(" "),e._m(4),e._v(" "),r("p",[e._v("Contributions are welcome!")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),r("p",[e._v("Nuxt is capable of doing what VuePress does, but it is designed for building applications. VuePress is focused on content-centric static sites and provides features tailored for technical documentation out of the box.")]),e._v(" "),e._m(7),e._v(" "),r("p",[e._v("Both are great projects and also Vue-powered. Except they are both completely runtime-driven and therefore not SEO-friendly. If you don't care about SEO and don't want to mess with installing dependencies, these are still great choices.")]),e._v(" "),e._m(8),e._v(" "),r("p",[e._v("Hexo has been serving the Vue docs well - in fact, we are probably still a long way to go from migrating away from it for our main site. The biggest problem is that its theming system is very static and string-based - we really want to leverage Vue for both the layout and the interactivity. Also, Hexo's markdown rendering isn't the most flexible to configure.")]),e._v(" "),e._m(9),e._v(" "),r("p",[e._v("We've been using GitBook for most of our sub project docs. The primary problem with GitBook is that its development reload performance is intolerable with a large amount of files. The default theme also has a pretty limiting navigation structure, and the theming system is, again, not Vue based. The team behind GitBook is also more focused on turning it into a commercial product rather than an open-source tool.")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[this._v("#")]),this._v(" Introduction")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"how-it-works"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works","aria-hidden":"true"}},[this._v("#")]),this._v(" How It Works")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"features"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[this._v("#")]),this._v(" Features")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"todo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#todo","aria-hidden":"true"}},[this._v("#")]),this._v(" Todo")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Plugin support")]),this._v(" "),t("li",[this._v("Blogging support")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"why-not"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#why-not","aria-hidden":"true"}},[this._v("#")]),this._v(" Why Not ...?")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"nuxt"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nuxt","aria-hidden":"true"}},[this._v("#")]),this._v(" Nuxt")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"docsify-docute"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docsify-docute","aria-hidden":"true"}},[this._v("#")]),this._v(" Docsify / Docute")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"hexo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hexo","aria-hidden":"true"}},[this._v("#")]),this._v(" Hexo")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"gitbook"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gitbook","aria-hidden":"true"}},[this._v("#")]),this._v(" GitBook")])}],!1,null,null,null);i.options.__file="README.md";t.default=i.exports}}]);
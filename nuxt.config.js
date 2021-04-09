export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  pwa: {
    manifest: {
      name: "Unfoto",
      short_name: "Unfoto",
      description:
        "Unfoto is a web app built on Unsplash API dedicated to give users access to lightweight beautiful, free Unsplash images and photos that you can download and use for any project. Better than any royalty free or stock photos. ",
      background_color: "#ffffff",
      theme_color: "#084CBF",
      lang: "en"
    }
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Unfoto",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Unfoto is a web app built on Unsplash API dedicated to give users access to lightweight beautiful, free Unsplash images and photos that you can download and use for any project. Better than any royalty free or stock photos. "
      },
      {
        name: "theme-color",
        property: "theme-color",
        content: "#a5854f"
      },
      {
        name: "apple-mobile-web-app-title",
        property: "apple-mobile-web-app-title",
        content: "Unfoto"
      },
      {
        name: "og:title",
        property: "og:title",
        content: "Unfoto"
      },
      {
        name: "og:site_name",
        property: "og:site_name",
        content: "Unfoto"
      },
      {
        name: "og:image",
        property: "og:image",
        content: "/icon.png"
      },
      {
        name: "twitter:title",
        property: "og:title",
        content: "Unfoto"
      },
      {
        name: "twitter:site_name",
        property: "og:site_name",
        content: "Unfoto"
      },
      {
        name: "twitter:description",
        property: "twitter:description",
        content:
          "Unfoto is a web app built on Unsplash API dedicated to give users access to lightweight beautiful, free Unsplash images and photos that you can download and use for any project. Better than any royalty free or stock photos. "
      },
      {
        name: "twitter:image",
        content: "/icon.png"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,600;1,700&display=swap"
      },
      {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["@/assets/scss/main.scss"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ["@nuxtjs/dotenv"],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa"
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.baseURL,
    headers: {
      common: {
        Authorization: `Client-ID ${process.env.clientID}`
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Pandora Guidance",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },

    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: 'https://apis.google.com/js/platform.js',
      
      }
      },
     
      // highlight-end
      /**
       * The following plugins aren't required for gatsby-source-wordpress,
       * but we need them so the default starter we installed above will keep working.
       **/
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-plugin-google-gtag`,
        options: {
          // You can add multiple tracking ids and a pageview event will be fired for all of them.
          trackingIds: [
            "G-WJLNF1KLLF", // Google Analytics / GA
           
          ],
          // This object is used for configuration specific to this plugin
          pluginConfig: {
            // Puts tracking script in the head instead of the body
            head: true,
          },
        },
      },

      {
        /**
         * First up is the WordPress source plugin that connects Gatsby
         * to your WordPress site.
         *
         * visit the plugin docs to learn more
         * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md
         *
         */
        resolve: `gatsby-source-wordpress`,
        options: {
          // the only required plugin option for WordPress is the GraphQL url.
  
          url: process.env.WPGRAPHQL_URL || `https://dhpandoraguide.wpengine.com/graphql`,
          //Maybe it takes sometime for custom post to be available on GraphQl
          type: {
            // Page: {
            //   exclude: true,
            // },
            Comment: {
              exclude: true,
            },
            MediaItem: {
              localFile: {
                requestConcurrency: 50,
              },
              createFileNodes: false,
            },
            ContentType: {
              exclude: true,
            },
            MenuItem: {
              exclude: true,
            },
            Menu: {
              exclude: true,
            },
            Taxonomy: {
              exclude: true,
            },
            UserRole: {
              exclude: true,
            },
            PostFormat: {
              exclude: true,
            },
          },
          schema: {
            timeout: 1000000,
            perPage: 10,
            requestConcurrency: 5,
          },
  
          html: {
            createStaticFiles: false,
            useGatsbyImage: false,
          },
        },
      },
  
  ],
};


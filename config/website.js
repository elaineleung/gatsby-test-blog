module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Console Log Field Notes', // Navigation and Site Title
  titleAlt: 'Gatsmic', // Title for JSONLD
  description: 'Notes on Web Development',
  headline: 'Mistakes, missteps, misadventures, etc.', // Headline for schema.org JSONLD
  url: 'https://gatsmic.netlify.com', // Domain of your site. No trailing slash!
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'Gatsmic', // shortname for manifest. MUST be shorter than 12 characters
  author: [`@levimykel`,`@elaineleung`], // Author for schemaORGJSONLD
  themeColor: '#663399',
  backgroundColor: '#663399',

}

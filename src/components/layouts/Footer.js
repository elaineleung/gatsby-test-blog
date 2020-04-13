import React from 'react'
import prismicLogo from '../../images/logo-prismic.svg'
import githubLogo from '../../images/github.svg'

export default () =>
  <footer className="container">
    <p>
      <a href="https://prismic.io" target="_blank" rel="noopener noreferrer">
      <img className="footer-logo" src={ prismicLogo } alt="Gray Prismic logo"/>
      </a>&nbsp;
      <a href="https://github.com/elaineleung/gatsby-test-blog" target="_blank" rel="noopener noreferrer">
      <img className="footer-logo" src={ githubLogo } alt="GitHub"/>
      </a>
    </p>
  </footer>

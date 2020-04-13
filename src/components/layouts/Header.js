import React from 'react'
// import { RichText } from 'prismic-reactjs'
import website from '../../../config/website'


export default () => {
   return(
    <div className="home-header container">
      <a href={website.url}><h1>{website.title}</h1></a>
      <p className="blog-description">{website.headline}</p>
    </div>
  )
}

// export default () => {
//   return(
//    <div className="home-header container">
//      {/* <div className="blog-avatar" style={ avatar }>
//      </div> */}
//      <h1>{ RichText.asText(website.title) }</h1>
//      <p className="blog-description">{ RichText.asText(website.headline) }</p>
//    </div>
//  )
// }
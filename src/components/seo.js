import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ title, description }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <Helmet
      htmlAttributes={{ lang: `en` }}
      titleTemplate={data.site.siteMetadata.title}
    >
      <title>{title}</title>
      <meta
        name='description'
        content={data.site.siteMetadata.description}
      />
    </Helmet>
  );
};

export default SEO;
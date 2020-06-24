import React from 'react'
import { Link,graphql } from 'gatsby'
import Layout from '../components/layout' 
import Grid from "../components/grid"
import SEO from "../components/seo"

const CategoryTemplate = ({ data }) => (
  <Layout>
	<SEO title={data.strapiCategory.name} />
    <section className="section">
      <div className="container">

		<nav className="breadcrumb" aria-label="breadcrumbs">
			<ul>
				<li><Link to="/">Categorias</Link></li>
				<li className="is-active"><Link to="#" aria-current="page">{data.strapiCategory.name}</Link></li>
			</ul>
		</nav>

		<h1 className="title">Você está vendo posts sobre {data.strapiCategory.name}</h1>

		<div className="tabs">
			<ul>
				<li className="is-active"><Link to="/">{data.strapiCategory.name}</Link></li>
				<li><Link to="/">Google Tag Manager</Link></li>
				<li><Link to="/">Podcast</Link></li>
				<li><Link to="/">Todas</Link></li>
			</ul>
		</div>
        
		<Grid posts={data.allStrapiArticle.edges} />
      </div>
    </section>
  </Layout>
)

export default CategoryTemplate

export const query = graphql`
    query CategoryTemplate ($slug: String!) {
		strapiCategory(slug: {eq: $slug}){
			id
			slug
			name
		}
        allStrapiArticle(
			filter: {categories: {elemMatch: {slug: {eq: $slug}}}},
			) {
			edges {
			  node {
				id,
				title,
				content,
				feature {
				  id
				  childImageSharp {
					fluid(maxWidth: 320) {
					  ...GatsbyImageSharpFluid
					}
				  }
				},
				author {
				  id,
				  username
				},
				categories {
				  id,
				  name,
				  slug
				}
			  }
			}
		  }
    }
`

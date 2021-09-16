import * as React from 'react'
import {Link,  graphql } from 'gatsby'
import Layout from '../../components/layouts'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPage = ({data} )=>{
    return(
        <Layout pageTitle="My blog Posts">
            
                {
                    data.allMdx.nodes.map(node =>(
/*                         <li key={node.body}>
                            {node.body}
                        </li>  */
                       <article key={node.id}>
                            <h2>
                                
                                <Link to={`/blog/${node.slug}`}>
                                    {node.frontmatter.title}
                                </Link>
                                
                            </h2>
                            <p> Posted:{node.frontmatter.date}</p>

                        </article> 
                    ))
                }
            
            
        </Layout>
    )
}
    export const query = graphql`
    query MyQuery {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
          nodes {
            frontmatter {
              date(formatString: "MMMM D, YYYY")
              title
            }
            id
            slug
            
          }
        }
      }
      
        `

export default BlogPage

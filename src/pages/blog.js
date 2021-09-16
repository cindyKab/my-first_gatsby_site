import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layouts'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPage = ({data} )=>{
    return(
        <Layout pageTitle="My blog Posts">
            <ul>
                {
                    data.allMdx.nodes.map(node =>(
/*                         <li key={node.body}>
                            {node.body}
                        </li>  */
                       <article key={node.id}>
                            <h2>{node.frontmatter.title}</h2>
                            <p> Posted:{node.frontmatter.date}</p>
                            <MDXRenderer>
                                {node.body}
                            </MDXRenderer>

                        </article> 
                    ))
                }
            </ul>
            <p> My cool post will go in here :) </p>
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
            body
          }
        }
      }
      
        `

export default BlogPage

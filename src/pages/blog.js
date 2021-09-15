import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layouts'

const BlogPage = ({data} )=>{
    return(
        <Layout pageTitle="My blog Posts">
            <ul>
                {
                    data.allFile.nodes.map(node =>(
                        <li key={node.name}>
                            {node.name}
                        </li>
                    ))
                }
            </ul>
            <p> My cool post will go in here :) </p>
        </Layout>
    )
}
    export const query = graphql`
        query{
            allFile {
                nodes {
                    name
                }
            }
        }
        `

export default BlogPage

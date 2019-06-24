import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import PostList from "../components/postList"
import { useStaticQuery, graphql } from "gatsby"
const getPosts = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      edges {
        node {
          excerpt

          frontmatter {
            title
            slug
            date(formatString: "MMMM Do YYYY")
            author
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`

const IndexPage = () => {
  const response = useStaticQuery(getPosts)
  console.log(response)
  return (
    <Layout>
      <PostList />
    </Layout>
  )
}

export default IndexPage

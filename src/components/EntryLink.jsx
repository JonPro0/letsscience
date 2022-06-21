import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import TextTruncate from "react-text-truncate"

const EntryLink = ({ post }) => {
  return (
    <div className="card mb-5 columns">
      {post.previewImageURL != null && (
        <div className="card-image column">
          <Link to={"/blog/" + post.slug}>
            <GatsbyImage
              imgClassName="image"
              image={
                post.previewImageURL.localFile.childImageSharp.gatsbyImageData
              }
            />
          </Link>
        </div>
      )}

      <div className="card-content column">
        <div className="media">
          <div className="media-content">
            <Link to={post.slug}>
              <p className="title is-4">{post.title}</p>
            </Link>
            <p className="subtitle is-6">
              {post.author ? post.author + " - " : ""}
              {post.school}
            </p>
          </div>
        </div>

        <div className="content">
          <TextTruncate line={4} text={post.fields.plain} />
          <br />
          <time>{post.publishedOn}</time>
        </div>
      </div>
    </div>
  )
}

export default EntryLink

export const entryFragment = graphql`
  fragment postFragment on ContentfulBlogPostConnection {
    edges {
      node {
        author
        school
        contentful_id
        publishedOn
        title
        slug
        content {
          raw
        }
        fields {
          plain
        }
        previewImageURL {
          localFile {
            childImageSharp {
              gatsbyImageData(aspectRatio: 1.3333)
            }
          }
        }
      }
    }
  }
`

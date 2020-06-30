import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Countries = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCountry(sort: { fields: name, order: ASC }) {
        edges {
          node {
            name
            president {
              firstName
              lastName
              since
              photo {
                fixed(width: 300) {
                  srcSet
                  src
                  height
                  width
                }
              }
            }
          }
        }
      }
    }
  `)

  const content = data.allContentfulCountry.edges

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }

  return content.map(
    ({
      node: {
        name,
        president: { firstName, lastName, photo, since },
      },
    }) => (
      <div key={name}>
        <h1>{name}</h1>
        <Img fixed={photo.fixed} />
        <h3>
          {firstName} {lastName}
        </h3>
        <p>Since: {new Date(since).toLocaleString("en-GB", options)}</p>
      </div>
    )
  )
}

export default Countries

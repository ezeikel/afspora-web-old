import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import OfficialCard from "./officialCard"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  justify-items: center;
  gap: 32px;
`

const Leaders = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCountry(sort: { fields: name, order: ASC }) {
        edges {
          node {
            name
            office {
              person {
                firstName
                lastName
                dob
                photo {
                  id
                  fixed(width: 350, height: 350) {
                    srcSet
                    src
                    height
                    width
                  }
                }
              }
              title
              termStart
              party
            }
          }
        }
      }
    }
  `)

  const content = data.allContentfulCountry.edges

  console.log({ content })

  return (
    <Wrapper>
      {content.map(({ node: { name, office } }, index) => {
        return <OfficialCard key={index} country={name} office={office} />
      })}
    </Wrapper>
  )
}

export default Leaders

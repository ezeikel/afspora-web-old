import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import LeaderCard from "./leaderCard"

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`

const Countries = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCountry(sort: { fields: name, order: ASC }) {
        edges {
          node {
            name
            person {
              firstName
              lastName
              since
              photo {
                fixed(width: 350, height: 350, background: "rgb:000000") {
                  ...GatsbyContentfulFixed_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  `)

  const content = data.allContentfulCountry.edges

  console.log(data)

  return (
    <Wrapper>
      {content.map(({ node: { name, person } }) => (
        <LeaderCard country={name} leader={person} />
      ))}
    </Wrapper>
  )
}

export default Countries

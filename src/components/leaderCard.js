import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;

  > div {
    &:nth-of-type(1) {
    }
  }
`
const LeaderCard = ({
  country,
  leader: { firstName, lastName, photo, since },
}) => (
  <Wrapper>
    <div>
      {/* <Img src={photo.fixed} /> */}
      <span>{country}</span>
    </div>
    <div>
      <h2>
        {firstName} {lastName}
      </h2>
      <div>
        <FontAwesomeIcon
          icon={["fal", "briefcase"]}
          color="#707070"
          size="2x"
        />
        President
      </div>
      <div>
        <FontAwesomeIcon icon={["fal", "users"]} color="#707070" size="2x" />
        Party
      </div>
      <div>
        <FontAwesomeIcon icon={["fal", "clock"]} color="#707070" size="2x" />
        {new Date(since).toLocaleString("en-GB", options)}
      </div>
      <div>
        <FontAwesomeIcon
          icon={["fal", "birthday-cake"]}
          color="#707070"
          size="2x"
        />
        Years old
      </div>
    </div>
  </Wrapper>
)

export default LeaderCard

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
  border-radius: 8px;
  width: 350px;

  > div {
    &:first-of-type {
      height: 350px;
      position: relative;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;

      span {
        background-color: #fff;
        color: #333333;
        padding: 8px;
        border-radius: 8px;
        font-size: 20px;
        position: absolute;
        top: 16px;
        right: 16px;
        font-family: var(--secondary-font-family);
        font-weight: 300;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
      }
    }

    &:nth-of-type(2) {
      padding: 32px;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

      h2 {
        font-size: 25px;
        margin: 0 0 32px;
        font-family: var(--secondary-font-family);
        font-weight: 300;
      }

      > div {
        font-family: var(--primary-font-family);
        font-size: 16px;
        color: #707070;
        & + div {
          margin-top: 16px;
        }
        svg {
          margin-right: 8px;
        }
      }
    }
  }
`
const LeaderCard = ({
  country,
  leader: { firstName, lastName, photo, since },
}) => (
  <Wrapper>
    <div>
      <Img fixed={photo.fixed} />
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
          size="lg"
        />
        President
      </div>
      <div>
        <FontAwesomeIcon icon={["fal", "users"]} color="#707070" size="lg" />
        Party
      </div>
      <div>
        <FontAwesomeIcon icon={["fal", "clock"]} color="#707070" size="lg" />
        {new Date(since).toLocaleString("en-GB", options)}
      </div>
      <div>
        <FontAwesomeIcon
          icon={["fal", "birthday-cake"]}
          color="#707070"
          size="lg"
        />
        Years old
      </div>
    </div>
  </Wrapper>
)

export default LeaderCard

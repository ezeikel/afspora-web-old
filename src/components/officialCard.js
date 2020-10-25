import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import emoji from "emoji-dictionary"
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict"

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
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

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

      h2 {
        font-size: 25px;
        line-height: 30px;
        margin: 0 0 32px;
        font-family: var(--secondary-font-family);
        font-weight: 300;
      }

      > div {
        display: flex;
        align-items: center;
        font-family: var(--primary-font-family);
        font-size: 16px;
        color: #707070;
        & + div {
          margin-top: 16px;
        }
        svg {
          flex: 0 0 1.25em;
          margin-right: 16px;
        }
        span {
          flex: 1 1 auto;
        }
      }
    }
  }
`
const LeaderCard = ({ country, office }) => {
  if (!country || !office) debugger

  const selectedOffice = office[0]
  const { title, termStart, person, party } = selectedOffice
  if (!person) debugger
  const leader = person[0]
  const { firstName, lastName, dob, photo } = leader
  return (
    <Wrapper>
      <div>
        <Img fixed={photo.fixed} />
        <span>
          {country}{" "}
          {emoji.getUnicode(
            country.toLowerCase().split(" ").join("_").replace(/-/g, "_")
          )}
        </span>
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
          <span>{title}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={["fal", "users"]} color="#707070" size="lg" />
          <span>{party}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={["fal", "clock"]} color="#707070" size="lg" />
          {formatDistanceToNowStrict(new Date(termStart))} in office
        </div>
        {dob && (
          <div>
            <FontAwesomeIcon
              icon={["fal", "birthday-cake"]}
              color="#707070"
              size="lg"
            />
            {formatDistanceToNowStrict(new Date(dob))} old
          </div>
        )}
      </div>
    </Wrapper>
  )
}

export default LeaderCard

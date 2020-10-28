import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const {
    allTwitterSearchTweetsAnglophoneCrisisHashtag: {
      edges: anglophoneCrisisTweets,
    },
    allTwitterSearchTweetsCongoIsBleedingHashtag: {
      edges: congoIsBleedingTweets,
    },
    allTwitterSearchTweetsEndPoliceBrutalityInUgandaHashtag: {
      edges: endPoliceBrutalityInUgandaTweets,
    },
    allTwitterSearchTweetsEndSarsHashtag: { edges: endSarsTweets },
    allTwitterSearchTweetsPrayforEthiopiaHashtag: {
      edges: prayForEthiopiaTweets,
    },
    allTwitterSearchTweetsRapeNationalEmergencyHashtag: {
      edges: rapeNationalEmergencyTweets,
    },
    allTwitterSearchTweetsShutItAllDownHashtag: { edges: shutItAllDownTweets },
    allTwitterSearchTweetsStopBgvHashtag: { edges: stopGBVTweets },
    allTwitterSearchTweetsUgandaNeedsChangeHashtag: {
      edges: ugandaNeedsChangeTweets,
    },
    allTwitterSearchTweetsZimbabweanLivesMatterHashtag: {
      edges: zimbabweanLivesMatterTweets,
    },
  } = data

  console.log({ data })

  return (
    <Layout>
      <SEO title="Crises" />
      {/* <div>{data}</div> */}
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query CrisisQuery {
    allTwitterSearchTweetsCongoIsBleedingHashtag {
      edges {
        node {
          full_text
          user {
            name
          }
        }
      }
    }
    allTwitterSearchTweetsEndPoliceBrutalityInUgandaHashtag {
      edges {
        node {
          full_text
          user {
            name
          }
        }
      }
    }
    allTwitterSearchTweetsEndSarsHashtag {
      edges {
        node {
          full_text
          user {
            name
          }
        }
      }
    }
    allTwitterSearchTweetsPrayforEthiopiaHashtag {
      edges {
        node {
          full_text
          user {
            name
          }
        }
      }
    }
    allTwitterSearchTweetsRapeNationalEmergencyHashtag {
      edges {
        node {
          full_text
          user {
            name
          }
        }
      }
    }
    allTwitterSearchTweetsShutItAllDownHashtag {
      edges {
        node {
          full_text
          user {
            name
          }
        }
      }
    }
    allTwitterSearchTweetsStopBgvHashtag {
      edges {
        node {
          user {
            name
          }
          full_text
        }
      }
    }
    allTwitterSearchTweetsUgandaNeedsChangeHashtag {
      edges {
        node {
          full_text
          user {
            name
          }
        }
      }
    }
    allTwitterSearchTweetsZimbabweanLivesMatterHashtag {
      edges {
        node {
          full_text
          user {
            name
          }
        }
      }
    }
    allTwitterSearchTweetsAnglophoneCrisisHashtag {
      edges {
        node {
          full_text
          user {
            name
          }
        }
      }
    }
  }
`

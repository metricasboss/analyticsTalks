import React, { createContext } from "react";
import transitions from "../components/transitions.scss"

const AuditoriaContext = createContext();

class AuditoriaProvider extends React.Component {
  state = {
    form: {},
    transitions: {
        enterRight: `${transitions.animated} ${transitions.enterRight}`,
        enterLeft: `${transitions.animated} ${transitions.enterLeft}`,
        exitRight: `${transitions.animated} ${transitions.exitRight}`,
        exitLeft: `${transitions.animated} ${transitions.exitLeft}`,
        intro: `${transitions.animated} ${transitions.intro}`,
    },
    gaApi: false,
    setGapi: (gaApi) => {
      this.setState({ gaApi: gaApi })
    },
    accounts: [],
    account: null,
    properties: [],
    property: null,
    profiles: [],
    profile: null,
    viewProperties: [],
    viewProperty: {},
    setAccounts: (accounts) => {
      this.setState({ accounts: accounts })
    },
    setAccount: (account) => {
      this.setState({account: account})
    },
    setProperties: (properties) => {
      this.setState({ properties: properties })
    },
    setProperty: (property) => {
      this.setState({ property: property })
    },
    setProfiles: (profiles) => {
      this.setState({ profiles: profiles })
    },
    setProfile: (profile) => {
      this.setState({ profile: profile })
    },
    setViewProperties: (viewProperties) => {
      this.setState({ viewProperties: viewProperties })
    },
    setviewProperty: (viewProperty) => {
      this.setState({ viewProperty: viewProperty })
    },
    result: [],
    setResult: (result) => {
      this.setState(previousState => ({
        result: [...previousState.result, result]
      }))
    }
  }


  render() {
    const { children } = this.props
    return (
      <AuditoriaContext.Provider
        value={
          this.state
        }
    >
      {children}
    </AuditoriaContext.Provider>
    )
  }
}

export default AuditoriaContext


export { AuditoriaProvider }

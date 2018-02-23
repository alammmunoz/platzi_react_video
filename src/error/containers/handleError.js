import React, { Component } from 'react';
import RegularError from '../components/regular-error';

class HandleError extends Component {
  state = {
    handleError: false,
  }  

  componentDidCatch = (error, info) => {
    this.setState({
      handleError: true
    })
    //envia este error a un servicio como Sentry
    console.log('amigos')
    console.log(this.state.handleError)
  }
  render() {
    console.log(this.state.handleError)
    if(this.state.handleError) {
      console.log('solitos')
      return (
        <RegularError />
      )
    }
    return this.props.children
  }
}

export default HandleError
import React from 'react';
import {
  Button,
  FAButton,
  ITButton,
} from '../components'

export class ButtonTest extends React.Component {
  state = {
    dense: false,
    primary: false,
    compact: false,
    accent: true,
    raised: true,
  }
  render() {
    let {dense, primary, compact, accent, raised} = this.state;
    return (
      <section>
        <h1>Button</h1>
        <div style={{display: 'flex', justifyContent: 'space-between', width: 600}}>
          <Button raised onClick={() => this.setState({dense:   !this.state.dense  })}>Dense</Button>
          <Button raised onClick={() => this.setState({primary: !this.state.primary})}>Primary</Button>
          <Button raised onClick={() => this.setState({compact: !this.state.compact})}>Compact</Button>
          <Button raised onClick={() => this.setState({accent:  !this.state.accent })}>Accent</Button>
          <Button raised onClick={() => this.setState({raised:  !this.state.raised })}>Raised</Button>
        </div>

        <Button style={{marginTop: 10}} dense={dense} primary={primary} compact={compact} accent={accent} raised={raised}>Example Button</Button>
        <Button tag='div' style={{marginTop: 10, marginLeft: 10}} dense={dense} primary={primary} compact={compact} accent={accent} raised={raised}>Example Button (DIV)</Button>

        <h1>Floating Action Button</h1>
        <FAButton onClick={e => console.log(e)}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
          </svg>
        </FAButton>

        <h1>Icon Toggle Button</h1>
        <ITButton toggleOnIcon='favorite' toggleOffIcon='favorite_border' onChange={e => console.log(e)} />
      </section>
    );
  }
}

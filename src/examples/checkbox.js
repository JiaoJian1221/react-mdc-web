import React from 'react';
import {
  Checkbox,
} from '../components'

export class CheckboxTest extends React.Component {
  state = {
    checked1: false,
    checked2: false,
    indeterminate2: true,
  }

  render() {
    return (
      <section style={{padding: 20}}>
        <Checkbox
          onChange={({target: {checked}})=>{
            this.setState({checked1: checked})
          }}
          checked={this.state.checked1}
        />
        <Checkbox
          onChange={({target: {checked}})=>{
            this.setState({checked2: checked, indeterminate2: false})
          }}
          checked={this.state.checked2}
          indeterminate={this.state.indeterminate2}
        />
      </section>
    );
  }
}

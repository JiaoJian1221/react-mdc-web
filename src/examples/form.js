import React from 'react';
import {
  Button,
  Radio,
  Checkbox,
  Slider,
  FormField,
} from '../components'

export class FormTest extends React.Component {
  state = {
    checked1: false,
    checked2: false,
    indeterminate2: true,
    slider: {
      discrete: true,
      displayMarkers: true,
    }
  }

  render() {
    let {checked1, checked2, indeterminate2, slider} = this.state;
    return (
      <section style={{padding: 0}}>
        <h1>Checkbox</h1>

        <FormField>
          <Checkbox
            onChange={({target: {checked}})=>{
              this.setState({checked1: checked})
            }}
            checked={checked1}
          />
          <label>Default</label>
        </FormField>

        <FormField>
          <Checkbox disabled checked={checked1}/>
          <label>Default (Disabled)</label>
        </FormField>

        <FormField>
          <Checkbox
            onChange={({target: {checked}})=>{
              this.setState({checked2: checked, indeterminate2: false})
            }}
            checked={checked2}
            indeterminate={indeterminate2}
          />
          <label>Default (Indeterminate)</label>
          <Button onClick={e => this.setState({indeterminate2: true})}>Make Indeterminate</Button>
        </FormField>


        <h1>Radio</h1>
        <FormField>
          <Radio id='radio_1' name='radios'/>
          <label htmlFor='radio_1'>Radio 1</label>
        </FormField>
        <FormField>
          <Radio id='radio_2' name='radios'/>
          <label htmlFor='radio_2'>Radio 2</label>
        </FormField>
        <FormField>
          <Radio id='radio_3' disabled name='radios'/>
          <label htmlFor='radio_3'>Radio 3 (Disabled)</label>
        </FormField>

        <h1>Slider</h1>
        <FormField>
          <Checkbox checked={slider.discrete} onChange={
            ({target: {checked}}) => this.setState(state => state.slider.discrete = checked)
          } />
          <label>Discrete</label>
        </FormField>
        <FormField>
          <Checkbox checked={slider.displayMarkers} onChange={
            ({target: {checked}}) => this.setState(state => state.slider.displayMarkers = checked)
          } />
          <label>Display Markers</label>
        </FormField>
        <Slider
          discrete={slider.discrete}
          displayMarkers={slider.displayMarkers}
          onChange={e => console.log()}
          onInput={e => console.log()}/>
      </section>
    );
  }
}

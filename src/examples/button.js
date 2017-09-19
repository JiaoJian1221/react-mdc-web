import React from 'react';
import {
  Button,
} from '../components'

export class ButtonTest extends React.Component {
  render() {
    return (
      <section>
        <Button>Default</Button>
        <Button dense>Dense</Button>
        <Button primary>Primary</Button>
        <Button compact>Compact</Button>
        <Button accent>Accent</Button>

        <Button raised>Default</Button>
        <Button raised dense>Dense</Button>
        <Button raised primary>Primary</Button>
        <Button raised compact>Compact</Button>
        <Button raised accent>Accent</Button>
      </section>
    );
  }
}

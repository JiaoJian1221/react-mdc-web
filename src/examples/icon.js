import React from 'react';
import {
  Icon, ICONS,
} from '../components'

export class IconTest extends React.Component {
  render() {
    let nodes = ICONS.map((icon, index) => {
      return (
        <Icon key={index} name={icon} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px', margin: '10px', border: '1px solid #ccc'}}/>
      );
    });
    return (
      <section style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', color: '#000'}}>
        {nodes}
      </section>
    );
  }
}

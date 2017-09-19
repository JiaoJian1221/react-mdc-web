import React from 'react';
import {
  Elevation,
} from '../components'

export class ElevationTest extends React.Component {
  render() {
    let nodes = Array(25).fill().map((i, index) => {
      return (
        <Elevation key={index} z={index} transition={true} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '200px', height: '100px', margin: '0px 60px 80px', borderRadisu: '3px', fontSize: '.8em', color: '#9e9e9e', backgroundColor: 'white'}}>
          <span>Elevation {index}</span>
        </Elevation>
      );
    });
    return (
      <section style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        {nodes}
      </section>
    );
  }
}

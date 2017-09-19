import React from 'react';
import {
  Elevation, ICONS,
  Tab, TabIcon, TabText, TabBar, TabBarScroller,
} from '../components'

export class TabTest extends React.Component {
  render() {
    return (
      <section style={{}}>
        <Elevation z={1} style={{padding: 15}}>
          <TabBar>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab>Three</Tab>
          </TabBar>
        </Elevation>

        <Elevation z={1} style={{padding: 15, marginTop: 15}}>
          <TabBar>
            <Tab><TabIcon icon='phone' /></Tab>
            <Tab><TabIcon icon='favorite' /></Tab>
            <Tab><TabIcon icon='person_pin' /></Tab>
          </TabBar>
        </Elevation>

        <Elevation z={1} style={{padding: 15, marginTop: 15}}>
          <TabBar>
            <Tab>
              <TabIcon icon='phone' />
              <TabText>Phones<br/>Mobile</TabText>
            </Tab>
            <Tab>
              <TabIcon icon='favorite' />
              <TabText>Favorites</TabText>
            </Tab>
            <Tab>
              <TabIcon icon='person_pin' />
              <TabText>Nearby</TabText>
            </Tab>
          </TabBar>
        </Elevation>

        <Elevation z={1} style={{padding: 15, marginTop: 15}}>
          <TabBarScroller style={{width: 500}}>
            <TabBar scrollable>
              {ICONS.slice(0, 20).map((icon, index) => {
                return <Tab key={index}><TabIcon icon={icon}/></Tab>;
              })}
            </TabBar>
          </TabBarScroller>
        </Elevation>

      </section>
    );
  }
}

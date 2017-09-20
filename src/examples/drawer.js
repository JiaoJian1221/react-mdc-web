import React from 'react';
import {
  Button,
  DrawerHeader, DrawerContent,
  PermanentDrawer, TemporaryDrawer, PersistentDrawer,
} from '../components'

class PermanentDrawerTest extends React.Component {
  componentDidMount() {
    //this.drawer_.open();
  }

  render() {
    return (
      <PermanentDrawer ref={ref => this.drawer_=ref} position='right' above={true}>
        <DrawerHeader className="a" contentClassName="mdc-theme--primary-bg mdc-theme--text-primary-on-primary">
          Permanent Header here
        </DrawerHeader>
        <DrawerContent>Permanent Content</DrawerContent>
      </PermanentDrawer>
    )
  }
}

class TemporaryDrawerTest extends React.Component {
  componentDidMount() {
    //this.drawer_.open();
  }

  render() {
    return (
      <TemporaryDrawer ref={ref => this.drawer_=ref}>
        <DrawerHeader className="a" contentClassName="mdc-theme--primary-bg mdc-theme--text-primary-on-primary">
          Temporary Header here
        </DrawerHeader>
        <DrawerContent>Temporary Content</DrawerContent>
      </TemporaryDrawer>
    );
  }
}

class PersistentDrawerTest extends React.Component {
  componentDidMount() {
    this.drawer_.open();
  }

  render() {
    return (
      <PersistentDrawer ref={ref => this.drawer_=ref}>
        <DrawerHeader className="a" contentClassName="mdc-theme--primary-bg mdc-theme--text-primary-on-primary">
          Persistent Header here
        </DrawerHeader>
        <DrawerContent>Persistent Content</DrawerContent>
      </PersistentDrawer>
    );
  }
}

export class DrawerTest extends React.Component {

  render() {
    return(
      <div>
        <div>
          <Button raised>Temporary Drawer</Button>
          <Button raised>Permanent Drawer</Button>
          <Button raised>Persistent Drawer</Button>
        </div>
        <div>
          <PermanentDrawerTest/>
          <TemporaryDrawerTest/>
          <PersistentDrawerTest/>
        </div>
      </div>
    );
  }
}

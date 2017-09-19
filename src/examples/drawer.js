import React from 'react';
import {
  Button,
  DrawerHeader, DrawerContent,
  PermanentDrawer, TemporaryDrawer, PersistentDrawer,
} from '../components'

class PermanentDrawerTest extends React.Component {
  render() {
    return (
      <PermanentDrawer above={true}>
        <DrawerHeader className="a" contentClassName="mdc-theme--primary-bg mdc-theme--text-primary-on-primary">
          Header here
        </DrawerHeader>
        <DrawerContent>Content</DrawerContent>
      </PermanentDrawer>
    )
  }
}

class TemporaryDrawerTest extends React.Component {
  render() {
    return (
      <TemporaryDrawer>
        <DrawerHeader className="a" contentClassName="mdc-theme--primary-bg mdc-theme--text-primary-on-primary">
          Header here
        </DrawerHeader>
        <DrawerContent>Content</DrawerContent>
      </TemporaryDrawer>
    );
  }
}

class PersistentDrawerTest extends React.Component {
  render() {
    return (
      <PersistentDrawer>
        <DrawerHeader className="a" contentClassName="mdc-theme--primary-bg mdc-theme--text-primary-on-primary">
          Header here
        </DrawerHeader>
        <DrawerContent>Content</DrawerContent>
      </PersistentDrawer>
    );
  }
}

export class DrawerTest extends React.Component {
  render() {
    return(
      <div>
        <PermanentDrawerTest/>
        <TemporaryDrawerTest/>
        <PersistentDrawerTest/>
      </div>
    );
  }
}

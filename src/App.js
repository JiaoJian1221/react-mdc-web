import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  HashRouter,
  Route,
  Link
} from 'react-router-dom';

import {
  Toolbar, ToolbarRow, ToolbarSection, ToolbarTitle, ToolbarIcon,
  List,
  ListItem,
  ListItemIcon,
  PermanentDrawer, PersistentDrawer,
  Icon,
} from './components';

import {
  ButtonTest,
  GridTest,
  CardTest,
  CheckboxTest,
  DialogTest,
  DrawerTest,
  ElevationTest,
  IconTest,
  TabTest,
  ListTest,
} from './examples';

import '@material/theme/dist/mdc.theme.min.css';


export class Welcome extends React.Component {
  render() {
    return (
      <section>
        <div>
          <img src={logo} className="App-logo" alt="logo" style={{width: 200}} />
          <h2>Welcome to React</h2>
        </div>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </section>
    );
  }
}

class App extends React.Component {
  state = {
    links: [{
      path: '/welcom',
      component: Welcome,
      name: 'Welcome',
    }, {
      path: '/button',
      component: ButtonTest,
      name: 'Button',
    }, {
      path: '/card',
      component: CardTest,
      name: 'Card',
    }, {
      path: '/checkbox',
      component: CheckboxTest,
      name: 'Checkbox',
    }, {
      path: '/dialog',
      component: DialogTest,
      name: 'Dialog',
    }, {
      path: '/drawer',
      component: DrawerTest,
      name: 'Drawer',
    }, {
      path: '/elevation',
      component: ElevationTest,
      name: 'Elevation',
    }, {
      path: '/grid',
      component: GridTest,
      name: 'Grid',
    }, {
      path: '/icon',
      component: IconTest,
      name: 'Icon',
    }, {
      path: '/tab',
      component: TabTest,
      name: 'Tab',
    }, {
      path: '/list',
      component: ListTest,
      name: 'List',
    }],
  }

  render() {
    return (
      <HashRouter>
        <div id="app">
          <Toolbar fixed fixLastRow waterfall>
            <ToolbarRow>
              <ToolbarSection start>
                <ToolbarIcon icon="menu" onClick={()=>{this.drawer.toggle()}}/>
                <ToolbarTitle>Title</ToolbarTitle>
              </ToolbarSection>
              <ToolbarSection end>
                End
              </ToolbarSection>
            </ToolbarRow>
          </Toolbar>
          <div id="app-content" className={"mdc-toolbar-fixed-adjust"}>
            <PersistentDrawer ref={ref=>this.drawer=ref}>
              <List>
                {this.state.links.map((link, index) => {
                  return (
                    <ListItem key={index}>
                      <ListItemIcon icon="folder" start/>
                      <Link to={link.path}>{link.name}</Link>
                      <ListItemIcon icon="info" end/>
                    </ListItem>
                  )
                })}
              </List>
            </PersistentDrawer>
            <div style={{padding: 16, flex: '1 1 auto', boxSizing: 'border-box'}}>
            {this.state.links.map((link, index) => {
              return <Route key={index} path={link.path} component={link.component} />
            })}
            </div>

          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;

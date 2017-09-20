import React from 'react';
import {
  Button,
  SimpleMenu,
  SimpleMenuAnchor,
} from '../components'

export class MenuTest extends React.Component {
  state = {
    open: false,
  }

  render() {
    return (
      <div>
        <Button raised onClick={(e) => {
          this.menu_.show();
        }}>Open Menu</Button>
        
        <Button raised onClick={(e) => {
          this.setState({open: true})
        }}>Open Menu</Button>
        <SimpleMenuAnchor>
          <SimpleMenu ref={ref => this.menu_=ref} open={this.state.open} onSelected={(e) => {
            let {detail} = e;
            console.log('selected:' + detail.item.textContent.trim() + ' at index ' + detail.index);
          }}/>
        </SimpleMenuAnchor>
      </div>
    );
  }
}

import React from 'react';
import {
  Elevation, ListGroup, List, ListItem, ListItemIcon, ListItemText, ListDivider, ListGroupSubheader
} from '../components'

export class ListTest extends React.Component {
  render() {
    return (
      <div>
        <Elevation z={3} style={{padding: 5, width: '40%'}}>
          <ListGroup>
            <ListGroupSubheader>List 1 (dense)</ListGroupSubheader>
            <List dense>
              <ListItem>Single-line item</ListItem>
              <ListItem>Single-line item</ListItem>
              <ListItem>Single-line item</ListItem>
            </List>

            <ListDivider/>
            <ListGroupSubheader>List 2 (Text only)</ListGroupSubheader>
            <List>
              <ListItem>Single-line item</ListItem>
              <ListItem>Single-line item</ListItem>
              <ListItem>Single-line item</ListItem>
            </List>

            <ListDivider/>
            <ListGroupSubheader>Start Detail</ListGroupSubheader>
            <List>
              <ListItem>
                <ListItemIcon icon='folder'/>
                <ListItemText>Single-line item</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon icon='folder'/>
                <ListItemText>Single-line item</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon icon='folder'/>
                <ListItemText>Single-line item</ListItemText>
              </ListItem>
            </List>

            <ListDivider/>
            <ListGroupSubheader>End Detail</ListGroupSubheader>
            <List>
              <ListItem>
                <ListItemText>Single-line item</ListItemText>
                <ListItemIcon icon='folder' position='end'/>
              </ListItem>
              <ListItem>
                <ListItemText>Single-line item</ListItemText>
                <ListItemIcon icon='folder' position='end'/>
              </ListItem>
              <ListItem>
                <ListItemText>Single-line item</ListItemText>
                <ListItemIcon icon='folder' position='end'/>
              </ListItem>
            </List>

            <ListDivider/>
            <ListGroupSubheader>End Detail (dense)</ListGroupSubheader>
            <List dense>
              <ListItem>
                <ListItemText>Single-line item</ListItemText>
                <ListItemIcon icon='folder' position='end'/>
              </ListItem>
              <ListItem>
                <ListItemText>Single-line item</ListItemText>
                <ListItemIcon icon='folder' position='end'/>
              </ListItem>
              <ListItem>
                <ListItemText>Single-line item</ListItemText>
                <ListItemIcon icon='folder' position='end'/>
              </ListItem>
            </List>

            <ListDivider/>
            <ListGroupSubheader>Start Detail (dense)</ListGroupSubheader>
            <List dense>
              <ListItem>
                <ListItemIcon icon='folder' start/>
                <ListItemText>Single-line item</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon icon='folder' start/>
                <ListItemText>Single-line item</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon icon='folder' start/>
                <ListItemText>Single-line item</ListItemText>
              </ListItem>
            </List>

            <ListDivider/>
            <ListGroupSubheader>Avatar List</ListGroupSubheader>
            <List avatar>
              <ListItem>
                <ListItemIcon style={{backgroundColor: 'rgba(0,0,0,.26)'}} icon='folder' start/>
                <ListItemText>Single-line item</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon style={{backgroundColor: 'rgba(0,0,0,.26)'}} icon='folder' start/>
                <ListItemText>Single-line item</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon style={{backgroundColor: 'rgba(0,0,0,.26)'}} icon='folder' start/>
                <ListItemText>Single-line item</ListItemText>
              </ListItem>
            </List>

            <ListDivider/>
            <ListGroupSubheader>Avatar List (dense)</ListGroupSubheader>
            <List avatar dense>
              <ListItem>
                <ListItemIcon style={{backgroundColor: 'rgba(0,0,0,.26)'}} icon='folder' start/>
                <ListItemText>Single-line item</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon style={{backgroundColor: 'rgba(0,0,0,.26)'}} icon='folder' start/>
                <ListItemText>Single-line item</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon style={{backgroundColor: 'rgba(0,0,0,.26)'}} icon='folder' start/>
                <ListItemText>Single-line item</ListItemText>
              </ListItem>
            </List>
          </ListGroup>
        </Elevation>
      </div>
    );
  }
}

import React from 'react';
import {
  Button,
  Dialog, DialogHeader, DialogBody, DialogFooter,
} from '../components'

export class DialogTest extends React.Component {
  doClick() {
    this.dialog.show();
  }

  render() {
    return (
      <section>
        <Button raised dense onClick={this.doClick.bind(this)}>Open</Button>
        <Dialog ref={ref=>this.dialog=ref}>
          <DialogHeader>
            Use Googles location service?
          </DialogHeader>
          <DialogBody scrollable={false}>
            Let Google help apps determine location.
            This means sending anonymous location data to Google,
            even when no apps are running.
          </DialogBody>
          <DialogFooter>
            <Button data-cancel>Decline</Button>
            <Button primary data-accept>Accept</Button>
          </DialogFooter>
        </Dialog>
      </section>
    );
  }
}

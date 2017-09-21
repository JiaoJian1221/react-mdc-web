import React from 'react';
import {
  Button,
  Dialog, DialogHeader, DialogBody, DialogFooter,
} from '../components'

export class DialogTest extends React.Component {


  render() {
    return (
      <section>
        <Button raised dense onClick={e => this.dialog_.show()}>Open</Button>

        <Dialog ref={ref => this.dialog_=ref} onAccept={e => console.log(e)} onCancel={e => console.log(e)}>
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

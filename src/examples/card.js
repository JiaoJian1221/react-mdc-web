import React from 'react';
import {
  Button,
  Card, CardHeader, CardText, CardMedia, CardActions, CardTitle, CardSubtitle,
} from '../components'

export class CardTest extends React.Component {
  render() {
    return (
      <section style={{display: 'flex', flexDirection: 'column', flex: '1 1 auto'}}>
        <Card style={{width: '95%', margin: 20}}>
          <CardHeader>
            <CardTitle>Title goes here</CardTitle>
            <CardSubtitle>Subtitle</CardSubtitle>
          </CardHeader>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </CardText>
          <CardActions>
            <Button compact primary>action 1</Button>
            <Button compact >action 2</Button>
          </CardActions>
        </Card>

        <Card style={{width: '95%', margin: 20}}>
          <CardHeader>
            <CardTitle>Title goes here</CardTitle>
          </CardHeader>
          <CardMedia
            style={{
              background: 'url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505302501525&di=aeb118409dc817d7d803619b7e0bfb6b&imgtype=0&src=http%3A%2F%2Fpic36.nipic.com%2F20131203%2F3655282_202314394372_2.jpg")',
              height: '300px',
              backgroundSize: 'cover',
            }}/>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </CardText>
          <CardActions>
            <Button compact primary>action 1</Button>
            <Button compact >action 2</Button>
          </CardActions>
        </Card>
      </section>
    );
  }
}

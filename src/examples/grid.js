import React from 'react';
import {
  Grid, Cell,
} from '../components'

export class GridTest extends React.Component {
  render() {
    return (
      <section>
        <Grid>
          <Cell className="Cell">4</Cell>
          <Cell className="Cell">4</Cell>
          <Cell className="Cell">4</Cell>
        </Grid>

        <Grid>
          <Cell className="Cell" col={1}>1</Cell>
          <Cell className="Cell" col={1}>1</Cell>
          <Cell className="Cell" col={1}>1</Cell>
          <Cell className="Cell" col={1}>1</Cell>
          <Cell className="Cell" col={1}>1</Cell>
          <Cell className="Cell" col={1}>1</Cell>
          <Cell className="Cell" col={1}>1</Cell>
          <Cell className="Cell" col={1}>1</Cell>
          <Cell className="Cell" col={1}>1</Cell>
          <Cell className="Cell" col={1}>1</Cell>
          <Cell className="Cell" col={1}>1</Cell>
          <Cell className="Cell" col={1}>1</Cell>
        </Grid>

        <Grid>
          <Cell className="Cell" col={6}>6</Cell>
          <Cell className="Cell" col={4}>4</Cell>
          <Cell className="Cell" col={2}>2</Cell>
        </Grid>
      </section>
    );
  }
}

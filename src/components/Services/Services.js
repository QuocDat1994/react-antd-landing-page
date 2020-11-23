import { Card } from 'antd';
import React from 'react'
import "./Services.less";

export const Services = () => {
  const { Grid } = Card;

  return (
    <section id="services" class="Services">
      <h1>Services We Provide</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
        <br />
        sed do eiusmod tempor incididunt ut labore et dolore.
      </p>

      <Card>
        <Grid>
          <i class="fas fa-mug-hot"></i>
          <h2>Easy to Customize</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore.</p>
        </Grid>
        <Grid>
          <i class="fas fa-briefcase"></i>
          <h2>Easy to Customize</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore.</p>
        </Grid>
        <Grid>
          <i class="far fa-lightbulb"></i>
          <h2>Easy to Customize</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore.</p>
        </Grid>
        <Grid>
          <i class="fas fa-layer-group"></i>
          <h2>Easy to Customize</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore.</p>
        </Grid>
        <Grid>
          <i class="fas fa-sync-alt"></i>
          <h2>Easy to Customize</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore.</p>
        </Grid>
        <Grid>
          <i class="far fa-credit-card"></i>
          <h2>Easy to Customize</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore.</p>
        </Grid>
      </Card>
    </section>
  )
}

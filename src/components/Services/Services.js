import { Card } from 'antd';
import React from 'react'
import "./Services.less";

export const Services = () => {
  const { Grid } = Card;

  return (
    <section id="services" className="Services">
      <h1 className="heading">Services We Provide</h1>
      <p className="sub-heading">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
        <br className="break-point" />
        sed do eiusmod tempor incididunt ut labore et dolore.
      </p>

      <Card>
        <Grid>
          <i className="fas fa-mug-hot"></i>
          <h2>Easy to Customize</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore.</p>
        </Grid>
        <Grid>
          <i className="fas fa-briefcase"></i>
          <h2>Easy to Customize</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore.</p>
        </Grid>
        <Grid>
          <i className="far fa-lightbulb"></i>
          <h2>Easy to Customize</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore.</p>
        </Grid>
        <Grid>
          <i className="fas fa-layer-group"></i>
          <h2>Easy to Customize</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore.</p>
        </Grid>
        <Grid>
          <i className="fas fa-sync-alt"></i>
          <h2>Easy to Customize</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore.</p>
        </Grid>
        <Grid>
          <i className="far fa-credit-card"></i>
          <h2>Easy to Customize</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore.</p>
        </Grid>
      </Card>
    </section>
  )
}

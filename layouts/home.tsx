import * as React from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

interface Props { };

export const HomeLayout: React.SFC<Props> = (props) => (
  <Grid container={true}>
    <Grid item={true} xs={12}>
      <Typography type="title">Home Layout</Typography>
    </Grid>
  </Grid>
);

import React, { Component } from "react";
import {
  Grid,
  Container,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  withStyles,
  Paper,
  Box
} from "@material-ui/core";
import api from "../../lib/Api";
import { connect } from "react-redux";
import carrotImage from "../../resources/carrot_icon.png";
import transactionImage from "../../resources/transaction.png";
import CardItems from "../../component/CardItems";

const style = theme => ({
  card: {
    display: "flex",
    height: "150px"
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  },
  dashboard: {
    marginBottom: theme.spacing(2)
  }
});

class EmployeeIndex extends Component {
  state = {};

  componentDidMount() {
    api.get_employee_bazaar().then(res => this.setState({ bazaar: res }));
  }

  render() {
    const props = this.props;

    return (
      <Container size="lg">
        <Typography
          component="h1"
          variant="h4"
          paragraph={true}
          className={props.dashboard}
        >
          Dashboard
        </Typography>
        <Grid container spacing={3}>
          <Grid item md={4} xs={12}>
            <CardActionArea>
              <Card
                className={props.classes.card}
                style={{ backgroundColor: "#303F9F", color: "white" }}
              >
                <div className={props.classes.cardDetails}>
                  <CardContent>
                    <Typography component="h2" variant="h5">
                      {props.user.name}
                    </Typography>
                    <Typography variant="subtitle1" color="primary">
                      {props.user.type}
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                      {props.user.jobFamily && props.user.jobFamily.name} -{" "}
                      {props.user.jobFamily && props.user.jobFamily.description}
                    </Typography>
                  </CardContent>
                </div>
                <CardMedia
                  className={props.classes.cardMedia}
                  image={api.getImageUrl(props.user.picture)}
                  title="Image title"
                />
              </Card>
            </CardActionArea>
          </Grid>

          <Grid item md={4} xs={12}>
            <CardActionArea>
              <Card
                className={props.classes.card}
                style={{ backgroundColor: "#8BC34A" }}
              >
                <div className={props.classes.cardDetails}>
                  <CardContent>
                    <Typography component="h2" variant="h5">
                      Carrot Basket
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      You've earned{" "}
                      {props.user.basket && props.user.basket.carrotAmounts}{" "}
                      carrots!
                    </Typography>
                  </CardContent>
                </div>
                <CardMedia
                  className={props.classes.cardMedia}
                  image={carrotImage}
                  title="carrot amounts"
                />
              </Card>
            </CardActionArea>
          </Grid>

          <Grid item md={4} xs={12}>
            <CardActionArea>
              <Card
                className={props.classes.card}
                style={{ backgroundColor: "#7C4DFF" }}
              >
                <div className={props.classes.cardDetails}>
                  <CardContent>
                    <Typography component="h2" variant="h5">
                      Transaction History
                    </Typography>
                  </CardContent>
                </div>
                <CardMedia
                  className={props.classes.cardMedia}
                  image={transactionImage}
                  title="transaction"
                />
              </Card>
            </CardActionArea>
          </Grid>
        </Grid>

        <Typography
          component="h1"
          variant="h4"
          paragraph={true}
          className={props.dashboard}
        >
          Bazaar
        </Typography>

        {this.state.bazaar &&
          this.state.bazaar.map((val, index) => (
            <Box pb={3}>
              <Paper elevation={5}>
                <Box p={2}>
                  <Typography
                    component="h1"
                    variant="h5"
                    paragraph={true}
                    className={props.dashboard}
                  >
                    {val.name}
                  </Typography>
                  <Grid container spacing={4} key={index}>
                    {val.items.map((val, index) => (
                      <Grid item md={3} xs={12} key={index}>
                        <CardItems item={val} />
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Paper>
            </Box>
          ))}
      </Container>
    );
  }
}

export const mapStateToProps = state => ({
  user: state.users.user
});

export default connect(mapStateToProps)(withStyles(style)(EmployeeIndex));

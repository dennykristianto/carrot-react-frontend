import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import api from "../lib/Api"

const useStyles = makeStyles({
    media: {
      height: 240,
    },
  });

function CardItems(props) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
             <CardActionArea>
                <CardMedia
                className={classes.media}
                image={api.getImageUrl(props.item.picture)}
                title={props.item.name}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.item.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" display="inline">
                    {props.item.description}
                </Typography>
                <Typography variant="h6" color="primary" align="right" color="textSecondary" component="p" >
                    {props.item.exchangeRate} carrots
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" variant="contained" fullWidth={true}>
                Details
                </Button>
            </CardActions>
        </Card>
    )
}

CardItems.propTypes = {
    item: PropTypes.object.isRequired
}

export default CardItems

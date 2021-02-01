import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import LogoHorizontal from '../images/default-monochrome-white.svg'
import ResponsiveDesign from '../images/responsive_color.png'
import SEO from "../components/seo"
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from "@material-ui/core/CardHeader"


const withStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    background: "rgb(253,29,29)",
    minHeight: "70vh",
    background: "linear-gradient(90deg, rgba(253,29,29,1) 0%, rgba(255,123,14,1) 48%, rgba(255,213,42,0.9640231092436975) 100%)",
  },
  // diagonal: {
  //   backgroundColor: "white",
  //   height: "18vh",
  //   transform: "skewY(-4deg)",
  //   position: "relative",
  //   bottom: "70px",
  //   borderBottom: "1px solid black"
  // },
  landingWrapper:{
    display: "flex",
    margin: "auto",
    marginTop: "2%",
    flexDirection: "column",
  },
  landingText: {
    textAlign: "center",
    marginTop: "5%",
    color: "white",
    fontSize: "2.0rem",
  },
  landingLogo:{
    width: "300px",
    margin: "auto",
    marginTop: "10%"
  },
  landingButton: {
    margin:"20px",
    backgroundColor: "#2196f3",
    color: "white",
    borderRadius: "35px",
    padding:"15px",
    paddingLeft: "25px",
    paddingRight: "25px",
    textTransform: "none",
    fontSize: "1.0rem",
    '&:hover': {
      backgroundColor: 'green',
      boxShadow: 'none',
    },
  },
  landingButtonWrapper: {
    marginTop: "3%",
    display: "flex",
    justifyContent: "center"
  },
  servicesWrapper: {
    display: "flex",
    margin: "20px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  servicesHeader: {
    fontSize: "2.0rem"
  },
  servicesHeaders: {
    display: "flex",
    flexDirection: "column"
  },
  stockPhotoWrapper: {
    display: "flex",
    margin: "20px"
  },
  stockPhotoOne: {
    width: "200px",
    display: "flex",
    margin: "auto"
  },
  cardOne: {
    backgroundColor: "#2196f3",
    borderRadius: "15px"
  },
  cardOneHeader: {
    color: "white",
    fontWeight: "bold"
  }


}));

const IndexPage = () => {
  const classes = withStyles();

  return (
    <Layout>
    <SEO title="Home" />
    <div className={classes.root}>
      <div className={classes.landingWrapper}>
        <img className={classes.landingLogo} alt="RedPin logo" src={LogoHorizontal}/>
        <Typography className={classes.landingText}>Build your website, build your business</Typography>
        <div className={classes.landingButtonWrapper}>
          <Button className={classes.landingButton}>Let's Get Started</Button>
        </div>
      </div>
    </div>
    {/* <div className={classes.diagonal}></div> */}
    <div className={classes.servicesWrapper}>
      <div className={classes.servicesHeaders}>
        <Typography className={classes.servicesHeader}>Website Design & Marketing Solutions</Typography>
      </div>
      <div className={classes.stockPhotoWrapper}>
        <Card className={classes.cardOne}>
         <img className={classes.stockPhotoOne} src={ResponsiveDesign}/>
         <CardHeader className={classes.cardOneHeader} title="Responsive Web Design"></CardHeader>
        </Card>
      </div>
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
  )
}

export default IndexPage

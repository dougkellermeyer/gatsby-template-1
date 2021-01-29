import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import RedPinLogo from '../images/vector/default-monochrome-white.svg'
import {makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';


const withStyles = makeStyles((theme) => ({
  logo: {
    height: "auto",
    width: "170px",
    margin: "20px"
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    background: "rgb(253,29,29)",
    background: "linear-gradient(90deg, rgba(253,29,29,1) 0%, rgba(255,123,14,1) 48%, rgba(255,213,42,0.9640231092436975) 100%)",
    marginBottom: "-80px"
  },
  navbarWrapper:{
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  navbarLink: {
    borderBottom: "1px solid black",
    margin: "20px",
    paddingTop: "20px",
  },
  navbarButton: {
    margin:"20px",
    backgroundColor: "black",
    color: "white",
    borderRadius: "6px",
    textTransform: "none",
    width: "150px"
  }

}));

const Header = () => {

  const classes = withStyles();

  return (
    <header className={classes.navbar}>
        <Link to="/"style={{color: `white`,textDecoration: `none`,}}>
          <img className={classes.logo} src={RedPinLogo} alt="redpin ventures logo" />  
        </Link>
        <div className={classes.navbarWrapper}>
          <Typography className={classes.navbarLink}>Button 1</Typography>
          <Typography className={classes.navbarLink}>Button 2</Typography>
          <Typography className={classes.navbarLink}>Button 3</Typography>
          <Button className={classes.navbarButton}>Button 4</Button>
        </div>
     
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
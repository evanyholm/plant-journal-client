import React from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'

const TopBar = () => {
  const styles = useStyles()
  return (
      <AppBar position="fixed" className={styles.topBar}>
        <Toolbar>
          <IconButton edge="start" aria-label="menu">
            <MenuIcon color={'secondary'} />
          </IconButton>
          <Link className={styles.link} component={RouterLink} to={'/'}>
            <Typography color={'textPrimary'}>Home</Typography>
          </Link>
          <Link className={styles.link} component={RouterLink} to={'/addPlant'}>
            <Typography color={'textPrimary'}>Add Plant</Typography>
          </Link>
        </Toolbar>
      </AppBar>
  )
}
export default TopBar

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
  },
  link: {
    margin: theme.spacing(0, 0, 0, 4),
  },
  topBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}))

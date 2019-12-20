import React from 'react'
import {AppBar, Toolbar, IconButton, Typography, makeStyles} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'

const LinkTo = (props: any) => <RouterLink {...props} />
const TopBar = () => {
  const styles = useStyles()
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" aria-label="menu">
          <MenuIcon color={'secondary'} />
        </IconButton>
        <Link className={styles.link} component={LinkTo} to={'/'}>
          <Typography color={'textPrimary'}>Home</Typography>
        </Link>
        <Link className={styles.link} component={LinkTo} to={'/addPlant'}>
          <Typography color={'textPrimary'}>Add Plant</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  )
}
export default TopBar

const useStyles = makeStyles(theme => ({
  link: {
    margin: theme.spacing(0, 0, 0, 4)
  }
}))

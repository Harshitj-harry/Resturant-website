
import { Menu} from '@mui/icons-material'
import { Box,AppBar, Typography, Toolbar, IconButton, Drawer, Divider } from '@mui/material'
import { NavLink } from 'react-router-dom'
import "./header.css"
import { useState } from 'react'
import logo from "./logo.svg"

const Header = () => {
  const [mobileOpen, setMobileOpen]=useState(false)
  //handle click
  const handleDrawer=()=>{
    setMobileOpen(!mobileOpen)
  }
  // menu drawer
  const drawer=(
    <Box onClick={handleDrawer} sx={{textAlign:'center'}}>
             <Typography
              bgcolor={'black'}
              color={"goldenrod"}
              variant='h6'
              component={"div"}
              sx={{flexGrow:1,my:2}}
              >
              <img src={logo} alt="logo" height= {'70'} width="200"/>
            </Typography>
            <Divider/>
          
            <ul className='mobile-navigation' >
              <li>
                <NavLink activeClassName="active" to={'/'}>Home</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to={'/about'}>About</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to={'/contact'}>Contact</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to={'/menu'}>Menu</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to={'/pn'}>PageNotFound</NavLink>
              </li>
          </ul>
            

    </Box>
  )

  return (
    <>
      <Box>
        <AppBar component={"black"} sx={{bgcolor:"black"}}>
          <Toolbar >
            <IconButton 
        
            color='inherit'
            aria-label="open drawer" 
            edge='start'
            sx={{
              mr:2,
              display:{sm:"none"},
              }}
              
              onClick={handleDrawer}
            >

              <Menu />
            </IconButton>
           <Typography
              color={"goldenrod"}
              variant='h6'
              component={"div"}
              sx={{flexGrow:1}}
              >
              <img src={logo} alt="logo" height= {'70'} width="250"/>
            </Typography>
          
            <Box sx={{display:{xs:"none",sm:"block"}}}>
            <ul className='navigation-menu' >
              <li>
                <NavLink activeClassName="active" to={'/'}>Home</NavLink >
              </li>
              <li>
                <NavLink activeClassName="active" to={'/about'}>About</NavLink >
              </li>
              <li>
                <NavLink activeClassName="active" to={'/contact'}>Contact</NavLink >
              </li>
              <li>
                <NavLink activeClassName="active" to={'/menu'}>Menu</NavLink >
              </li>
              <li>
                <NavLink activeClassName="active" to={'/pn'}>PageNotFound</NavLink >
              </li>
          </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component='nav'>
          <Drawer variant='temporary'
           open={mobileOpen} 
           onClose={handleDrawer}
           sx={{display:{ xs:'block',sm:'none'} }}
           >

            {drawer}
          </Drawer>

        </Box>
        <Box >
        <Toolbar/>

        </Box>
      </Box>
        

    </>
  )
}

export default Header
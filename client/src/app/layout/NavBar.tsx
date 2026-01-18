import { Group, Menu, Close, AddRounded } from "@mui/icons-material";
import { useState } from "react";
import { Box, AppBar, Toolbar, Typography, Button, Container, MenuItem, Dialog, DialogContent, IconButton, Drawer, useMediaQuery, useTheme } from "@mui/material";
import CreateActivity from "../../features/activities/form/CreateActivity";
import { NavLink } from "react-router";
import MenuItemLink from "../shared/components/MenuItemLink";
import { colors } from "../../lib/colors";



export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{
        background: colors.surface.a10,
        boxShadow: 'none',
        color: colors.base.light
      }} >

        <Container maxWidth='xl'>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
            {/* Logo */}
            <Box>
              <MenuItem component={NavLink} to='' sx={{ display: 'flex', gap: 2, pl: 0, '&:hover': { background: 'none' } }}>
                <Group fontSize="large" sx={{ color: colors.primary.a20 }} />
                <Typography variant="h6" fontWeight='500' sx={{ display: { xs: 'none', sm: 'block', color: colors.primary.a20 } }}>Reactivities</Typography>
              </MenuItem>
            </Box>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: 'flex', justifyContent: 'center', flex: 1, gap: 1 }}>
                <MenuItemLink to='/activities'>
                  Activities
                </MenuItemLink>
                <MenuItemLink to="/about">
                  About
                </MenuItemLink>
                <MenuItemLink to="/contact">
                  Contact
                </MenuItemLink>
              </Box>
            )}

            {/* Desktop Button */}
            {!isMobile && (
              <Button size='large' variant='contained' onClick={() => setOpen(true)} sx={{ textTransform: 'capitalize', fontWeight: 500, ml: 'auto', background: colors.primary.a20, color: colors.base.dark, borderRadius: 3 }}>
                <AddRounded sx={{ mr: 1, fontSize: '1.4rem' }} />Activity
              </Button>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <Box sx={{ ml: 'auto', display: 'flex', gap: 1 }}>
                <IconButton
                  color="inherit"
                  onClick={() => setOpen(true)}
                  sx={{ fontSize: 20 }}
                >
                  <Typography variant="body2" sx={{ ml: 1, padding: 1, borderRadius: 1 }}>Create Activity</Typography>
                </IconButton>
                <IconButton
                  color="inherit"
                  onClick={() => setMobileOpen(!mobileOpen)}
                >
                  {mobileOpen ? <Close /> : <Menu />}
                </IconButton>
              </Box>
            )}
          </Toolbar>
        </Container>

        {/* Mobile Drawer Menu */}
        <Drawer
          anchor="top"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          sx={{ '& .MuiDrawer-paper': { mt: '64px' } }}
        >
          <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
            <MenuItem component={NavLink} to='/activities' onClick={() => setMobileOpen(false)}>
              Activities
            </MenuItem>
            <MenuItem component={NavLink} to="/about" onClick={() => setMobileOpen(false)}>
              About
            </MenuItem>
            <MenuItem component={NavLink} to="/contact" onClick={() => setMobileOpen(false)}>
              Contact
            </MenuItem>
          </Box>
        </Drawer>

        <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>

          <DialogContent>
            <CreateActivity onClose={() => setOpen(false)} />
          </DialogContent>
        </Dialog>

      </AppBar>
    </Box>
  )
}


import { Group } from "@mui/icons-material";
import { useState } from "react";
import { Box, AppBar, Toolbar, Typography, Button, Container, MenuItem, Dialog, DialogContent } from "@mui/material";
import CreateActivity from "../../features/activities/form/CreateActivity";
import { NavLink } from "react-router";
import MenuItemLink from "../shared/components/MenuItemLink";



export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{
        backgroundImage: 'linear-gradient(135deg, #1b114dff 0%, #3a26bdff 69%, #5a32d4ff 89%)'
      }} >

        <Container maxWidth='xl'>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <MenuItem component={NavLink} to='' sx={{ display: 'flex', gap: 2 }}>
                <Group fontSize="large" />
                <Typography variant="h4" fontWeight='bold'>Reactivities</Typography>
              </MenuItem>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
            <Button size='large' variant='contained' color='warning' onClick={() => setOpen(true)}>Create Activity</Button>
          </Toolbar>
        </Container>

        <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>

          <DialogContent>
            <CreateActivity onClose={() => setOpen(false)} />
          </DialogContent>
        </Dialog>

      </AppBar>
    </Box>
  )
} 


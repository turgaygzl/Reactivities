import { Group } from "@mui/icons-material";
import { Box, Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router";

export default function HomePage() {

    return (
        <Paper sx={{
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundImage: 'linear-gradient(45deg, #082600 0%, #0F7909 45%, #99FF00 100%)'
        }}>
            <Box sx={{
                display: 'flex', alignContent: 'center',
                alignItems: 'center', color: 'white', gap: 3
            }}>
                <Group sx={{ height: 110, width: 110 }} />
                <Typography variant="h1">Reactivities</Typography>
            </Box>
            <Typography variant="h2">
                Welcome to Reactivities
            </Typography>
            <Button component={Link} to='/activities' size="large" variant='contained' sx={{
                height: 80,
                textTransform:'capitalize',
                borderRadius: 4,
                fontSize: '1.5rem',
                backgroundColor:'#000000a0',
                boxShadow:' 6px 8px 40px 5px rgba(0, 0, 0, 0.28)',
                '&:hover':{backgroundColor:'#eeeeee96', color:'black'}
            }}>
            Let the party Begin!
        </Button>
        </Paper >
    );
};

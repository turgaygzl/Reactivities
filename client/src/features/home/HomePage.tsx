import { Group } from "@mui/icons-material";
import { Box, Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router";

export default function HomePage() {

    return (
        <Paper sx={{

            display: 'flex',
            flexDirection: 'column',
            gap: 6,
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundImage: 'linear-gradient(135deg, #082600 0%, #0F7909 35%, #99FF00 100%)',
            backgroundSize: '400% 400%',
            animation: 'gradientShift 15s ease infinite'
        }}>
            <Box sx={{
                display: 'flex', alignContent: 'center',
                alignItems: 'center', color: '#000000a3', gap: 3
            }}>
                <Group sx={{ height: 110, width: 110, color: '#000000a3' }} />
                <Typography variant="h1">Reactivities</Typography>
            </Box>
            <Typography sx={{ fontSize: '2.5rem', mt: -5, mb: -2 }}>
                Welcome
            </Typography>
            <Button component={Link} to='/activities' size="large" variant='contained' sx={{
                height: 80,
                textTransform: 'capitalize',
                borderRadius: 4,
                fontSize: '1.5rem',
                fontWeight: 600,
                backgroundColor: '#000000cc',
                boxShadow: '0 8px 40px rgba(0, 0, 0, 0.4), 0 0 60px rgba(153, 202, 83, 0.2)',
                border: '2px solid rgba(160, 232, 57, 0.3)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                '&:hover': {
                    backgroundColor: '#ffffffee',
                    color: 'black',
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 50px rgba(0, 0, 0, 0.5), 0 0 80px rgba(153, 202, 83, 0.35)',
                    borderColor: 'rgba(160, 232, 57, 0.6)'
                }
            }}>
                Let the party Begin!
            </Button>
        </Paper >
    );
};

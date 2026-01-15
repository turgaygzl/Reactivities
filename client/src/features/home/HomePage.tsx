import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Container, Divider, Grid2, Typography } from "@mui/material";
import { useActivities } from "../../lib/hooks/useActivities";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventIcon from "@mui/icons-material/Event";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";



export default function HomePage() {
    const { activities, deleteActivity, isLoading } = useActivities('')
    if (!activities || isLoading) return <Typography>Loading...</Typography>
    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            {/* Başlık */}
            <Box mb={4}>
                <Typography variant="h4" fontWeight="bold">
                    Etkinlikler
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    Yaklaşan etkinlikleri keşfet
                </Typography>
            </Box>

            {/* Etkinlik Listesi */}
            {activities.map(activity => (

                <Card
                    sx={{
                        borderRadius: 3,
                        margin: 1,
                        boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                        transition: "all 0.25s ease",
                        "&:hover": {
                            transform: "translateY(-4px)",
                            boxShadow: "0 12px 32px rgba(0,0,0,0.12)"
                        }
                    }}
                >
                    <Box sx={{ display:"flex" }}>

                        <Box
                            sx={{
                                width: 160,
                                height: 160,
                                overflow: "hidden",
                                borderRadius: 2,
                                flexShrink: 0,
                                margin: 2
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={`/images/categoryImages/${activity.category}.jpg`}
                                alt={activity.category}
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover"
                                }}
                            />
                        </Box>

                        <Grid2 sx={{alignContent:'start'}}>
                            <CardContent>
                                {/* Başlık */}
                                <Typography
                                    variant="h6"
                                    fontWeight={600}
                                    gutterBottom
                                >
                                    {activity.title}
                                </Typography>

                                {/* Tarih */}
                                <Box display="flex" alignItems="center" gap={1} mb={1}>
                                    <EventIcon fontSize="small" color="action" />
                                    <Typography variant="body2" color="text.secondary">
                                        {activity.date}
                                    </Typography>
                                </Box>

                                {/* Açıklama */}
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ mb: 2 }}
                                >
                                    {activity.description}
                                </Typography>

                                {/* Lokasyon */}
                                <Box display="flex" alignItems="center" gap={1}>
                                    <LocationOnIcon fontSize="small" color="action" />
                                    <Typography variant="subtitle2">
                                        {activity.city} / {activity.venue}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Grid2>

                    </Box>


                    <Divider />

                    <CardActions
                        sx={{
                            px: 2,
                            py: 1.5,
                            display: "flex",
                            justifyContent: "space-between"
                        }}
                    >
                        <Chip
                            label={activity.category}
                            size="small"
                            sx={{
                                fontWeight: 500,
                                borderRadius: 1
                            }}
                        />

                        <Box display="flex" gap={1}>
                            <Button
                                size="small"
                                variant="outlined"
                                startIcon={<VisibilityIcon />}
                                onClick={() => { }}
                            >
                                View
                            </Button>

                            <Button
                                size="small"
                                variant="contained"
                                color="error"
                                startIcon={<DeleteIcon />}
                                disabled={deleteActivity.isPending}
                                onClick={() => deleteActivity.mutate(activity.id)}
                            >
                                Delete
                            </Button>
                        </Box>
                    </CardActions>
                </Card>
            ))}
            
        </Container>
       
    );
};

import { AccessTime, Place, VisibilityRounded } from "@mui/icons-material";
import { Avatar, Box, Button, Card, CardContent, CardHeader, Chip, Divider, Typography } from "@mui/material"
// import { useActivities } from "../../../lib/hooks/useActivities";
import { Link } from "react-router";
import { colors } from "../../../lib/colors";
import { formatDate } from "../../../lib/util/util";

type Props = {
    activity: Activity


}

export default function ActivityCard({ activity }: Props) {
    // const { deleteActivity } = useActivities(activity.id);

    const isHost = false;
    const isGoing = false;
    const label = isHost ? "You are hosting" : "You are going";
    const isCancelled = false;
    const color = isHost ? 'secondary' : isGoing ? 'warning' : 'default';

    return (
        <Card elevation={3} sx={{ 
            color: colors.base.light, 
            borderRadius: 4, 
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)', 
            backgroundColor: colors.surface.a10,
            border: `1px solid ${colors.surface.a30}`,
            overflow: 'hidden'
        }}>
            <Box display='flex' alignItems='center' justifyContent='space-between'>
                <CardHeader avatar={<Avatar sx={{ height: 80, width: 80 }} />}
                    title={
                        <Typography sx={{ fontWeight: 'bold', fontSize: 20 }}>
                            {activity.title}
                        </Typography>
                    }
                    subheader={
                        <>
                            <Typography color={colors.primary.a50}>Hosted by  {' '} <Link to={`/profiles/bob`} style={{ textDecoration: 'none', color: colors.primary.a0 }}>Bob</Link></Typography>
                        </>
                    }
                />
                <Box display='flex' flexDirection='column' gap={2} mr={2}>
                    {(isHost || isGoing) && <Chip label={label} color={color} sx={{ borderRadius: 2 }} />}
                    {isCancelled && <Chip label='Cancelled' color='error' sx={{ borderRadius: 2 }} />}
                </Box>
            </Box>
            <Divider sx={{ mb: 2, width: '95%', mx: 'auto', borderColor: colors.primary.a10 }} />
            <CardContent sx={{ p: 0 }}>
                <Box display='flex' alignItems='center' mb={1} px={2}>
                    <Box display='flex' flexGrow={0} alignItems='center'>
                        <AccessTime sx={{ mr: 1 }} />
                        <Typography variant="body2" noWrap>
                            {formatDate(activity.date)}
                        </Typography>
                    </Box>

                    <Place sx={{ ml: 3, mr: 1 }} />
                    <Typography variant="body2">{activity.venue}</Typography>
                </Box>
                <Divider sx={{ width: '90%', mx: 'auto' }} />
                <Box display='flex' gap={2} sx={{ backgroundColor: colors.surface.a20, py: 1, pl: 3 }}>
                    Attendees go here

                </Box>
            </CardContent>
            <CardContent sx={{ pb: '16px !important' }}>
                <Typography variant="body2">
                    {activity.description}
                </Typography>

                <Button component={Link}
                    to={`/activities/${activity.id}`}
                    size='medium'
                    variant='contained'
                    sx={{
                        color: colors.base.light,
                        background: `linear-gradient(135deg, ${colors.surface.a20} 0%, ${colors.surface.a30} 100%)`,
                        border: `1px solid ${colors.primary.a20}`,
                        display: 'flex',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                        justifySelf: 'self-end',
                        borderRadius: 3,
                        textTransform: 'capitalize',
                        fontWeight: 600,
                        '&:hover': {
                            background: `linear-gradient(135deg, ${colors.surface.a30} 0%, ${colors.surface.a40} 100%)`,
                            boxShadow: '0 4px 15px rgba(160, 232, 57, 0.2)',
                            borderColor: colors.primary.a10
                        }
                    }}>
                    <VisibilityRounded sx={{ mr: 1, color: colors.primary.a40 }} />
                    View
                </Button>
                {/* <Button
                        // disabled={deleteActivity.isPending} onClick={() => deleteActivity.mutate(activity.id)} 
                        size='medium' variant='contained' color='error'>Delete</Button> */}


            </CardContent>
        </Card>
    )
}
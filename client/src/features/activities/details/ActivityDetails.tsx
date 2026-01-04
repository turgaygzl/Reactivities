import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import EditActivity from "../form/EditActivity";
import { useActivities } from "../../../lib/hooks/useActivities";

type Props = {
    selectedActivity: Activity
    cancelSelectedActivity: () => void
    editing: boolean
    setEditing: (v: boolean) => void
    onSubmit?: (activity: Activity) => void;

}

export default function ActivityDetails({ selectedActivity, cancelSelectedActivity, editing, setEditing, onSubmit }: Props) {
    
    const { activities , updateActivity} = useActivities();
    const activity = activities?.find(x => x.id === selectedActivity.id);
    if (!activity) return <Typography>Loading...</Typography>
    return (
        <>
            <Card sx={{ borderRadius: 2, boxShadow: 'none' }}>
                <CardMedia
                    component='img'
                    src={`/images/categoryImages/${activity.category}.jpg`}
                />

                <CardContent>
                    {editing ? (
                        <EditActivity activity={activity} onClose={() => setEditing(false)} onSubmit={onSubmit} />

                    ) : (
                        <>
                            <Typography variant="h5">{activity.title}</Typography>
                            <Typography variant="subtitle1" fontWeight='light'>{activity.date}</Typography>
                            <Typography variant="body1">{activity.description}</Typography>
                            <CardActions>
                                <Button disabled={updateActivity.isPending} color="primary" onClick={() => setEditing(true)}>Edit</Button>
                                <Button onClick={cancelSelectedActivity} color="inherit" >Cancel</Button>
                            </CardActions>
                        </>
                    )}
                </CardContent>

            </Card>
        </>
    )
}
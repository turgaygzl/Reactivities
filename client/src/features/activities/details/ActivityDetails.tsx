import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import EditActivity from "../form/EditActivity";

type Props = {
    activity: Activity
    cancelSelectedActivity: () => void
    editing: boolean
    setEditing: (v: boolean) => void
    onSubmit?: (activity: Activity) => void;
    
}

export default function ActivityDetails({ activity, cancelSelectedActivity, editing, setEditing,onSubmit  }: Props) {

    return (
        <>
            <Card sx={{ borderRadius: 2, boxShadow: 'none' }}>
                <CardMedia
                    component='img'
                    src={`/images/categoryImages/${activity.category}.jpg`}
                />

                <CardContent>
                    {editing ? (
                        <EditActivity activity={activity} onClose={() => setEditing(false) } onSubmit={onSubmit} />
                        
                    ) : (
                        <>
                            <Typography variant="h5">{activity.title}</Typography>
                            <Typography variant="subtitle1" fontWeight='light'>{activity.date}</Typography>
                            <Typography variant="body1">{activity.description}</Typography>
                            <CardActions>
                                <Button color="primary" onClick={() => setEditing(true)}>Edit</Button>
                                <Button onClick={cancelSelectedActivity} color="inherit" >Cancel</Button>
                            </CardActions>
                        </>
                    )}
                </CardContent>

            </Card>
        </>
    )
}
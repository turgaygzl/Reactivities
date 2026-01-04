import { Grid2 } from "@mui/material";
import { useState } from "react";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";


type Props = {

    activities: Activity[]
    selectActivity: (id: string, closeEdit?: boolean) => void;
    cancelSelectActivity: () => void;
    selectedActivity: Activity | undefined;



}

export default function ActivityDashboard({
    activities,
    cancelSelectActivity,
    selectActivity,
    selectedActivity }: Props) {
    const [editing, setEditing] = useState(false);

    return (
        <Grid2 container spacing={3}>
            <Grid2 size={7}>
                <ActivityList
                    activities={activities}
                    selectActivity={(id, closeEdit) => {
                        if (closeEdit) setEditing(false);
                        selectActivity(id);
                    }}
                    
                />
            </Grid2>
            <Grid2 size={5} sx={{ position: 'sticky', top: 22, alignSelf: 'flex-start', zIndex: 1200, height: 'calc(100vh - 22px)', overflow: 'auto', }}>
                {selectedActivity &&
                    <ActivityDetails
                        selectedActivity={selectedActivity}
                        cancelSelectedActivity={cancelSelectActivity}
                        editing={editing}
                        setEditing={setEditing}

                    />
                }

            </Grid2>

        </Grid2>)
}

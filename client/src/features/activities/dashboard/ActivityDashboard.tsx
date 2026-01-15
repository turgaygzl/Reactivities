import { Grid2 } from "@mui/material";
import ActivityList from "./ActivityList";




export default function ActivityDashboard() {


    return (
        <Grid2 container spacing={3}>
            <Grid2 size={7}>
                <ActivityList />
            </Grid2>
            <Grid2 size={5} sx={{ position: 'sticky', top: 22, alignSelf: 'flex-start', zIndex: 1200, height: 'calc(100vh - 22px)', overflow: 'auto', }}>
                Activity filters go here
            </Grid2>

        </Grid2>)
}

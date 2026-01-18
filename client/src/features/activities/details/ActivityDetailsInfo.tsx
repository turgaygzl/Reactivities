import { CalendarToday,  Info, Place } from "@mui/icons-material";
import { Divider, Grid2, Paper, Typography } from "@mui/material";
import { colors } from "../../../lib/colors";
import { formatDate } from "../../../lib/util/util";

type Props = {
  activity: Activity
}

export default function ActivityDetailsInfo({activity}:Props) {
    if (!activity) return null;
    
    return (
        <Paper sx={{ mb: 2 ,color: colors.base.light, backgroundColor:colors.surface.a10 , 
        borderRadius:4, borderTopRightRadius:0 , borderTopLeftRadius:0}}>

            <Grid2 container alignItems="center" pl={2} py={1}>
                <Grid2 size={1}>
                    <Info sx={{color:colors.primary.a10}} fontSize="large" />
                </Grid2>
                <Grid2 size={11}>
                    <Typography>{activity.description}</Typography>
                </Grid2>
            </Grid2>
            <Divider />
            <Grid2 container alignItems="center" pl={2} py={1}>
                <Grid2 size={1}>
                    <CalendarToday sx={{color:colors.primary.a10}}  fontSize="large" />
                </Grid2>
                <Grid2 size={11}>
                    <Typography>{formatDate(activity.date)}</Typography>
                </Grid2>
            </Grid2>
            <Divider />

            <Grid2 container alignItems="center" pl={2} py={1}>
                <Grid2 size={1}>
                    <Place sx={{color:colors.primary.a10}} fontSize="large" />
                </Grid2>
                <Grid2 size={10}>
                    <Typography>
                        {activity.venue}, {activity.city}
                    </Typography>
                </Grid2>
            </Grid2>
        </Paper>
    )
}


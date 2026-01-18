import { Card, Badge, CardMedia, Box, Typography, Button } from "@mui/material";
import { Link } from "react-router";
import { colors } from "../../../lib/colors";
import { formatDate } from "../../../lib/util/util";

type Props = {
  activity: Activity
}

export default function ActivityDetailsHeader({ activity }: Props) {
  if (!activity) return null;

  const isCancelled = false;
  const isHost = true;
  const isGoing = true;
  const loading = false;

  return (
    <Card sx={{ boxShadow:'none', position: 'relative', 
    backgroundColor: 'transparent', overflow: 'hidden', 
    borderRadius: 4, borderBottomLeftRadius:0, borderBottomRightRadius:0 }}>
      {isCancelled && (
        <Badge
          sx={{ position: 'absolute', left: 40, top: 20, zIndex: 1000 }}
          color="error"
          badgeContent="Cancelled"
        />
      )}
      <CardMedia
        component="img"
        height="300"
        image={`/images/categoryImages/${activity.category}.jpg`}
        alt={'travel image'}
      />
      <Box sx={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        color: 'white',
        padding: 2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        backgroundColor: '#06060679',
        boxSizing: 'border-box',
      }}>
        {/* Text Section */}
        <Box >
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>{activity.title}</Typography>
          <Typography variant="subtitle1">{formatDate(activity.date)}</Typography>
          <Typography variant="subtitle2">
            Hosted by <Link to={`/profiles/username`} style={{ color: colors.primary.a0, textDecoration: 'none', fontWeight: 'bold' }}>Bob</Link>
          </Typography>
        </Box>

        {/* Buttons aligned to the right */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          {isHost ? (
            <>
              <Button
                variant='contained'

                sx={{
                  backgroundColor: isCancelled ? colors.success.a0 : colors.danger.a10,
                  color: isCancelled ? colors.success.a0 : colors.danger.a30,
                  borderRadius: 2
                }}

                onClick={() => { }}
              >
                {isCancelled ? 'Re-activate Activity' : 'Cancel Activity'}
              </Button>
              <Button
                variant="contained"
                component={Link}
                to={`/manage/activityId`}
                disabled={isCancelled}
                sx={{
                  backgroundColor: colors.success.a0,
                  color: colors.success.a30,
                  borderRadius: 2
                }}
              >
                Manage Event
              </Button>
            </>
          ) : (
            <Button
              variant="contained"
              color={isGoing ? 'primary' : 'info'}
              onClick={() => { }}
              disabled={isCancelled || loading}
            >
              {isGoing ? 'Cancel Attendance' : 'Join Activity'}
            </Button>
          )}
        </Box>
      </Box>
    </Card >
  )
}

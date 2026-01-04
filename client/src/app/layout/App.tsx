import { Box, Container, CssBaseline, Typography } from '@mui/material';
import { useState } from 'react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { useActivities } from '../../lib/hooks/useActivities';

function App() {

  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const { activities, isLoading } = useActivities()


  const handleSelectedActivity = (id: string) => {
    setSelectedActivity(activities!.find(x => x.id === id));
  }


  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined);
  }




  return (
    <Box sx={{ bgcolor: '#dfdfdfff', minHeight: '100vh' }}>
      <CssBaseline />
      <NavBar />
      <Container maxWidth='xl' sx={{ mt: 3 }}>
        {isLoading ? (
          <Typography>Loading...</Typography>
        ) : (!activities || activities.length === 0) ? (
          <Typography>There is no Activity</Typography>
        ) : (
          <ActivityDashboard
            activities={activities}
            selectActivity={handleSelectedActivity}
            cancelSelectActivity={handleCancelSelectActivity}
            selectedActivity={selectedActivity}
            
          />
        )}

      </Container>

    </Box >

  )
}

export default App

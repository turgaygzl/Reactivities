import { Box, Container, CssBaseline } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities')
      .then(response => setActivities(response.data))

    return () => { }
  }, [])


  const handleSelectedActivity = (id: string) => {
    setSelectedActivity(activities.find(x => x.id === id));
  }


  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined);
  }
  const handleSubmitForm = (activity : Activity) => {
        if (activity.id) {
          setActivities(prev => prev.map(x => x.id === activity.id ? activity : x));
          if (selectedActivity && selectedActivity.id === activity.id) {
            setSelectedActivity(activity);
          }
        } else {
          setActivities(prev => [...prev, {...activity, id: prev.length.toString()}]);
        }
    }

  const handleDelete = (id: string) => {
    setActivities(activities.filter(x => x.id !== id));
    if (selectedActivity && selectedActivity.id === id) {
      setSelectedActivity(undefined);
    }
  }

  return (
    <Box sx={{ bgcolor: '#dfdfdfff' }}>
      <CssBaseline />
      <NavBar onCreate={handleSubmitForm} />
      <Container maxWidth='xl' sx={{ mt: 3 }}>
        <ActivityDashboard
          activities={activities}
          selectActivity={handleSelectedActivity}
          cancelSelectActivity={handleCancelSelectActivity}
          selectedActivity={selectedActivity}
          onSubmit={handleSubmitForm}
          deleteActivity ={handleDelete}
        />

      </Container>

    </Box >

  )
}

export default App

import { observer } from "mobx-react-lite";
import { useStore } from "../../lib/hooks/useStore"
import { Box, Button, ButtonGroup, List, ListItemText, Typography } from "@mui/material";


const Counter = observer(function Counter() {
    const { counterStore } = useStore();
    return (
        <Box sx={{ color: 'white', display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ width: '60%' }}>
                <Typography variant="h4" gutterBottom>{counterStore.title}</Typography>
                <Typography variant="h6" gutterBottom>The count is : {counterStore.count}</Typography>
                <ButtonGroup sx={{ mt: 3, gap: 5 }} >
                    <Button onClick={() => { counterStore.decrement(5) }} variant="contained" color="primary" sx={{ p: 3 }}>-5</Button>
                    <Button onClick={() => { counterStore.decrement() }} variant="contained" color="error" sx={{ p: 3 }}>-</Button>
                    <Button onClick={() => { counterStore.increment() }} variant="contained" color="success" sx={{ p: 3 }}>+</Button>
                    <Button onClick={() => { counterStore.increment(5) }} variant="contained" color="primary" sx={{ p: 3 }}>+5</Button>
                </ButtonGroup>
            </Box>
            <Box sx={{ width: '40%', color: 'white' }} >
                <Typography variant="h5">Counter events ({counterStore.eventCount})</Typography>
                <List>
                    {counterStore.events.map((event, index) => (
                        <ListItemText key={index}> {event}</ListItemText>
                    ))}
                </List>
            </Box>

        </Box >


    )
});

export default Counter;
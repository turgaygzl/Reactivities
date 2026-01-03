/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import type { FormEvent } from "react";


type Props = {
  onClose?: () => void;
  onSubmit?: (activity: Activity) => void;
}

export default function ActivityForm({ onClose, onSubmit }: Props) {
  
    const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const data: {[key: string]: string} = {}

        formData.forEach((value,key) => {
            data[key] = String(value);
        });

        // send a Partial<Activity> (only fields provided by the form)
        onSubmit && onSubmit(data as unknown as Activity);
        onClose && onClose();
    }
    
  
  
    return (

        <Paper sx={{ borderRadius: 3, padding: 1, borderColor:'red', boxShadow:'none' }}>
            <Typography variant="h5" gutterBottom color="primary">
                Create Activity
            </Typography>
            <Box component='form' onSubmit={handleSubmit} display='flex' flexDirection='column' gap={3}>
                <TextField name="title" label='Title' />
                <TextField name='description' label='Description' multiline rows={3} />
                <TextField name='category' label='Category' />
                <TextField name='date' label='Date' type='date' InputLabelProps={{ shrink: true }} />
                <TextField name='city' label='City' />
                <TextField name='venue' label='Venue' />
                <Box display='flex' justifyContent='end' gap={3}>
                    <Button onClick={() => onClose && onClose()} color='inherit'>Cancel</Button>
                    <Button type='submit' color='success' variant='contained'>Submit</Button>
                </Box>


            </Box>
        </Paper>


    )
}


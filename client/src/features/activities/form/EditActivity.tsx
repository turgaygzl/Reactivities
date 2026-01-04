/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Box, Button, Paper, TextField } from "@mui/material";
import type { FormEvent } from "react";
import { useActivities } from "../../../lib/hooks/useActivities";

type Props = {
    activity?: Activity;
    onClose?: () => void;
    onSubmit?: (activity: Activity) => void;
}

export default function EditActivity({ activity, onClose, onSubmit }: Props) {


    const { updateActivity } = useActivities()

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const data: { [key: string]: string } = {}

        formData.forEach((value, key) => {
            data[key] = String(value);
        });

        if (activity) {
            data.id = activity.id;
            await updateActivity.mutateAsync(data as unknown as Activity)
            // notify parent with the updated activity so selectedActivity can be refreshed
            onSubmit && onSubmit(data as unknown as Activity);
            onClose && onClose();
        }
        // send a Partial<Activity> (only fields provided by the form)
    }


    return (

        <Paper sx={{ borderRadius: 3, borderColor: 'red', boxShadow: 'none' }}>

            <Box component='form' onSubmit={handleSubmit} display='flex' flexDirection='column' gap={1.4}>
                <TextField name="title" size='small' label='Title' defaultValue={activity?.title} />
                <input type="hidden" name="id" value={activity?.id ?? ''} />
                <TextField name="description" size='small' label='Description' multiline rows={3} defaultValue={activity?.description} />
                <TextField name="category" size='small' label='Category' defaultValue={activity?.category} />
                <TextField name="date" size='small' label='Date' type='date' InputLabelProps={{ shrink: true }}
                    defaultValue={activity?.date
                        ? new Date(activity.date).toISOString().split('T')[0]
                        : new Date().toISOString().split('T')[0]
                    } />
                <TextField name="city" size='small' label='City' defaultValue={activity?.city} />
                <TextField name="venue" size='small' label='Venue' defaultValue={activity?.venue} />
                <Box display='flex' justifyContent='end' gap={2}>
                    <Button onClick={() => onClose && onClose()} color='inherit'>Cancel</Button>
                    <Button disabled={updateActivity.isPending} type="submit" color='success' variant='contained'>Submit</Button>
                </Box>


            </Box>
        </Paper>


    )
}


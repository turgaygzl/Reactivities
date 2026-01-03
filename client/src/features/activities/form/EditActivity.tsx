/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Box, Button, Paper, TextField } from "@mui/material";
import type { FormEvent } from "react";

type Props = {
    activity?: Activity;
    onClose?: () => void;
    onSubmit?: (activity: Activity) => void;
}

export default function EditActivity({ activity, onClose, onSubmit }: Props) {


    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const data: { [key: string]: string } = {}

        formData.forEach((value, key) => {
            data[key] = String(value);
        });

        onSubmit && onSubmit(data as unknown as Activity);
        onClose && onClose();
    }


    return (

        <Paper sx={{ borderRadius: 3, borderColor: 'red', boxShadow: 'none' }}>

            <Box component='form' onSubmit={handleSubmit} display='flex' flexDirection='column' gap={1.4}>
                <TextField name="title" size='small' label='Title' defaultValue={activity?.title} />
                <input type="hidden" name="id" value={activity?.id ?? ''} />
                <TextField name="description" size='small' label='Description' multiline rows={3} defaultValue={activity?.description} />
                <TextField name="category" size='small' label='Category' defaultValue={activity?.category} />
                <TextField name="date" size='small' label='Date' type='date' InputLabelProps={{ shrink: true }} defaultValue={activity?.date} />
                <TextField name="city" size='small' label='City' defaultValue={activity?.city} />
                <TextField name="venue" size='small' label='Venue' defaultValue={activity?.venue} />
                <Box display='flex' justifyContent='end' gap={2}>
                    <Button onClick={() => onClose && onClose()} color='inherit'>Cancel</Button>
                    <Button type="submit" color='success' variant='contained'>Submit</Button>
                </Box>


            </Box>
        </Paper>


    )
}


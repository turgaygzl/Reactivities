import { FilterList, Event } from "@mui/icons-material";
import { Box, ListItemText, MenuItem, MenuList, Paper, Typography } from "@mui/material";
import { colors } from "../../../lib/colors";
import 'react-calendar/dist/Calendar.css';
import Calendar from "react-calendar";

export default function ActivityFilters() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Paper sx={{ color: colors.base.light, p: 3, borderRadius: 4, boxShadow: 'none', border: `2px solid ${colors.surface.a50}`, background: 'none' }}>
                <Box sx={{ width: '100%' }}>
                    <Typography variant="h6" sx={{color:'#99ca53', display: 'flex', alignItems: 'center', mb: 1 }}>
                        <FilterList sx={{ mr: 1 }} />
                        Filters
                    </Typography>
                    <MenuList>
                        <MenuItem>
                            <ListItemText primary='All events' />
                        </MenuItem>
                        <MenuItem>
                            <ListItemText primary="I'm going" />
                        </MenuItem>
                        <MenuItem>
                            <ListItemText primary="I'm hosting" />
                        </MenuItem>
                    </MenuList>
                </Box>
            </Paper>
            <Box component={Paper} sx={{ color: colors.base.dark, width: '100%', p: 3, borderRadius: 4, backgroundColor: colors.border.light, boxShadow: 'none' }}>
                <Typography variant="h6" sx={{color:'#5e7e31', display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Event sx={{ mr: 1 }} />
                    Select date
                </Typography>
                <Calendar />
            </Box>
        </Box>
    )
}
import { FilterList, Event } from "@mui/icons-material";
import { Box, ListItemText, MenuItem, MenuList, Paper, Typography } from "@mui/material";
import { colors } from "../../../lib/colors";
import 'react-calendar/dist/Calendar.css';
import Calendar from "react-calendar";
import UpcomingActivityCountdown from "./UpcomingActivityCountdown";

export default function ActivityFilters() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {/* Upcoming Activity Countdown */}
            <UpcomingActivityCountdown />

            <Paper sx={{
                color: colors.base.light,
                p: 2,
                borderRadius: 3,
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.25)',
                border: `1px solid ${colors.primary.a20}`,
                background: `linear-gradient(145deg, ${colors.surface.a10} 0%, ${colors.surface.a0} 100%)`
            }}>
                <Box sx={{ width: '100%' }}>
                    <Typography variant="body1" sx={{ color: '#99ca53', display: 'flex', alignItems: 'center', mb: 0.5, fontWeight: 600 }}>
                        <FilterList sx={{ mr: 0.5, fontSize: 20 }} />
                        Filters
                    </Typography>
                    <MenuList dense sx={{ py: 0 }}>
                        <MenuItem sx={{ py: 0.5, minHeight: 'auto' }}>
                            <ListItemText primary='All events' primaryTypographyProps={{ variant: 'body2' }} />
                        </MenuItem>
                        <MenuItem sx={{ py: 0.5, minHeight: 'auto' }}>
                            <ListItemText primary="I'm going" primaryTypographyProps={{ variant: 'body2' }} />
                        </MenuItem>
                        <MenuItem sx={{ py: 0.5, minHeight: 'auto' }}>
                            <ListItemText primary="I'm hosting" primaryTypographyProps={{ variant: 'body2' }} />
                        </MenuItem>
                    </MenuList>
                </Box>
            </Paper>
            <Box component={Paper} sx={{
                color: colors.base.dark,
                width: '100%',
                p: 2,
                borderRadius: 3,
                backgroundColor: colors.border.light,
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
                border: `1px solid ${colors.primary.a30}`
            }}>
                <Typography variant="body1" sx={{ color: '#5e7e31', display: 'flex', alignItems: 'center', mb: 0.5, fontWeight: 600 }}>
                    <Event sx={{ mr: 0.5, fontSize: 20 }} />
                    Select date
                </Typography>
                <Calendar className="compact-calendar" />
            </Box>
        </Box>
    )
}
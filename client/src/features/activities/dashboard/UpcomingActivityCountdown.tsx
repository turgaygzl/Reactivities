import { Timer, ArrowForward } from "@mui/icons-material";
import { Box, Paper, Typography, Button, Skeleton } from "@mui/material";
import { colors } from "../../../lib/colors";
import { useActivities } from "../../../lib/hooks/useActivities";
import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router";

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export default function UpcomingActivityCountdown() {
    const { activities, isLoading } = useActivities('');
    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

    // Find the nearest upcoming activity
    const upcomingActivity = useMemo(() => {
        if (!activities || activities.length === 0) return null;

        const now = new Date();
        const futureActivities = activities
            .filter(activity => new Date(activity.date) > now)
            .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

        return futureActivities.length > 0 ? futureActivities[0] : null;
    }, [activities]);

    // Calculate time remaining
    useEffect(() => {
        if (!upcomingActivity) {
            setTimeLeft(null);
            return;
        }

        const calculateTimeLeft = () => {
            const now = new Date();
            const activityDate = new Date(upcomingActivity.date);
            const difference = activityDate.getTime() - now.getTime();

            if (difference <= 0) {
                setTimeLeft(null);
                return;
            }

            setTimeLeft({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            });
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [upcomingActivity]);

    if (isLoading) {
        return (
            <Paper sx={{
                p: 2,
                borderRadius: 3,
                background: `linear-gradient(135deg, ${colors.primary.a0} 0%, ${colors.primary.a20} 100%)`,
                boxShadow: '0 4px 20px rgba(160, 232, 57, 0.3)',
            }}>
                <Skeleton variant="text" width="60%" height={24} />
                <Skeleton variant="rectangular" width="100%" height={36} sx={{ borderRadius: 2, mt: 1 }} />
            </Paper>
        );
    }

    if (!upcomingActivity || !timeLeft) {
        return (
            <Paper sx={{
                p: 2,
                borderRadius: 3,
                background: `linear-gradient(145deg, ${colors.surface.a20} 0%, ${colors.surface.a10} 100%)`,
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                border: `1px solid ${colors.surface.a40}`,
                textAlign: 'center'
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                    <Timer sx={{ fontSize: 24, color: colors.text.tertiary }} />
                    <Typography variant="body2" sx={{ color: colors.text.secondary }}>
                        No upcoming activities
                    </Typography>
                </Box>
            </Paper>
        );
    }

    const TimeBlock = ({ value, label }: { value: number; label: string }) => (
        <Box sx={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 0.3
        }}>
            <Typography sx={{
                fontSize: '1rem',
                fontWeight: 700,
                color: colors.base.dark,
                lineHeight: 1
            }}>
                {value.toString().padStart(2, '0')}
            </Typography>
            <Typography sx={{
                fontSize: '0.5rem',
                fontWeight: 600,
                color: colors.surface.a40,
                textTransform: 'uppercase'
            }}>
                {label}
            </Typography>
        </Box>
    );

    const TimeSeparator = () => (
        <Typography sx={{
            fontSize: '0.9rem',
            fontWeight: 700,
            color: colors.surface.a30,
            mx: 0.2
        }}>
            :
        </Typography>
    );

    return (
        <Paper sx={{
            p: 1.5,
            borderRadius: 2,
            background: `linear-gradient(135deg, ${colors.primary.a0} 0%, ${colors.primary.a30} 100%)`,
            boxShadow: '0 3px 15px rgba(160, 232, 57, 0.25)',
            border: `1px solid ${colors.primary.a40}`,
            padding: 2
        }}>
            {/* Header Row */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.75 }}>
                <Timer sx={{ color: colors.base.dark, mr: 0.5, fontSize: 16 }} />
                <Typography variant="caption" sx={{
                    color: colors.base.dark,
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: 0.5,
                    fontSize: '1rem'
                }}>
                    Upcoming Event
                </Typography>
            </Box>

            {/* Content Row: Title + Timer + Button */}
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                flexWrap: 'nowrap'
            }}>
                {/* Activity Title */}
                <Typography variant="body2" sx={{
                    color: colors.base.dark,
                    fontWeight: 700,
                    flex: 1,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    minWidth: 0
                }}>
                    {upcomingActivity.title}
                </Typography>

                {/* Countdown Timer */}
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    background: 'rgba(255,255,255,0.9)',
                    borderRadius: 1.5,
                    py: 0.5,
                    px: 1,
                    flexShrink: 0,
                    gap: 0.5
                }}>
                    <TimeBlock value={timeLeft.days} label="d" />
                    <TimeSeparator />
                    <TimeBlock value={timeLeft.hours} label="h" />
                    <TimeSeparator />
                    <TimeBlock value={timeLeft.minutes} label="m" />
                    <TimeSeparator />
                    <TimeBlock value={timeLeft.seconds} label="s" />
                </Box>

                {/* Go Button */}
                <Button
                    component={Link}
                    to={`/activities/${upcomingActivity.id}`}
                    size="small"
                    variant="contained"
                    sx={{
                        background: colors.base.dark,
                        color: colors.primary.a10,
                        fontWeight: 600,
                        borderRadius: 1.5,
                        py: 0.5,
                        px: 1.5,
                        fontSize: '0.75rem',
                        textTransform: 'none',
                        minWidth: 'auto',
                        flexShrink: 0,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                        '&:hover': {
                            background: colors.surface.a10
                        }
                    }}
                >View Event
                    <ArrowForward sx={{ fontSize: 14 }} />
                </Button>
            </Box>
        </Paper>
    );
}

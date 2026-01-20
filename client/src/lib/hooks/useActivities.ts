import { useQuery } from "@tanstack/react-query";
import agent from "../api/agent";

export const useActivities = (id: string) => {
    const { data: activities, isLoading } = useQuery({
        queryKey: ['activities'],
        queryFn: async () => {
            const response = await agent.get<Activity[]>('activities');
            return response.data;
        },
        staleTime: 1000 * 60 * 5
    });

    const { data: activity, isLoading: isLoadingActivity } = useQuery({
        queryKey: ['activities', id],
        queryFn: async () => {
            const response = await agent.get<Activity>(`activities/${id}`);
            return response.data;
        },
        enabled: !!id
    });



    return {
        activities,
        activity,
        isLoadingActivity,
        isLoading
    }

}
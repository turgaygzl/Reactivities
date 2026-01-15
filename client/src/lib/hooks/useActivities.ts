import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import agent from "../api/agent";
import { useNavigate } from "react-router";

export const useActivities = (id : string) => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { data: activities, isLoading } = useQuery({
        queryKey: ['activities'],
        queryFn: async () => {
            const response = await agent.get<Activity[]>('activities');
            return response.data;
        }
    });

   const { data: activity, isLoading : isLoadingActivity } = useQuery({
        queryKey: ['activities', id],
        queryFn: async () => {
            const response = await agent.get<Activity>(`activities/${id}`);
            return response.data;
        },
        enabled:!!id
    });

    const updateActivity = useMutation({
        mutationFn: async (activity: Activity) => {

            await agent.put('/activities', activity)
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['activities']
            })
        }
    })

    const createActivity = useMutation({
        mutationFn: async (activity: Activity) => {
            const response = await agent.post('/activities', activity);
            return response.data;
            
        },
        onSuccess: async (id) => {
            await queryClient.invalidateQueries({
                queryKey: ['activities']
            })
             navigate(`/activities/${id}`)
        }
    })
    const deleteActivity = useMutation({
        mutationFn: async (id: string) => {

            await agent.delete(`/activities/${id}`)
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['activities']
            })
        }
    })

    return {
        activities,
        activity,
        isLoadingActivity,
        isLoading,
        updateActivity,
        createActivity,
        deleteActivity
    }

}
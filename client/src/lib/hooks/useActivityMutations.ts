import { useMutation, useQueryClient } from "@tanstack/react-query";
import agent from "../api/agent";
import { useNavigate } from "react-router";

export const useActivityMutations = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

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
        updateActivity,
        createActivity,
        deleteActivity
    }
}

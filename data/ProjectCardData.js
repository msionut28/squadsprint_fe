import { fetchData } from "@/lib/fetcher";

export const fetchProjectData = async () => {
    const backendURL = process.env.BACKEND_URL
    try{
        const groupsManaged = await fetchData(`${backendURL}/groups/`)
        const tasks = await fetchData(`${backendURL}/tasks/`)
        const employees = await fetchData(`${backendURL}/employees/`)
        return{ groupsManaged, tasks, employees}
    } catch (error){
        throw(error)
    }
}
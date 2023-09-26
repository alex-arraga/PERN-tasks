export const createTaskRequest = (task) => {
    try {
        const response = fetch('http://localhost:3000/api/tasks', {
            method: 'POST',
            body: JSON.stringify(task),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error server response')
                } return response.json()
            })
            .then(data => {
                return data
            })
            .catch(error => {
                console.log(error)
            })

        return response

    } catch (error) {
        throw new Error(error)
    }
}

export const getAllTasksRequest = async () => {
    const response = await fetch('http://localhost:3000/api/tasks', {
        method: 'GET',
        credentials: 'include'
    })

    return response.json()
}
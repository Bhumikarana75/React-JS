export const addTask = (data) => {
    return {
        type : "Add_Data",
        payload : data
    }
}

export const deleteTask = (id) => {
    return {
        type : "Delete_Data",
        payload : id
    }
}
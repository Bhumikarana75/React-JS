const initialState = {
    users : localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case "Add_Data" :
            let old = [...state.users, action.payload];
            localStorage.setItem("users", JSON.stringify(old));
            return{
                ...state,
                users : old
            }

        case "Delete_Data" :
            let deleteNote = action.payload;
            let d = state.users.filter((val) => val.id !== deleteNote);
            localStorage.setItem("users", JSON.stringify(d))
            alert("Note deleted successfully..!");
            return{
                ...state,
                users : d
            }

        default:
            return state;
    }
}

export default taskReducer;
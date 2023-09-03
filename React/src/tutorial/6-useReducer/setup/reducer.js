const reducer = (state, action) => {//main reason to use reducr is because all the function,data comes from one place.Insted of creating multiple useStates
    if (action.type === "TESTING") {
        const newName = [...state.people, action.payload];

        return { ...state, people: newName, isModal: true, modalContent: "Added" };
    }
    if (action.type === "NO_VAL") {
        return { ...state, isModal: true, modalContent: "Please enter something new" };
    }
    if (action.type === "CLOSE_MODAL") {
        return { ...state, isModal: false }
    }
    if (action.type === "DLT") {
        const newPpl = state.people.filter((p) => p.id !== action.payload);
        return { ...state, people: newPpl, isModal: true, modalContent: "Removed" };
    }
    if (action.type === "RESET") {
        return { people: [], isModal: true, modalContent: "Reset" };
    }
    throw new Error("i threw this error");

}
export default reducer;
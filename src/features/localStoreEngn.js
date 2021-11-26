export const loadLocalState = stateName => {
    try {
        const serializedState = window.localStorage.getItem(stateName);
        return (serializedState)? JSON.parse(serializedState) : undefined;
    } catch (err) {
        return undefined;
    }
};

export const saveLocalState = (state, stateName) => {
    try {
        const serializedState = JSON.stringify(state);
        window.localStorage.setItem(stateName, serializedState);
    } catch (err) {
        throw new Error("Can't save changes in browser storage");
    }
};
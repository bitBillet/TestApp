export function itemsIsLoad(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.payload;

        default:
            return state;
    }
}

export function items(state = [], action) {
    switch (action.type) {
        case 'FETCH_DATA_SUCCESS':
            return action.payload;
        default:
            return state;
    }
}

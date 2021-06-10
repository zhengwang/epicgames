export const ADD_ITEM = "ADD_ITEM";
export const DEL_ITEM = "DEL_ITEM";

export const rootReducer = (state = {all_items: [
    {column_name: "COLUMN 1", item_name: "ITEM1"},
    {column_name: "COLUMN 2", item_name: "ITEM2"},
    {column_name: "COLUMN 1", item_name: "ITEM3"},
    {column_name: "COLUMN 1", item_name: "ITEM4"}
]}, action) => {
    let temp = state.all_items.slice();
    switch (action.type) {
        case "ADD_ITEM":
            const idx = temp.length + 1;
            const item = {
                idx: idx,
                column_name: action.column_name, 
                item_name: action.item_name};            
            temp.push(item);
            return Object.assign({}, state, {all_items: temp});            
        case "DEL_ITEM":
            const _idx = temp.indexOf(action.item);
            // console.log(_idx);
            if (_idx >= 0) {
                temp.splice(_idx, 1);
            }            
            return Object.assign({}, state, {all_items: temp});            
        default:
            return state;
    }
}
export const ADD_ITEM = "ADD_ITEM";
export const DEL_ITEM = "DEL_ITEM";
export const FILTER_ITEM = "FILTER_ITEM";

export const rootReducer = (state = {all_items: [
    {column_name: "COLUMN 1", item_name: "ITEM1", hidden: false},
    {column_name: "COLUMN 2", item_name: "ITEM2", hidden: false},
    {column_name: "COLUMN 1", item_name: "ITEM3", hidden: false},
    {column_name: "COLUMN 1", item_name: "ITEM4", hidden: false},
    {column_name: "COLUMN 1", item_name: "ITEM FIVE", hidden: false}
]}, action) => {
    let temp = state.all_items.slice();
    
    switch (action.type) {
        case ADD_ITEM:
            const idx = temp.length + 1;
            const item = {
                idx: idx,
                column_name: action.column_name, 
                item_name: action.item_name,
                hidden: false};            
            temp.push(item);
            return Object.assign({}, state, {all_items: temp});            
        case DEL_ITEM:
            const _idx = temp.indexOf(action.item);            
            if (_idx >= 0) {
                temp.splice(_idx, 1);
            }            
            return Object.assign({}, state, {all_items: temp});   
        case FILTER_ITEM:
            const {item_name} = action;
                    
            temp = temp.map(item => {
                const reg = new RegExp(`${item_name}`,'gi');                
                const matched = reg.test(item.item_name);
                item.hidden = !matched;
                return item;
            });  
            
            return Object.assign({}, state, {all_items: temp});
        default:
            return state;
    }
}
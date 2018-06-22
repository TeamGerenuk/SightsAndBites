export default function(state = null, action) {
    switch(action.type) {
        case 'PLACES':
           
            return action.payload;
    }
    return state
}
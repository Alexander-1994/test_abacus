const InitialState = {
    skin: "one",
    topLength: ['item'],
    bottomLength: ['item', 'item', 'item', 'item']
};

const bone = (state = InitialState, action) => {
    switch (action.type) {
        case 'CHANGE_BONE_STYLE':
            return {
                ...state,
                skin: action.payload
            }
        case 'CHANGE_BONE_TOP_LENGTH':
            return {
               ...state,
               topLength: action.payload
            }
        case 'CHANGE_BONE_BOTTOM_LENGTH':
            return {
                ...state,
                bottomLength: action.payload
            }
        default: {
            return state;
        }
    }
}

export default bone;
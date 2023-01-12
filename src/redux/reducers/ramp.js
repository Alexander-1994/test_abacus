const InitialState = {
    skin: "one",
    rampLength: ['item', 'item', 'item']
};

const ramp = (state = InitialState, action) => {
    switch (action.type) {
        case 'CHANGE_FRAME_STYLE':
            return {
                ...state,
                skin: action.payload
            }
        case 'CHANGE_FRAME_LENGTH':
            return {
               ...state,
               rampLength: action.payload
            }
        default: {
            return state;
        }
    }
}

export default ramp;
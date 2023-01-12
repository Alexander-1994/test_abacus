const stateGenerator = num => {
    let arr = ['item'];

    for (let i = 1; i < num; i++) {
        arr.push('item');
    }
    
    return arr;
}

export const styleRamp = str => ({type: 'CHANGE_FRAME_STYLE', payload: str});
export const lengthFrame = num => ({type: 'CHANGE_FRAME_LENGTH', payload: stateGenerator(num)});
export const styleBone = str => ({type: 'CHANGE_BONE_STYLE', payload: str});
export const lengthTopBone = num => ({type: 'CHANGE_BONE_TOP_LENGTH', payload: stateGenerator(num)});
export const lengthBottomBone = num => ({type: 'CHANGE_BONE_BOTTOM_LENGTH', payload: stateGenerator(num)});

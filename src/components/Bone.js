import { useSelector } from 'react-redux';

import bone_1 from '../sources/bone_1.png';
import bone_2 from '../sources/bone_2.png';

const Bone = () => {
    const {skin} = useSelector(state => state.bone);

    return <img 
        src={skin === 'one' ? bone_1 : bone_2} 
        alt="bone" />
}

export default Bone;
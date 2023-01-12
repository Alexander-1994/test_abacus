import { useSelector } from 'react-redux';
import Bone from './Bone';
import kernel_1 from '../sources/kernel_1.png';
import kernel_2 from '../sources/kernel_2.png';
import '../styles/kernel.css';

const Kernel = () => {
    const {skin} = useSelector(state => state.ramp),
          {topLength} = useSelector(state => state.bone),
          {bottomLength} = useSelector(state => state.bone);

    return (
        <div className="kernel" 
            style={
                skin === 'one' ? 
                    {backgroundImage: `url(${kernel_1})`} : 
                    {backgroundImage: `url(${kernel_2})`}
            }>
            <div className="kernel__top">
                {
                    topLength.map((elem, i) => {
                        return <Bone key={i} />
                    })
                }
            </div>
            <div className="kernel__bottom">
                {
                    bottomLength.map((elem, i) => {
                        return <Bone key={i} />
                    })
                }
            </div>
        </div>
    )
}

export default Kernel;
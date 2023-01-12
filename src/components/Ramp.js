import { useSelector, useDispatch } from "react-redux";
import { 
    styleRamp, 
    lengthFrame,
    styleBone,
    lengthTopBone,
    lengthBottomBone
} from "../redux/actions";
import Kernel from "./Kernel";
import '../styles/ramp.css';

const Ramp = () => {
    const {rampLength} = useSelector(state => state.ramp),
          dispatch = useDispatch();

    return (
        <div className="ramp">
            <div className="ramp__wrapper">
                {
                    rampLength.map((elem, i) => {
                        return <Kernel key={i} />
                    })
                }
            </div>
            <div className="ramp__setting">
                <h1>Настройки</h1>
                <div className="ramp__setting-item">
                    Стиль абакуса:  &nbsp;
                    <button onClick={() => dispatch(styleRamp('one'))}>тёмный</button>
                    <button onClick={() => dispatch(styleRamp('two'))}>светлый</button>
                </div>
                <div className="ramp__setting-item">
                    Длина абакуса:  &nbsp;
                    <button onClick={() => dispatch(lengthFrame(3))}>короткий</button>
                    <button onClick={() => dispatch(lengthFrame(6))}>средний</button>
                    <button onClick={() => dispatch(lengthFrame(9))}>длинный</button>
                </div>
                <div className="ramp__setting-item">
                    Стиль косточки:  &nbsp;
                    <button onClick={() => dispatch(styleBone('one'))}>тёмный</button>
                    <button onClick={() => dispatch(styleBone('two'))}>светлый</button>
                </div>
                <div className="ramp__setting-item">
                    Колличество косточек: 
                    <br/>
                    верхний ряд: &nbsp;
                    <button onClick={() => dispatch(lengthTopBone(1))}>1</button>
                    <button onClick={() => dispatch(lengthTopBone(2))}>2</button>
                    <br/>
                    нижний ряд: &nbsp;
                    <button onClick={() => dispatch(lengthBottomBone(1))}>1</button>
                    <button onClick={() => dispatch(lengthBottomBone(2))}>2</button>
                    <button onClick={() => dispatch(lengthBottomBone(3))}>3</button>
                    <button onClick={() => dispatch(lengthBottomBone(4))}>4</button>
                    <button onClick={() => dispatch(lengthBottomBone(5))}>5</button>
                </div>
            </div>
        </div>
    )
}

export default Ramp;
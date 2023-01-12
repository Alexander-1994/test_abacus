import { useEffect } from 'react';
import Ramp from './components/Ramp';
import './App.css';

function App() {
	useEffect(() => {
		const message = setTimeout(() => {
			alert('Приветствую! Данное тестовое выполнил на стеке js/react/redux. TypeScript только начал изучать, по-этому не использую его до полного освоения. Жду от вас обратную связь. Телеграм: @kisliy_doma. Спасибо')
		}, 5000);

		return () => clearTimeout(message);
	}, [])

  	return (
		<div className="App">
			<Ramp />
		</div>
  	);
}

export default App;
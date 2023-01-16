import './App.css';
import BoardAddArea from './Components/BoardAddArea/BoardAddArea';
import ButtonCreateBoard from './Components/Button/Button';

const App = () => {
  return (
    <div className='region'>
      <ButtonCreateBoard />
      <BoardAddArea />
    </div>
  );
}

export default App;

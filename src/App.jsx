import './App.css'
import Counter from './Counter';
import Team from './Team';
// import Users from './users';
import Users from './users';
import Friends from './friends';

function App() {

   function handleClick(){
    alert('button clicked');
   }

  const handleClick2 = () =>{
    alert('button 2 clicked');
  }

  const addToFive =(num) => {
    console.log('HI this is Dhruba Biswas');
    alert(num + 5);
  }

  return (
    <>
      <h3>React core concept part 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick} >Click me</button>
      <button onClick={handleClick2} >Click two</button>
      {/* <button onClick={addToFive(4)} >Four</button> */}
      <button onClick={() => addToFive(4)} >Four</button>
    </>
  )
}

export default App

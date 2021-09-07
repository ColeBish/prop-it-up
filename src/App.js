
import './App.css';
import Person from './Components/Person';

function App() {
  return (
    <div className="App">
      <Person name={"Doe, Jane"} age={"45"} haircolor={"Black"} />
      <Person name={"Smith, John"} age={"88"} haircolor={"Brown"} />
      <Person name={"Fillmore, Millard"} age={"50"} haircolor={"Grey"} />
      <Person name={"Smith, Maria"} age={"62"} haircolor={"Blonde"} />
    </div>
  );
}

export default App;

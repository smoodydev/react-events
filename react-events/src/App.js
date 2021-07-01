import logo from './logo.svg';
import './App.css';
import EventFunctional from './components/EventFunctional';
import EventClass from './components/EventClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import ConditionalRenderClass from './components/ConditionalRenderClass';
import RenderingFruit from './components/RenderingFruit';


function App() {
  return (
    <div className="App">
      <div id="basicEvents">
        <EventFunctional />
        <EventClass />
      </div>
      <div>
        <ConditionalRenderingFunctional connected={true} />
        <ConditionalRenderClass />
      </div>
      <div>
        <RenderingFruit />
      </div>
    </div>
  );
}

export default App;

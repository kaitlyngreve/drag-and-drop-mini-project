import './App.css';
import DragDrop from './DragDrop';
import Header from './Header';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <div className='snow' aria-hidden="true">
          <div class="snowflake">
            ❅
          </div>
          <div class="snowflake">
            ❅
          </div>
          <div class="snowflake">
            ❆
          </div>
          <div class="snowflake">
            ❄
          </div>
          <div class="snowflake">
            ❅
          </div>
          <div class="snowflake">
            ❆
          </div>
          <div class="snowflake">
            ❄
          </div>
          <div class="snowflake">
            ❅
          </div>
          <div class="snowflake">
            ❆
          </div>
          <div class="snowflake">
            ❄
          </div>        </div>
        <Header />
        <DragDrop />
      </div>
    </DndProvider>
  );
}

export default App;

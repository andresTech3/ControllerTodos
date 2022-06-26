import '../style/App.css';
import ProviderContext from "../context/todoContext";
import UiApp from "./UiApp";


function App() {
  return (
    <ProviderContext.TodoProvider>
      <UiApp/>
    </ProviderContext.TodoProvider>
  )
}
  
export default App;

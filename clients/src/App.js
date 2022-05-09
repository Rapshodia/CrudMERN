import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NuevoProducto from './components/NuevoProducto';
import TodosProductos from './components/TodosProductos';
import Producto from "./components/Producto"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() =><TodosProductos/>} />
          <Route path="/nuevo" render={() => <NuevoProducto/>} />
          <Route path="/producto/:id" render={(routeProps)=> <Producto {...routeProps}/>}/>
        </Switch>
      </BrowserRouter>
     
    </div>
  );
}

export default App;

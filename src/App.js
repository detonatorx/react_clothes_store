import './App.css';
import Homepage from './pages/homepage/homepage.component.jsx';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage}/>
      </Switch>
    </div>
  );
}

export default App;

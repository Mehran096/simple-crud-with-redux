 
import Contacts from './component/Contacts';
import Navbar from './component/Navbar';
import './styles/App.scss';
import {Provider} from "react-redux"
import store from './redux/store';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddContact from './component/AddContact';
import EditContact from './component/EditContact';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="py-3">
            <Switch> 
              <Route path="/" exact component={Contacts} />
              <Route path="/contacts/add" exact component={AddContact} />
              <Route path="/edit/:id" exact component={EditContact} />
            </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

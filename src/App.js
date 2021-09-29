import './App.css';
import { useEffect } from "react"
import UserTable from "./Components/app/UserTable/UserTable"
import { useDispatch } from 'react-redux';
import * as userActions from "./redux/actions/user"
import { defaultJSON } from './constants';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initialData(defaultJSON))
  }, [])



  return (
    <div className="App">
      <h1>Test App</h1>
      <div>
        <UserTable />
      </div>
    </div>
  );
}

export default App;

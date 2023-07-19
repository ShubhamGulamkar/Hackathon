import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Form from "./components/Form";

function App() {
  // const [isAdmin, setIsAdmin] = useState(false);
  // const AdminHandler = () => {
  //   setIsAdmin(true);
  // };
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/signup" Component={Register} />
          <Route path="/form" Component={Form} />
          {/*<Route path="/profile" Component={Profile} />
          <Route path="/data" Component={CheckProfile} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

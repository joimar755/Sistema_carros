import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./componentes/Login";
import Home from "./componentes/Home";
import { Auth_Provider } from "./componentes/context/Auth_Provider";
import { PublicLayout } from "./componentes/public/PublicLayout";
import { PrivateLayout } from "./componentes/private/PrivateLayout";
import { Routing } from "./componentes/Routing";


const App = () => {
  return (
    <div>
      <Routing />
    </div>
  );
};
export default App;
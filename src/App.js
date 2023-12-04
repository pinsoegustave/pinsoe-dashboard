import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Components/shared/Layout";
import Dashboard from "./Components/Dashboard";
import Products from "./Components/Products";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/product" element={<Products />} />
        </Route>
        <Route>
          <Route path="/login" element={<div>this is a login page</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

import { RouterProvider } from "react-router-dom";
import router from "./Routers/Routers";
import './App.css';

function App() {
  return (
    <div className="max-w-[100%] mx-auto">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;

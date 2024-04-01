import { RouterProvider } from "react-router-dom";
import RtlHoc from "./utils/RtlHoc";
import { Router } from "./routes/Router";

const Main = () => {
  return (
    <RouterProvider router={Router} />
  );
};

const App = () => {
  return (
    <div className="App">
      <RtlHoc
        supportedLanguages={["ar"]}
        app={<Main />}
      />
    </div>
  );
};

export default App;
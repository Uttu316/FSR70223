import React from "react";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import ROUTES from "./routes";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={ROUTES} />
    </Provider>
  );
}

// before V6.13
{
  /* <BrowserRouter>
<Routes>
  {ROUTES.map((route) => (
    <Route {...route} key={route.path} />
  ))}
</Routes>
</BrowserRouter> */
}

export default App;

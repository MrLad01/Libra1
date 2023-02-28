import { createBrowserRouter,
         RouterProvider,
         createRoutesFromElements, 
         Route} from "react-router-dom";
import HomeLayout from "./Layout/HomeLayout";
import LandingLayout from "./Layout/LandingLayout";

         const router = createBrowserRouter(
           createRoutesFromElements(
                <Route>
                   <Route path="/" element={<LandingLayout />}>
                      <Route index element={<HomeLayout />}>

                      </Route>
                    </Route>  
                </Route>
             
             
           )
         )

function App() {


  return (
      <RouterProvider router={router} />
  );
}

export default App;

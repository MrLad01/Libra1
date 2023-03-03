import { createBrowserRouter,
         RouterProvider,
         createRoutesFromElements, 
         Route} from "react-router-dom";
import HomeLayout from "./Layout/HomeLayout";
import LandingLayout from "./Layout/LandingLayout";
import Footer from "./pages/Footer";
import Other from "./pages/Other";
import Services from "./pages/Services";


         const router = createBrowserRouter(
           createRoutesFromElements(
                <Route>
                   <Route path="/" element={<LandingLayout />}>
                      <Route index element={<HomeLayout />} />
                      <Route path="services" element={<Services />}>
                         <Route path="others" element={<Other />}>
                          <Route path="footer" element={<Footer />} />
                        </Route>
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

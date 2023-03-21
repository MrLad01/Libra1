import { createBrowserRouter,
         RouterProvider,
         createRoutesFromElements, 
         Route
        } from "react-router-dom";
import HomeLayout from "./Layout/HomeLayout";
import LandingLayout from "./Layout/LandingLayout";
import Footer from "./pages/Footer";
import Other from "./pages/Other";
import Services from "./pages/Services";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome, faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { AnimatePresence } from "framer-motion";


library.add(fas, faTwitter, faFontAwesome, faGoogle, faFacebook)





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
                  <Route path="sign-up" element={<SignUp />} />
                  <Route path="log-in" element={<LogIn />} />
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
    <AnimatePresence>
      <RouterProvider router={router} />
    </AnimatePresence>
  );
}

export default App;

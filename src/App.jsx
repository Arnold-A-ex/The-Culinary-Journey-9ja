import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Competition from "./pages/Competition";
import Training from "./pages/Training";
import NotFound from "./pages/NotFound";
import FAQs from "./pages/FAQs";
import Error from "./pages/Error";
import Policies from "./pages/Policies";
import Layout from "./components/Layout"
import './App.css';

function App() {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route element={ <Layout /> } errorElement={ <Error /> } >
            <Route index element={ <Home /> } />
            <Route path="about" element={ <About /> } />
            <Route path="contact" element={ <Contact /> } />
            <Route path="competition" element={ <Competition /> } />
            <Route path="training" element={ <Training /> } />
            <Route path="faqs" element={ <FAQs /> } />
            <Route path="policies" element={ <Policies /> } />
            <Route path="*" element={ <NotFound /> } />
        </Route>
    ));

    return (
        <RouterProvider router={ router } />
    )
};

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom"
import NewVideo from "./pages/NewVideo"
import Home from "./pages/Home"
import MainContext from "./context/MainContext"

const AppRoutes = () => {
    return (
        <MainContext>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/new-video' element={<NewVideo />} />
                    <Route path='*' element={<h1>Not Found</h1>} />
                </Routes>
            </BrowserRouter>
        </MainContext>
    )
}

export default AppRoutes
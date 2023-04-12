import { BrowserRouter, Routes, Route } from "react-router-dom";
import InitPage from "../Pages/InitPage";
const Router=()=>{
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<InitPage/>}/>
                    <Route path="*" element={<h1>404</h1>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Router;
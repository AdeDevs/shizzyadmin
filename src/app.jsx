import { Routes, Route } from "react-router-dom";
import Dashboard from "./screens/admindash";
import AdminDetails from "./screens/admindetails";
import AdminLogin from "./screens/adminlogin";
import CreatePosts from "./screens/createposts";
import DeletePosts from "./screens/delete";
import ForgotScreen from "./screens/forgot";

function App() {
    return (
        <div>
            <article>
            <Routes>
                <Route path="/" element={<AdminLogin/>}></Route>
                <Route path="/forgotpassword" element={<ForgotScreen />}> </Route>
                <Route path="/dashboard" element={<Dashboard/>}>
                    <Route path="/dashboard" element={<AdminDetails/>} />
                    <Route path="create" element={<CreatePosts/>} />
                    <Route path="admincreate" element={<DeletePosts />} />
                </Route>
            </Routes>
            </article>
        </div>
    )
}


export default App;
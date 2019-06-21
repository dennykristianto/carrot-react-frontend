import ProfilePage from "./page/employee/ProfilePage";
import EmployeeIndex from "./page/employee/EmployeeIndex";

const routes = [
    {path:"/profile", component:ProfilePage, exact:true},
    {path:"/",component:EmployeeIndex, exact:true},
]

export default routes;
import { Navigate } from "react-router-dom";


const AdminRoute = ({ children }) => {
    const role = localStorage.getItem('mrecipesrole');

    if(role === 'Admin')
    {
        console.log('sedi');
    }

    return role === 'Admin' ? children : <Navigate to="/unauthorized" />;
  };

  export default AdminRoute
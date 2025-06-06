import { Navigate } from "react-router-dom";


const AdminRoute = ({ children }) => {
    const role = localStorage.getItem('mrecipesrole');

    return role === 'Admin' ? children : <Navigate to="/unauthorized" />;
  };

  export default AdminRoute
import "./MainPage.css";
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
const MainPage = () => {
    return (
    <div>
 <div className="app_div">
        <Sidebar />
      
      
      </div>
      <Outlet />
    </div>
    )
}
export default MainPage;

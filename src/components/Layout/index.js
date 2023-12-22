import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss';

const Layout = () => {
    return (
        <div className="App">
            <Sidebar />
            <div className="page">
                <span className="tag top-tags">&lt;body&gt</span>

                <Outlet />

                <span className="tag bottom-tags">
                &lt;body&gt;
                <span className="tag bottom-tags">
                &lt;body&gt;</span>
                
                </span>
            </div>
        </div>
    )
}
export default Layout;
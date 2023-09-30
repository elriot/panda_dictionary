import { Link } from "react-router-dom";
import './MenuBar.css';

export const MenuBar = () => {
    const menuMap = {
        'Main' : '/main',
        'Profile' : '/profile', 
        'Add' : '/add'           
    };
    return <div className="menu-container">
        {Object.entries(menuMap).map(([key, value]) => (
            <p key={key}>
                <Link  to={value}>{key}</Link>
            </p>            
        ))}        
    </div>
}


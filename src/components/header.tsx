import { Link } from 'react-router-dom';
import { iRouterItem } from '../interfaces/iRouterItem';

export function Header({ menuOptions }: { menuOptions: Array<iRouterItem> }) {
    return (
        <div>
            <h1>Header</h1>
            <ul>
                {menuOptions.map((route) => (
                    <Link to={route.path}key={route.path}>{route.label}</Link>
                ))}
            </ul>
        </div>
    );
}
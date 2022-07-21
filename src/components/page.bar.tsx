import { Link } from 'react-router-dom';
import { iBar } from '../interfaces/iBar';
import './page.bar.module.css';

export function PageBar({ bar }: { bar: iBar }) {
    return (
        <Link to={'/bar'} state={{ bar }}>
            <img src={bar.image} alt={bar.name} className="" />
        </Link>
    );
}
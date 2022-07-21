// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { iBrew } from '../interfaces/iBrew';

import './page.brew.module.css';

export function PageBrew({ brew }: { brew: iBrew }) {
    return (
        <Link to={'/brew'} state={{ brew }}>
            <img src={brew.image} alt={brew.name} className="" />
        </Link>
    );
};


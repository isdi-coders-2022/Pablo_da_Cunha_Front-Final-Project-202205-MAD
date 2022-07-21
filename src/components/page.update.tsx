
import { Link } from 'react-router-dom';
import { iUser } from '../interfaces/iUser';



export function PageUpdate({ user }: { user: iUser }) {
    
    return (
        <>
            <Link to={'/update'} state={{ user }}>
                
            </Link>
            
        </>
    );
}

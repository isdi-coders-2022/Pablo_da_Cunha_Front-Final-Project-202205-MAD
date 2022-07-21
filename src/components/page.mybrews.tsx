
import { Link } from 'react-router-dom';
import {iBrew} from '../interfaces/iBrew';


export function PageMyBrews({ brew }: { brew: iBrew }) {
    
    return (
        <>
        
        <h2>{brew.name}</h2> 
        <Link to={'/mybrews'} state={{ brew }}>
            
        </Link>
        

        </>
    );
}

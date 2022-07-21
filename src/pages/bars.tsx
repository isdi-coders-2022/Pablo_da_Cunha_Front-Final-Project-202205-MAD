import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PageBars } from '../components/page.bars';
import { iStore } from '../store/store';
// import styles from './bars.module.css';

export function Bars() {
    const bars = useSelector((store: iStore) => store.bar);

    return (
        <div>
            <h1>Bars</h1>
            <ul className="bars">
                {bars.map((bar) => (
                    <li key={bar.name} className="">
                        <PageBars bar={bar}></PageBars>
                        <h3 className="">{bar.name}</h3>
                        <Link className="nameBar" to={`/bar/${bar._id}`}>
                            <img src={bar.image} alt="" className="img" />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Bars;

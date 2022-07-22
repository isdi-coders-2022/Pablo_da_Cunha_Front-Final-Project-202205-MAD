import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import { useLocation, useParams } from 'react-router-dom';
// import { PageBrew } from '../components/page.brew';
// import { iBar } from '../interfaces/iBar';
import { iBrew } from '../interfaces/iBrew';
import { BarHttpStore } from '../services/bar.store';
import './bar.module.css';

export function Bar() {
    const { id } = useParams();
    console.log(id, 'ID BAR');
    const api = useMemo(() => new BarHttpStore(), []);
    const initialState = {
        name: '',
        description: '',
        image: '',
        adress: '',
        brews: [] as iBrew[],
    };
    const [barData, setBarData] = useState(initialState);

    useEffect(() => {
        api.getBar(id as string).then((data) => {
            setBarData(data);
        });
    }, [api, id]);

    return (
        <div>
            <div className="bar">
                <div>
                    <img src={barData?.image} alt="" className="barimg" />
                </div>
                <div>
                    <h2>{barData.name}</h2>
                    <p>{barData.description}</p>
                    <p>Adress: {barData.adress}</p>
                </div>
            </div>
            <ul>
                Beer of the day:
                {barData.brews.map((brew) => {
                    return (
                        <li className="brew">
                            <Link className="nameBar" to={`/brew/${brew._id}`}>
                                <img src={brew.image} alt="" className="img" />
                            </Link>

                            <p>{brew.name}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Bar;

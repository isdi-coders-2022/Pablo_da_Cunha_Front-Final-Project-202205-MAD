import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AddFav } from '../components/addFav';
import { iBrew } from '../interfaces/iBrew';
import { BrewHttpStore } from '../services/brew.store';

import './brew.module.css';

export function Brew() {
    const { id } = useParams();

    const api = useMemo(() => new BrewHttpStore(), []);
    const initialState = {
        name: '',
        image: '',
        video: '',
        tasted: false,
        description: '',
        cereal: 'Wheat',
        style: 'Blonde',
        type: 'Ale',
    };
    const [brewData, setBrewData] = useState(initialState);

    useEffect(() => {
        api.getBrew(id).then((data) => {
            setBrewData(data);
        });
    }, [api, id]);

    return (
        <div>
            <div className="brew">
                <div>
                    <AddFav brew={brewData as iBrew}></AddFav>
                    <img src={brewData.image} alt="" className="brewimg" />
                    <iframe
                        width="400"
                        height="240"
                        src={brewData.video}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div>
                    <h2>{brewData.name}</h2>
                    <p>{brewData.description}</p>
                    <p>Style:{brewData.style}</p>
                    <p>Type:{brewData.type}</p>
                    <p>Cereal:{brewData.cereal}</p>
                </div>
            </div>
        </div>
    );
}

export default Brew;

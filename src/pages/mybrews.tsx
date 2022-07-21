import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PageMyBrews } from '../components/page.mybrews';

import { iStore } from '../store/store';

export function MyBrews() {
    const brews = useSelector((store: iStore) => store.brew);
    const user = useSelector((store: iStore) => store.user);
    return (
        <div>
            <h1>MyBrews</h1>
            <ul className="">
                {brews
                    .filter((brew) =>
                        user.brews?.some(
                            (userBrew) => userBrew._id === brew._id
                        )
                    )
                    .map((brew) => (
                        <li className="" key={brew._id}>
                            <PageMyBrews brew={brew}></PageMyBrews>
                            <Link className="nameBar" to={`/brew/${brew._id}`}>
                                <img src={brew.image} alt="" className="img" />
                            </Link>

                            <h3 className="">{brew.cereal}</h3>
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default MyBrews;

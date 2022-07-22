// import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PageBrews } from '../components/page.brews';

import { iStore } from '../store/store';

export function Brews() {
    const brews = useSelector((store: iStore) => store.brew);
    return (
        <div>
            <h1>Brews</h1>
            <ul className="">
                               
                {brews
                    .map((brew) => (
                        <li className="" key={brew._id}>
                            <PageBrews brew={brew}></PageBrews>
                            <Link className="nameBar" to={`/brew/${brew._id}`}>
                                <img src={brew.image} alt="" className="img" />
                            </Link>
                            <h3 className="">{brew.cereal}</h3>
                        </li>
                    ))}
            </ul>
            {/* <ul className="">
            <h2>Wheat Brews</h2>
                {brews
                    .filter((brew) => brew.cereal === 'Wheat')
                    .map((brew) => (
                        <li className="" key={brew._id}>
                            <PageBrews brew={brew}></PageBrews>
                            <Link className="nameBar" to={`/brew/${brew._id}`}>
                                <img src={brew.image} alt="" className="img" />
                            </Link>
                            <h3 className="">{brew.cereal}</h3>
                        </li>
                    ))}
            </ul>
            <ul className="">
            <h2>Ale Brews</h2>
                {brews
                    .filter((brew) => brew.type === 'Ale')
                    .map((brew) => (
                        <li className="" key={brew._id}>
                            <PageBrews brew={brew}></PageBrews>
                            <Link className="nameBar" to={`/brew/${brew._id}`}>
                                <img src={brew.image} alt="" className="img" />
                            </Link>
                            <h3 className="">{brew.type}</h3>
                        </li>
                    ))}
            </ul>
            <ul className="">
            <h2>Lager Brews</h2>
                {brews
                    .filter((brew) => brew.type === 'Lager')
                    .map((brew) => (
                        <li className="" key={brew._id}>
                            <PageBrews brew={brew}></PageBrews>
                            <Link className="nameBar" to={`/brew/${brew._id}`}>
                                <img src={brew.image} alt="" className="img" />
                            </Link>
                            <h3 className="">{brew.type}</h3>
                        </li>
                    ))}
            </ul>
            <ul className="">
            <h2>Blonde Brews</h2>
                {brews
                    .filter((brew) => brew.style === 'Blonde')
                    .map((brew) => (
                        <li className="" key={brew._id}>
                            <PageBrews brew={brew}></PageBrews>
                            <Link className="nameBar" to={`/brew/${brew._id}`}>
                                <img src={brew.image} alt="" className="img" />
                            </Link>
                            <h3 className="">{brew.style}</h3>
                        </li>
                    ))}
            </ul>
            <ul className="">
            <h2>Red Brews</h2>
                {brews
                    .filter((brew) => brew.style === 'Red')
                    .map((brew) => (
                        <li className="" key={brew._id}>
                            <PageBrews brew={brew}></PageBrews>
                            <Link className="nameBar" to={`/brew/${brew._id}`}>
                                <img src={brew.image} alt="" className="img" />
                            </Link>
                            <h3 className="">{brew.style}</h3>
                        </li>
                    ))}
            </ul>
            <ul className="">
            <h2>Dark Brews</h2>
                {brews
                    .filter((brew) => brew.style === 'Dark')
                    .map((brew) => (
                        <li className="" key={brew._id}>
                            <PageBrews brew={brew}></PageBrews>
                            <Link className="nameBar" to={`/brew/${brew._id}`}>
                                <img src={brew.image} alt="" className="img" />
                            </Link>
                            <h3 className="">{brew.style}</h3>
                        </li>
                    ))}
            </ul> */}
        </div>
    );
}

export default Brews;

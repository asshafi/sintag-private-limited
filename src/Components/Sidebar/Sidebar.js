import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Sidebar = () => {
    const products = useLoaderData();
    return (
        <ul className="list-unstyled ps-0 ">
            <li className="mb-1 ">
                <button className="colormain ps-0 mt-5 fs-3 fw-bold text-primary btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                    Popular Products :
                </button>
                <div className="collapse show" id="home-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        {products.map((c) => {
                            return (<li key={c.id}>
                                <Link to={`/product/${c.id}`} className="link-dark d-inline-flex text-decoration-none rounded">{c.title}
                                </Link>
                            </li>)
                        })}
                    </ul>
                </div>
            </li>
            <li className="border-top my-3"></li>
            <li className="mb-1">
                <button className="colormain btn ps-0 fs-3 fw-bold text-primary btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="true">
                    Account
                </button>
                <div className="collapse show" id="account-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        <li><Link to="#" className="link-dark d-inline-flex text-decoration-none rounded">Profile</Link></li>
                        <li><Link to="#" className="link-dark d-inline-flex text-decoration-none rounded">Settings</Link></li>
                        <li><Link to="/logout" className="link-dark d-inline-flex text-decoration-none rounded">Logout</Link></li>
                    </ul>
                </div>
            </li>
        </ul>
    );
};

export default Sidebar;
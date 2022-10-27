import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ProductBlock = ({ limit, title }) => {
    let products = useLoaderData();
    
    limit = parseInt(limit);
    
    products = products.filter((el, k) => k < limit);
    
    
    return (
        <div>
            <h2 className="h1 text-center colormain">{ title }</h2>
            <p className="text-center">Explore our pet animal care products to care your lovely pet animal!
            </p>
            <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 mt-3 mb-5 mx-0 gy-5">
                {products.map((c) => {
                    return (<div className="col border shadow  g-5 align-self-stretch" key={c.id}>
                        <Link to={`/product/${c.id}`} className="link-dark row rounded courses me-md-1 text-decoration-none">
                            <div className="col-12 px-0">
                                <img src={`/${c.img}`} className="rounded w-100 h-100" alt="" />
                            </div>
                            <div className="col-12 align-self-center py-3 ps-4">
                                <h4 className='fw-bold'>{c.title}</h4>
                                <p>{c.desc}</p>
                                <p className="fw-bolder prices fs-4">Price : {c.price} $</p>
                            </div>
                        </Link>
                    </div>)
                })}
            </div>
            <Link to="/products" className="btn btn-primary text-uppercase text-center">see more produtcs <i className="ms-1 fa fa-angle-right" aria-hidden="true"></i></Link>  
        </div>
    );
};

export default ProductBlock;
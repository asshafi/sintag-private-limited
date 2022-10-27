import React from 'react';
import { useParams, useLoaderData } from 'react-router-dom';


const ref = React.createRef();


const Product = () => {
    const products = useLoaderData();
    let { id } = useParams();
    let product = products.find((el) => el.id === id);
    return (
        <div className='container'>
            <div className='row'>
                <div className="col-md-8 mt-5">
                    <div className="row rounded courses me-lg-1" ref={ref}>
                        <div className="col-12 col-sm-4 px-0">
                            <img src={`/${product.img}`} className="rounded w-100 h-100" alt="" />
                        </div>
                        <div className="col-12 col-sm-8 py-3 ps-4">
                            <h3>{product.title}</h3>
                            <p>{product.desc} </p>
                            <ul className="my-5 ps-0">
                                <li className="d-flex align-items-center mb-3"><img className="me-3" src="/img/check-point.svg" alt="" />
                                    <h6 className="card-text text-medium-bold">This is a pet animal helpful medicine.</h6>
                                </li>
                                <li className="d-flex align-items-center"><img className="me-3" src="/img/check-point.svg" alt="" />
                                    <h6 className="card-text text-medium-bold">This is a pet animal helpful medicine.</h6>
                                </li>
                            </ul>
                            <p className="fw-bolder prices fs-4 mb-0">Price : {product.price}$</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
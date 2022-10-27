import React from 'react';
import ProductBlock from '../ProductBlock/ProductBlock';
const Products = () => {
    return (
        <div className='container'>
        <div className='row'>

            <div className="col-md-8 mt-5">
                <ProductBlock limit="100" title="Discover Our Courses"></ProductBlock>
            </div >

            
        </div>
    </div>
    );
};

export default Products;
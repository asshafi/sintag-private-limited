import React from 'react';
import ProductBlock from '../ProductBlock/ProductBlock';
import Sidebar from '../Sidebar/Sidebar';

const Products = () => {
    return (
        <div className='container'>
        <div className='row'>


        <div className="flex-shrink-0 p-3 pt-5 mt-5 fs-4 border col-md-4">
                    <Sidebar></Sidebar>
        </div>
            

        <div className="col-md-8 mt-5 pt-5">
                <ProductBlock limit="100" title="Discover Our Products"></ProductBlock>
        </div >
  
        </div>
    </div>
    );
};

export default Products;
import React from 'react';
import { Link } from 'react-router-dom';
import ProductBlock from '../ProductBlock/ProductBlock';

const Homepage = () => {
    return (
        <div className=''>
             <picture><img className='w-100 mt-3' src="images/BANNER1.jpg" alt="" /></picture>
            {/* news section  */}
            <picture> <img className='img-fluid' src='images/nws.png' alt=''/></picture>
            
            {/* welcome section */}
            <section className="mb-4 container">
             <div className="row row-cols-1 g-4">
                <div className="col col-xl-8 bg-white rounded-lg shadow rounded">
                    <h1 className='fw-bold'>Welcome: </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus provident iusto a ducimus
                        velit alias. Exercitationem modi a illo consequuntur quae cupiditate ut incidunt, quod
                        voluptatem ipsa sunt deleniti quo vitae ratione quia odio sapiente autem laborum omnis porro
                        adipisci quidem. Temporibus laudantium, labore quasi dolorem soluta quidem earum cupiditate?</p>

                        <Link to="/products" className="btn btn-primary text-uppercase">see our produtcs <i className="ms-1 fa fa-angle-right" aria-hidden="true"></i></Link>    
                </div>
                <div className="col col-xl-4 bg-white shadow  h-50 rounded">
                    <img className="img-fluid " src="images/products/I-Mactin.png" alt="" />
                </div>
                </div>
          </section>

          {/* products section */}

          <div className='container'>
                <div className='row'>

                    <div className="col-md-12 mt-5">
                        <ProductBlock limit="3" title="Discover Our Products"></ProductBlock>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Homepage;
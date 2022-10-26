import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div className='container'>
            {/* news section  */}
            <picture> <img className='img-fluid' src='images/nws.png' alt=''/></picture>
            {/* welcome section */}

            <section class="mb-4 container">

             <div class="row row-cols-1 g-4">
                <div class="col col-xl-8 bg-white rounded-lg shadow rounded">
                    <h1>Welcome</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus provident iusto a ducimus
                        velit alias. Exercitationem modi a illo consequuntur quae cupiditate ut incidunt, quod
                        voluptatem ipsa sunt deleniti quo vitae ratione quia odio sapiente autem laborum omnis porro
                        adipisci quidem. Temporibus laudantium, labore quasi dolorem soluta quidem earum cupiditate?</p>
                </div>
                <div class="col col-xl-4 bg-white shadow  h-50 rounded">
                    <img class="img-fluid " src="images/products/I-Mactin.png" alt="" />
                </div>
                </div>
          </section>
        </div>
    );
};

export default Homepage;
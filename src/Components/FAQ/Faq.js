import React from 'react';

const Faq = () => {
    return (
        <div className='container mt-5'>
            <div class="row">
                <div class="col-md-8 mx-auto text-center">
                    <h2 class="h1">Frequently Asked Questions</h2>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-lg-8 mx-auto">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    How do I purchase your products?
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero tempora ullam eos ratione? Placeat, sapiente rerum. Minus dolore unde architecto.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Do I have Exchange any product? 
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    There are no exchange on our sold products.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingt2">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#headingt" aria-expanded="false" aria-controls="headingt2">
                                    Is SINTAG PRIVATE LIMITED a non-profit organization?
                                </button>
                            </h2>
                            <div id="headingt" class="accordion-collapse collapse" aria-labelledby="headingt"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque ipsa aliquid quam esse ullam, laborum officia consectetur tenetur cum nihil!  </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingf2">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#headingf" aria-expanded="false" aria-controls="headingf2">
                                    What if I don’t want to purchase your product after confirm online payment?
                                </button>
                            </h2>
                            <div id="headingf" class="accordion-collapse collapse" aria-labelledby="headingf"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium reprehenderit consequuntur enim nihil sequi itaque cupiditate deserunt, ratione hic provident?
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
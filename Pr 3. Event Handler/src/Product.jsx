import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// import 'index.css';

const Product = ({ category, item, categoryButtonClick, filterData }) => {
    return (
        <div align="center">

            <div className="container my-4">
                
                <div className="row mb-4">
                    <div className="col text-center">
                        {
                            category.map((cat) => {
                                const { id, name } = cat;
                                return (
                                    <button
                                        key={id}
                                        className="btn btn-outline-primary mx-2 my-2 p-3"
                                        onClick={() => categoryButtonClick(cat.name)}>
                                        {name}
                                    </button>
                                );
                            })
                        }
                    </div>
                </div>


                <div className="row">
                    {
                        filterData.length !== 0 ? (
                            filterData.map((pr, index) => (
                                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                                    <div className="card h-100 text-center">
                                        <img src={pr.image} className="card-img-top mx-3 mt-2" alt={pr.name} />
                                        <div className="card-body">
                                            <h5 className="card-title">{pr.name}</h5>
                                            <p className="card-text">Rs.{pr.price}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            item.map((pr, index) => (
                                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                                    <div className="card h-100 text-center">
                                        <img src={pr.image} className="card-img-top" alt={pr.name} />
                                        <div className="card-body">
                                            <h5 className="card-title">{pr.name}</h5>
                                            <p className="card-text">Rs.{pr.price}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Product;
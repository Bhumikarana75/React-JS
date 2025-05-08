import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './header.css'

const header = ({menuList}) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand " href="#">
                        <img src="https://htmldemo.net/reid/reid/assets/img/logo/logo.png" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse mx-auto ms-5" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-3 mb-lg-0">
                            {
                                menuList.map(( val, index) => {
                                    return (
                                        <li key={index} className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">{val.name}</a>
                                        </li>
                                    );
                                })
                            }

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default header
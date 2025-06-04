import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "./Header.css";
function Header() {
    return (
        <div className="headerjsx">

            <section className="Header">
                <div className="container">
                    <div className="row">
                        <div className="header1-main d-flex justify-contant-center align-items-center">
                            <div className="col-3">
                                <div className="header1-img justify-contant-center">
                                    <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/logo/logo.png" alt="" srcset="" width={"120px"} />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="header1-searchbar justify-contant-start">
                                    <div className="form d-flex">
                                        <input type="search" placeholder="Search For items..." aria-label="Search" />
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                All Categories
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#">All Categories</a></li>
                                                <li><a class="dropdown-item" href="#">Mens</a></li>
                                                <li><a class="dropdown-item" href="#">Womens</a></li>
                                                <li><a class="dropdown-item" href="#">Electronics</a></li>
                                            </ul>
                                        </li>
                                        <div className="serch-bar">
                                            <span><i class="fa-solid fa-magnifying-glass"></i></span>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="col-4">
                                <div className="header-icon d-flex align-items-center">
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="fa-regular fa-user"></i>&nbsp;Account
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Register</a></li>
                                            <li><a class="dropdown-item" href="#">Checkout</a></li>
                                            <li><a class="dropdown-item" href="#">Login</a></li>
                                        </ul>
                                    </li>&nbsp;
                                    <div className="header-icon-2">
                                        <ul className='d-flex'>
                                            <li>
                                                <a href="#"><i class="fa-regular fa-heart"></i>&nbsp;Wishlist</a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="fa-solid fa-cart-shopping"></i>&nbsp;Cart</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='menubar'>
                <div className="container">
                    <div className="row">
                        <div className="menubar-main d-flex">
                            <div className="col-2">
                                <div className="toggle-1">
                                  <i class="fa-solid fa-bars"></i>
                                </div>
                            </div>

                            <div className="col-7">
                                <div className="menubar-list d-flex justify-content-center">
                                    <nav class="navbar navbar-expand-lg bg-white">
                                        <div class="container-fluid">
                                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                                <span class="navbar-toggler-icon"></span>
                                            </button>
                                            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                                <ul class="navbar-nav">
                                                    <li class="nav-item">
                                                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                                                    </li>

                                                    <li class="nav-item dropdown">
                                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            Category
                                                        </a>
                                                        <ul class="dropdown-menu">
                                                            <li><a class="dropdown-item" href="#">Shop Left Sidebar</a></li>
                                                            <li><a class="dropdown-item" href="#">Shop Right Sidebar</a></li>
                                                            <li><a class="dropdown-item" href="#">Shop Full Width</a></li>
                                                            
                                                        </ul>
                                                    </li>

                                                    <li class="nav-item dropdown">
                                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            Products
                                                        </a>
                                                        <ul class="dropdown-menu">
                                                            <li><a class="dropdown-item" href="#">Products Left Sidebar</a></li>
                                                            <li><a class="dropdown-item" href="#">Products Right Sidebar</a></li>
                                                            <li><a class="dropdown-item" href="#">Products Full Width</a></li>
                                                            
                                                        </ul>
                                                    </li>

                                                    <li class="nav-item dropdown">
                                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            Pages
                                                        </a>
                                                        <ul class="dropdown-menu">
                                                            <li><a class="dropdown-item" href="#">About Us</a></li>
                                                            <li><a class="dropdown-item" href="#">Contact Us</a></li>
                                                            <li><a class="dropdown-item" href="#">Cart</a></li>
                                                            <li><a class="dropdown-item" href="#">Checkout</a></li>
                                                            <li><a class="dropdown-item" href="#">wislist</a></li>
                                                            <li><a class="dropdown-item" href="#">Faq</a></li>
                                                            <li><a class="dropdown-item" href="#">Login</a></li>
                                                            <li><a class="dropdown-item" href="#">Register</a></li>
                                                            <li><a class="dropdown-item" href="#">Policy</a></li>
                                                        </ul>
                                                    </li>

                                                    <li class="nav-item dropdown">
                                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            Blog
                                                        </a>
                                                        <ul class="dropdown-menu">
                                                            <li><a class="dropdown-item" href="#">Left Sidebar</a></li>
                                                            <li><a class="dropdown-item" href="#">Right Sidebar</a></li>
                                                            <li><a class="dropdown-item" href="#">Full Width</a></li>
                                                            <li><a class="dropdown-item" href="#">Detail Left Sidebar</a></li>
                                                            <li><a class="dropdown-item" href="#">Detail Right Sidebar</a></li>
                                                            <li><a class="dropdown-item" href="#">Detail Full Width</a></li>
                                                        </ul>
                                                    </li>

                                                    <li class="nav-item dropdown">
                                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            Elements
                                                        </a>
                                                        <ul class="dropdown-menu">
                                                            <li><a class="dropdown-item" href="#">Products</a></li>
                                                            <li><a class="dropdown-item" href="#">Typography</a></li>
                                                            <li><a class="dropdown-item" href="#">Button</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>

                            <div className="col-3">
                                <div className="call d-flex justify-content-end">
                                    <span><i class="fa-solid fa-phone"></i>&nbsp;&nbsp;+123 ( 456 ) ( 7890 )</span>
                                    
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
export default Header
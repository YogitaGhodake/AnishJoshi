"use client"


export default function AboutUs() {
  return (
    <>
  {/* Preloader ============================== */}
  {/* <div className="preloader ">
    <button className="th-btn style2 preloaderCls">Cancel Preloader </button>
    <div className="preloader-inner">
      <span className="loader">
        Donat
        <span className="loading-text">Donat</span>
      </span>
    </div>
  </div> */}

  <div className="sidemenu-wrapper sidemenu-cart ">
    <div className="sidemenu-content">
      <button className="closeButton sideMenuCls">
        <i className="far fa-times" />
      </button>
      <div className="widget woocommerce widget_shopping_cart">
        <h3 className="widget_title">Shopping cart</h3>
        <div className="widget_shopping_cart_content">
          <ul className="woocommerce-mini-cart cart_list product_list_widget ">
            <li className="woocommerce-mini-cart-item mini_cart_item">
              <a href="#" className="remove remove_from_cart_button">
                <i className="far fa-times" />
              </a>
              <a href="#">
                <img
                  src="assets/img/product/product_thumb_1_1.png"
                  alt="Cart Image"
                />
                Books
              </a>
              <span className="quantity">
                1 ×
                <span className="woocommerce-Price-amount amount">
                  <span className="woocommerce-Price-currencySymbol">$</span>
                  940.00
                </span>
              </span>
            </li>
            <li className="woocommerce-mini-cart-item mini_cart_item">
              <a href="#" className="remove remove_from_cart_button">
                <i className="far fa-times" />
              </a>
              <a href="#">
                <img
                  src="assets/img/product/product_thumb_1_2.png"
                  alt="Cart Image"
                />
                Medicine
              </a>
              <span className="quantity">
                1 ×
                <span className="woocommerce-Price-amount amount">
                  <span className="woocommerce-Price-currencySymbol">$</span>
                  899.00
                </span>
              </span>
            </li>
            <li className="woocommerce-mini-cart-item mini_cart_item">
              <a href="#" className="remove remove_from_cart_button">
                <i className="far fa-times" />
              </a>
              <a href="#">
                <img
                  src="assets/img/product/product_thumb_1_3.png"
                  alt="Cart Image"
                />
                Dress
              </a>
              <span className="quantity">
                1 ×
                <span className="woocommerce-Price-amount amount">
                  <span className="woocommerce-Price-currencySymbol">$</span>
                  756.00
                </span>
              </span>
            </li>
            <li className="woocommerce-mini-cart-item mini_cart_item">
              <a href="#" className="remove remove_from_cart_button">
                <i className="far fa-times" />
              </a>
              <a href="#">
                <img
                  src="assets/img/product/product_thumb_1_4.png"
                  alt="Cart Image"
                />
                Chair
              </a>
              <span className="quantity">
                1 ×
                <span className="woocommerce-Price-amount amount">
                  <span className="woocommerce-Price-currencySymbol">$</span>
                  723.00
                </span>
              </span>
            </li>
            <li className="woocommerce-mini-cart-item mini_cart_item">
              <a href="#" className="remove remove_from_cart_button">
                <i className="far fa-times" />
              </a>
              <a href="#">
                <img
                  src="assets/img/product/product_thumb_1_5.png"
                  alt="Cart Image"
                />
                Cloths
              </a>
              <span className="quantity">
                1 ×
                <span className="woocommerce-Price-amount amount">
                  <span className="woocommerce-Price-currencySymbol">$</span>
                  1080.00
                </span>
              </span>
            </li>
          </ul>
          <p className="woocommerce-mini-cart__total total">
            <strong>Subtotal:</strong>
            <span className="woocommerce-Price-amount amount">
              <span className="woocommerce-Price-currencySymbol">$</span>4398.00
            </span>
          </p>
          <p className="woocommerce-mini-cart__buttons buttons">
            <a href="cart.html" className="th-btn wc-forward">
              View cart
            </a>
            <a href="checkout.html" className="th-btn checkout wc-forward">
              Checkout
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="popup-search-box d-none d-lg-block">
    <button className="searchClose">
      <i className="far fa-times" />
    </button>
    <form action="#">
      <input type="text" placeholder="What are you looking for?" />
      <button type="submit">
        <i className="fal fa-search" />
      </button>
    </form>
  </div>
  {/*==============================
    Mobile Menu
  ============================== */}
  <div className="th-menu-wrapper">
    <div className="th-menu-area text-center">
      <button className="th-menu-toggle">
        <i className="fal fa-times" />
      </button>
      <div className="mobile-logo">
        <a href="index.html">
          <img src="assets/img/logo.svg" alt="Donat" />
        </a>
      </div>
      <div className="th-mobile-menu">
        <ul>
          <li className="menu-item-has-children">
            <a href="index.html">Home</a>
            <ul className="sub-menu">
              <li className="menu-item-has-children">
                <a href="#">Multipage</a>
                <ul className="sub-menu">
                  <li>
                    <a href="index.html">Home One</a>
                  </li>
                  <li>
                    <a href="home-2.html">Home Two</a>
                  </li>
                  <li>
                    <a href="home-3.html">Home Three</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Onepage</a>
                <ul className="sub-menu">
                  <li>
                    <a href="home-1-op.html">Home One</a>
                  </li>
                  <li>
                    <a href="home-2-op.html">Home Two</a>
                  </li>
                  <li>
                    <a href="home-3-op.html">Home Three</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">RTL</a>
                <ul className="sub-menu">
                  <li>
                    <a href="home-1-rtl.html">Home One</a>
                  </li>
                  <li>
                    <a href="home-2-rtl.html">Home Two</a>
                  </li>
                  <li>
                    <a href="home-3-rtl.html">Home Three</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="about.html">About Us</a>
          </li>
          <li className="menu-item-has-children">
            <a href="#">Donations</a>
            <ul className="sub-menu">
              <li>
                <a href="donation.html">Donations</a>
              </li>
              <li>
                <a href="donation-details.html">Donation Details</a>
              </li>
              <li>
                <a href="donate-now.html">Donate Now</a>
              </li>
            </ul>
          </li>
          <li className="menu-item-has-children">
            <a href="#">Pages</a>
            <ul className="sub-menu">
              <li className="menu-item-has-children">
                <a href="#">Shop</a>
                <ul className="sub-menu">
                  <li>
                    <a href="shop.html">Shop</a>
                  </li>
                  <li>
                    <a href="shop-details.html">Shop Details</a>
                  </li>
                  <li>
                    <a href="cart.html">Cart Page</a>
                  </li>
                  <li>
                    <a href="checkout.html">Checkout</a>
                  </li>
                  <li>
                    <a href="wishlist.html">Wishlist</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="team.html">Volunteers</a>
              </li>
              <li>
                <a href="team-details.html">Volunteer Details</a>
              </li>
              <li>
                <a href="add-team.html">Become A Volunteer</a>
              </li>
              <li>
                <a href="gallery.html">Gallery</a>
              </li>
              <li>
                <a href="pricing.html">Pricing</a>
              </li>
              <li>
                <a href="faq.html">FAQS</a>
              </li>
              <li>
                <a href="testimonial.html">Testimonials</a>
              </li>
              <li>
                <a href="error.html">Error Page</a>
              </li>
            </ul>
          </li>
          <li className="menu-item-has-children">
            <a href="#">Blog</a>
            <ul className="sub-menu">
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <a href="blog-details.html">Blog Details</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="contact.html">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="color-scheme-wrap active">
    <button className="switchIcon">
      <i className="fa-solid fa-palette" />
    </button>
    <h3 className="color-scheme-wrap-title text-center">Color Switcher</h3>
    <h4 className="color-scheme-wrap-subtitle text-center">Theme Color</h4>
    <div className="color-switch-btns">
      <button data-color="#1A685B">
        <i className="fa-solid fa-droplet" />
      </button>
      <button data-color="#f34e3a">
        <i className="fa-solid fa-droplet" />
      </button>
      <button data-color="#FF4857">
        <i className="fa-solid fa-droplet" />
      </button>
      <button data-color="#3843C1">
        <i className="fa-solid fa-droplet" />
      </button>
      <button data-color="#FF7E02">
        <i className="fa-solid fa-droplet" />
      </button>
    </div>
    <h4 className="color-scheme-wrap-subtitle mt-20 text-center">
      Secondary Color
    </h4>
    <div className="secondary-color-switch-btns">
      <button data-secondary-color="#FFAC00">
        <i className="fa-solid fa-droplet" />
      </button>
      <button data-secondary-color="#F41E1E">
        <i className="fa-solid fa-droplet" />
      </button>
      <button data-secondary-color="#f34e3a">
        <i className="fa-solid fa-droplet" />
      </button>
      <button data-secondary-color="#FF4857">
        <i className="fa-solid fa-droplet" />
      </button>
      <button data-secondary-color="#3843C1">
        <i className="fa-solid fa-droplet" />
      </button>
    </div>
  </div>
  {/*==============================
	Header Area
==============================*/}
  <header className="th-header header-default">
    <div className="menu-top">
      <div className="container">
        <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
          <div className="col-auto d-none d-lg-block">
            <div className="header-logo">
              <a href="index.html">
                <img src="assets/img/logo.svg" alt="Donat" />
              </a>
            </div>
          </div>
          <div className="col-auto d-none d-md-block">
            <div className="info-card-wrap">
              <div className="info-card">
                <div className="box-icon">
                  <i className="fal fa-map-marker-alt" />
                  <div
                    className="bg-shape1"
                    data-mask-src="assets/img/shape/info_card_icon_bg_shape_1_1.png"
                  />
                  <div
                    className="bg-shape2"
                    data-mask-src="assets/img/shape/info_card_icon_bg_shape_1_1.png"
                  />
                </div>
                <div className="box-content">
                  <p className="box-text">Locate Address:</p>
                  <h4 className="box-title">
                    <a href="https://www.google.com/maps">Newyork City, USA</a>
                  </h4>
                </div>
              </div>
              <div className="info-card">
                <div className="box-icon">
                  <i className="fal fa-phone" />
                  <div
                    className="bg-shape1"
                    data-mask-src="assets/img/shape/info_card_icon_bg_shape_1_1.png"
                  />
                  <div
                    className="bg-shape2"
                    data-mask-src="assets/img/shape/info_card_icon_bg_shape_1_1.png"
                  />
                </div>
                <div className="box-content">
                  <p className="box-text">Call us any time:</p>
                  <h4 className="box-title">
                    <a href="tel:16336547896">+163-3654-7896</a>
                  </h4>
                </div>
              </div>
              <div className="info-card">
                <div className="box-icon">
                  <i className="fal fa-envelope-open" />
                  <div
                    className="bg-shape1"
                    data-mask-src="assets/img/shape/info_card_icon_bg_shape_1_1.png"
                  />
                  <div
                    className="bg-shape2"
                    data-mask-src="assets/img/shape/info_card_icon_bg_shape_1_1.png"
                  />
                </div>
                <div className="box-content">
                  <p className="box-text">Email us any time:</p>
                  <h4 className="box-title">
                    <a href="mailto:info@donat.com">info@donat.com</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-auto header-social-col">
            <div className="th-social">
              <a href="https://www.facebook.com/">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="https://www.twitter.com/">
                <i className="fab fa-twitter" />
              </a>
              <a href="https://www.youtube.com/">
                <i className="fab fa-youtube" />
              </a>
              <a href="https://www.linkedin.com/">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="sticky-wrapper">
      {/* Main Menu Area */}
      <div className="container">
        <div className="menu-area">
          <div className="menu-area-wrap">
            <div className="col-auto d-inline-block d-lg-none">
              <div className="header-logo">
                <a href="index.html">
                  <img src="assets/img/logo-white.svg" alt="Donat" />
                </a>
              </div>
            </div>
            <nav className="main-menu d-none d-lg-block">
              <ul>
                <li className="menu-item-has-children">
                  <a href="index.html">Home</a>
                  <ul className="mega-menu mega-menu-content">
                    <li>
                      <div className="container">
                        <div className="row gy-4">
                          <div className="col-lg-4">
                            <div className="mega-menu-box">
                              <div className="mega-menu-img">
                                <img
                                  src="assets/img/pages/index.jpg"
                                  alt="Home One"
                                />
                                <div className="btn-wrap">
                                  <a href="index.html" className="th-btn ">
                                    Multipage
                                  </a>
                                  <a href="home-1-op.html" className="th-btn ">
                                    Onepage
                                  </a>
                                  <a href="home-1-rtl.html" className="th-btn ">
                                    RTL
                                  </a>
                                </div>
                              </div>
                              <h3 className="mega-menu-title">
                                <a href="index.html">Home One</a>
                              </h3>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="mega-menu-box">
                              <div className="mega-menu-img">
                                <img
                                  src="assets/img/pages/home-2.jpg"
                                  alt="Home Two"
                                />
                                <div className="btn-wrap">
                                  <a href="home-2.html" className="th-btn ">
                                    Multipage
                                  </a>
                                  <a href="home-2-op.html" className="th-btn ">
                                    Onepage
                                  </a>
                                  <a href="home-2-rtl.html" className="th-btn ">
                                    RTL
                                  </a>
                                </div>
                              </div>
                              <h3 className="mega-menu-title">
                                <a href="home-2.html">Home Two</a>
                              </h3>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="mega-menu-box">
                              <div className="mega-menu-img">
                                <img
                                  src="assets/img/pages/home-3.jpg"
                                  alt="Home Three"
                                />
                                <div className="btn-wrap">
                                  <a href="home-3.html" className="th-btn ">
                                    Multipage
                                  </a>
                                  <a href="home-3-op.html" className="th-btn ">
                                    Onepage
                                  </a>
                                  <a href="home-3-rtl.html" className="th-btn ">
                                    RTL
                                  </a>
                                </div>
                              </div>
                              <h3 className="mega-menu-title">
                                <a href="home-3.html">Home Three</a>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="about.html">About Us</a>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Donations</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="donation.html">Donations</a>
                    </li>
                    <li>
                      <a href="donation-details.html">Donation Details</a>
                    </li>
                    <li>
                      <a href="donate-now.html">Donate Now</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Pages</a>
                  <ul className="sub-menu">
                    <li className="menu-item-has-children">
                      <a href="#">Shop</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="shop.html">Shop</a>
                        </li>
                        <li>
                          <a href="shop-details.html">Shop Details</a>
                        </li>
                        <li>
                          <a href="cart.html">Cart Page</a>
                        </li>
                        <li>
                          <a href="checkout.html">Checkout</a>
                        </li>
                        <li>
                          <a href="wishlist.html">Wishlist</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="team.html">Volunteers</a>
                    </li>
                    <li>
                      <a href="team-details.html">Volunteer Details</a>
                    </li>
                    <li>
                      <a href="add-team.html">Become A Volunteer</a>
                    </li>
                    <li>
                      <a href="gallery.html">Gallery</a>
                    </li>
                    <li>
                      <a href="pricing.html">Pricing</a>
                    </li>
                    <li>
                      <a href="faq.html">FAQS</a>
                    </li>
                    <li>
                      <a href="testimonial.html">Testimonials</a>
                    </li>
                    <li>
                      <a href="error.html">Error Page</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Blog</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="blog-details.html">Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">Contact Us</a>
                </li>
              </ul>
            </nav>
            <p className="header-notice">
              <img
                className="me-1"
                src="assets/img/icon/heart-icon.svg"
                alt="img"
              />
              Are you ready to help them? Let’s become a volunteers...
            </p>
          </div>
          <div className="header-button">
            <button
              type="button"
              className="icon-btn style2 searchBoxToggler d-lg-block d-none"
            >
              <i className="far fa-search" />
            </button>
            <button type="button" className="icon-btn sideMenuToggler">
              <span className="badge">5</span>
              <i className="fa-regular fa-cart-shopping" />
            </button>
            <a href="contact.html" className="th-btn style3 d-lg-block d-none">
              <i className="fas fa-heart me-2" /> Donate Now
            </a>
            <button type="button" className="icon-btn th-menu-toggle d-lg-none">
              <i className="far fa-bars" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/*==============================
    Breadcumb
============================== */}
  <div
    className="breadcumb-wrapper "
    // data-bg-src="/assets/img/bg/breadcumb-bg.jpg"
    data-overlay="theme"
  >
    <div className="container">
      <div className="breadcumb-content">
        <h1 className="breadcumb-title">About Us</h1>
        <ul className="breadcumb-menu">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>About Us</li>
        </ul>
      </div>
    </div>
  </div>
  {/*==============================
Feature Area  
==============================*/}
  <section className="space-top">
    <div className="container">
      <div className="row gy-4 justify-content-center">
        <div className="col-lg-3 col-md-6">
          <div className="feature-card">
            <div className="feature-card-bg-shape">
              <img
                src="/assets/img/shape/feature-card-bg-shape1-1.png"
                alt="img"
              />
            </div>
            <div className="box-icon">
              <img src="/assets/img/icon/feature-icon1-2.svg" alt="icon" />
            </div>
            <h3 className="box-title">Donor Friendly</h3>
            <p className="box-text">
              Stay updated with the latest news, events, and impact stories from
              our organization. Subscribe to our newsletter.
            </p>
            <a className="link-btn style2" href="about.html">
              View Details <i className="fa-solid fa-arrow-up-right ms-2" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="feature-card">
            <div className="feature-card-bg-shape">
              <img
                src="/assets/img/shape/feature-card-bg-shape1-1.png"
                alt="img"
              />
            </div>
            <div className="box-icon">
              <img src="/assets/img/icon/feature-icon1-1.svg" alt="icon" />
            </div>
            <h3 className="box-title">Fundraising Trust</h3>
            <p className="box-text">
              Stay updated with the latest news, events, and impact stories from
              our organization. Subscribe to our newsletter.
            </p>
            <a className="link-btn style2" href="about.html">
              View Details <i className="fa-solid fa-arrow-up-right ms-2" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="feature-card">
            <div className="feature-card-bg-shape">
              <img
                src="/assets/img/shape/feature-card-bg-shape1-1.png"
                alt="img"
              />
            </div>
            <div className="box-icon">
              <img src="/assets/img/icon/feature-icon1-2.svg" alt="icon" />
            </div>
            <h3 className="box-title">Charity Donate</h3>
            <p className="box-text">
              Stay updated with the latest news, events, and impact stories from
              our organization. Subscribe to our newsletter.
            </p>
            <a className="link-btn style2" href="about.html">
              View Details <i className="fa-solid fa-arrow-up-right ms-2" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="feature-card">
            <div className="feature-card-bg-shape">
              <img
                src="/assets/img/shape/feature-card-bg-shape1-1.png"
                alt="img"
              />
            </div>
            <div className="box-icon">
              <img src="/assets/img/icon/feature-icon1-1.svg" alt="icon" />
            </div>
            <h3 className="box-title">Treatment Help</h3>
            <p className="box-text">
              Stay updated with the latest news, events, and impact stories from
              our organization. Subscribe to our newsletter.
            </p>
            <a className="link-btn style2" href="about.html">
              View Details <i className="fa-solid fa-arrow-up-right ms-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>{" "}
  {/*==============================
About Area  
==============================*/}
  <div className="overflow-hidden space" id="about-sec">
    <div
      className="shape-mockup about-bg-shape1-1 jump-reverse"
      data-top="10%"
      data-right="5%"
    >
      <img src="/assets/img/shape/heart-shape1.png" alt="shape" />
    </div>
    <div className="container">
      <div className="row gy-4 align-items-center">
        <div className="col-xl-7">
          <div className="img-box1">
            <div
              className="img1"
              data-mask-src="/assets/img/normal/about_1_1-mask.png"
            >
              <img src="/assets/img/normal/about_1_1.png" alt="About" />
            </div>
            <div className="about-shape1-1 jump">
              <img src="/assets/img/shape/about_shape1_1.png" alt="img" />
            </div>
          </div>
        </div>
        <div className="col-xl-5">
          <div className="about-wrap1">
            <div className="title-area mb-30">
              <span className="sub-title before-none">About Us Donat</span>
              <h2 className="sec-title">
                We Believe that We can Save More Life is with you
              </h2>
              <p className="">
                Donet is the largest global crowdfunding community connecting
                nonprofits, donors, and companies in nearly every country. We
                help nonprofits from Afghanistan to Zimbabwe (and hundreds of
                places in between) access the tools, training, and support they
                need to be more effective and make our world a better place.
              </p>
            </div>
            <div className="checklist style2 list-two-column">
              <ul>
                <li>Charity For Foods</li>
                <li data-theme-color="var(--theme-color2)">
                  Charity For Water
                </li>
                <li data-theme-color="#FF5528">Charity For Education</li>
                <li data-theme-color="#122F2A">Charity For Medical</li>
              </ul>
            </div>
            <div className="btn-wrap mt-40">
              <a href="about.html" className="th-btn">
                About More
                <i className="fas fa-arrow-up-right ms-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*==============================
Team Area  
==============================*/}
  <section
    className="space"
    id="team-sec"
    data-bg-src="/assets/img/bg/gray-bg2.png"
  >
    <div
      className="shape-mockup team-bg-shape3-1 d-xxl-block d-none"
      data-top="0%"
      data-left="0%"
      data-bottom={0}
    >
      <img src="/assets/img/shape/team_bg_shape3_1.png" alt="img" />
    </div>
    <div
      className="shape-mockup team-bg-shape3-2 d-xxl-block d-none"
      data-top="0%"
      data-right="0%"
      data-bottom={0}
    >
      <img src="/assets/img/shape/team_bg_shape3_2.png" alt="img" />
    </div>
    <div
      className="shape-mockup team-bg-shape3-3 spin d-xxl-block d-none"
      data-top="15%"
      data-left="20%"
    >
      <div className="color-masking2">
        <div
          className="masking-src"
          data-mask-src="/assets/img/shape/team_bg_shape3_3.png"
        />
        <img src="/assets/img/shape/team_bg_shape3_3.png" alt="img" />
      </div>
    </div>
    <div
      className="shape-mockup team-bg-shape3-4 jump d-xxl-block d-none"
      data-top="18%"
      data-right="10%"
    >
      <img src="/assets/img/shape/team_bg_shape3_4.png" alt="img" />
    </div>
    <div
      className="shape-mockup team-bg-shape3-5 spin d-xxl-block d-none"
      data-bottom="18%"
      data-left="10%"
    >
      <img src="/assets/img/shape/team_bg_shape3_5.png" alt="img" />
    </div>
    <div
      className="shape-mockup team-bg-shape3-6 spin d-xxl-block d-none"
      data-bottom="10%"
      data-right="10%"
    >
      <div className="color-masking">
        <div
          className="masking-src"
          data-mask-src="/assets/img/shape/team_bg_shape3_6.png"
        />
        <img src="/assets/img/shape/team_bg_shape3_6.png" alt="img" />
      </div>
    </div>
    <div className="container">
      <div className="title-area text-center">
        <span className="sub-title after-none before-none">
          <i className="far fa-heart text-theme" /> Our Volunteer
        </span>
        <h2 className="sec-title">Meet The Optimistic Volunteer</h2>
      </div>
      <div className="slider-area">
        <div
          className="swiper th-slider has-shadow"
          id="teamSlider3"
          data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"2"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"4"}}}'
        >
          <div className="swiper-wrapper">
            {/* Single Item */}
            <div className="swiper-slide">
              <div className="th-team team-card3">
                <div className="team-img">
                  <img src="/assets/img/team/team_3_1.png" alt="Team" />
                </div>
                <div className="team-card-content">
                  <h3 className="box-title">
                    <a href="team-details.html">Michel Connor</a>
                  </h3>
                  <span className="team-desig">Volunteer</span>
                  <div className="th-social style2">
                    <a target="_blank" href="https://facebook.com/">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a target="_blank" href="https://twitter.com/">
                      <i className="fab fa-twitter" />
                    </a>
                    <a target="_blank" href="https://instagram.com/">
                      <i className="fab fa-instagram" />
                    </a>
                    <a target="_blank" href="https://behance.com/">
                      <i className="fab fa-behance" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Item */}
            <div className="swiper-slide">
              <div className="th-team team-card3">
                <div className="team-img">
                  <img src="/assets/img/team/team_3_2.png" alt="Team" />
                </div>
                <div className="team-card-content">
                  <h3 className="box-title">
                    <a href="team-details.html">Jessica Lauren</a>
                  </h3>
                  <span className="team-desig">Volunteer</span>
                  <div className="th-social style2">
                    <a target="_blank" href="https://facebook.com/">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a target="_blank" href="https://twitter.com/">
                      <i className="fab fa-twitter" />
                    </a>
                    <a target="_blank" href="https://instagram.com/">
                      <i className="fab fa-instagram" />
                    </a>
                    <a target="_blank" href="https://behance.com/">
                      <i className="fab fa-behance" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Item */}
            <div className="swiper-slide">
              <div className="th-team team-card3">
                <div className="team-img">
                  <img src="/assets/img/team/team_3_3.png" alt="Team" />
                </div>
                <div className="team-card-content">
                  <h3 className="box-title">
                    <a href="team-details.html">Daniel Thomas</a>
                  </h3>
                  <span className="team-desig">Volunteer</span>
                  <div className="th-social style2">
                    <a target="_blank" href="https://facebook.com/">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a target="_blank" href="https://twitter.com/">
                      <i className="fab fa-twitter" />
                    </a>
                    <a target="_blank" href="https://instagram.com/">
                      <i className="fab fa-instagram" />
                    </a>
                    <a target="_blank" href="https://behance.com/">
                      <i className="fab fa-behance" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Item */}
            <div className="swiper-slide">
              <div className="th-team team-card3">
                <div className="team-img">
                  <img src="/assets/img/team/team_3_4.png" alt="Team" />
                </div>
                <div className="team-card-content">
                  <h3 className="box-title">
                    <a href="team-details.html">Michel Vetory</a>
                  </h3>
                  <span className="team-desig">Volunteer</span>
                  <div className="th-social style2">
                    <a target="_blank" href="https://facebook.com/">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a target="_blank" href="https://twitter.com/">
                      <i className="fab fa-twitter" />
                    </a>
                    <a target="_blank" href="https://instagram.com/">
                      <i className="fab fa-instagram" />
                    </a>
                    <a target="_blank" href="https://behance.com/">
                      <i className="fab fa-behance" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Item */}
            <div className="swiper-slide">
              <div className="th-team team-card3">
                <div className="team-img">
                  <img src="/assets/img/team/team_3_5.png" alt="Team" />
                </div>
                <div className="team-card-content">
                  <h3 className="box-title">
                    <a href="team-details.html">Emma Mary</a>
                  </h3>
                  <span className="team-desig">Volunteer</span>
                  <div className="th-social style2">
                    <a target="_blank" href="https://facebook.com/">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a target="_blank" href="https://twitter.com/">
                      <i className="fab fa-twitter" />
                    </a>
                    <a target="_blank" href="https://instagram.com/">
                      <i className="fab fa-instagram" />
                    </a>
                    <a target="_blank" href="https://behance.com/">
                      <i className="fab fa-behance" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Item */}
            <div className="swiper-slide">
              <div className="th-team team-card3">
                <div className="team-img">
                  <img src="/assets/img/team/team_3_6.png" alt="Team" />
                </div>
                <div className="team-card-content">
                  <h3 className="box-title">
                    <a href="team-details.html">Alexander Joseph</a>
                  </h3>
                  <span className="team-desig">Volunteer</span>
                  <div className="th-social style2">
                    <a target="_blank" href="https://facebook.com/">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a target="_blank" href="https://twitter.com/">
                      <i className="fab fa-twitter" />
                    </a>
                    <a target="_blank" href="https://instagram.com/">
                      <i className="fab fa-instagram" />
                    </a>
                    <a target="_blank" href="https://behance.com/">
                      <i className="fab fa-behance" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Item */}
            <div className="swiper-slide">
              <div className="th-team team-card3">
                <div className="team-img">
                  <img src="/assets/img/team/team_3_7.png" alt="Team" />
                </div>
                <div className="team-card-content">
                  <h3 className="box-title">
                    <a href="team-details.html">Olivia Patricia</a>
                  </h3>
                  <span className="team-desig">Volunteer</span>
                  <div className="th-social style2">
                    <a target="_blank" href="https://facebook.com/">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a target="_blank" href="https://twitter.com/">
                      <i className="fab fa-twitter" />
                    </a>
                    <a target="_blank" href="https://instagram.com/">
                      <i className="fab fa-instagram" />
                    </a>
                    <a target="_blank" href="https://behance.com/">
                      <i className="fab fa-behance" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Item */}
            <div className="swiper-slide">
              <div className="th-team team-card3">
                <div className="team-img">
                  <img src="/assets/img/team/team_3_8.png" alt="Team" />
                </div>
                <div className="team-card-content">
                  <h3 className="box-title">
                    <a href="team-details.html">Ethan David</a>
                  </h3>
                  <span className="team-desig">Volunteer</span>
                  <div className="th-social style2">
                    <a target="_blank" href="https://facebook.com/">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a target="_blank" href="https://twitter.com/">
                      <i className="fab fa-twitter" />
                    </a>
                    <a target="_blank" href="https://instagram.com/">
                      <i className="fab fa-instagram" />
                    </a>
                    <a target="_blank" href="https://behance.com/">
                      <i className="fab fa-behance" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*==============================
Video Area  
==============================*/}
  <div className="video-area-3">
    <div
      className="shape-mockup video-bg-shape3-1"
      data-top={0}
      data-left={0}
      data-bottom={0}
    >
      <img src="/assets/img/shape/video_bg_shape3_1.png" alt="img" />
    </div>
    <div
      className="shape-mockup video-bg-shape3-2"
      data-top={0}
      data-right={0}
      data-bottom={0}
    >
      <img src="/assets/img/shape/video_bg_shape3_2.png" alt="img" />
    </div>
    <div className="video-thumb3-1 video-box-center">
      <img src="/assets/img/normal/video-thumb3-1.png" alt="img" />
      <a
        href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
        className="play-btn style7 popup-video"
      >
        <i className="fa-sharp fa-solid fa-play" />
      </a>
    </div>
  </div>
  {/*==============================
Counter Area  
==============================*/}
  <div className="">
    <div className="container">
      <div className="counter-wrap style2 bg-light">
        <div className="counter-card">
          <div className="media-body">
            <h2 className="box-number text-white">
              <span className="counter-number">15</span>k
              <span className="fw-light">+</span>
            </h2>
            <p className="box-text text-white">Incredible Volunteers</p>
          </div>
        </div>
        <div className="divider" />
        <div className="counter-card">
          <div className="media-body">
            <h2 className="box-number text-white">
              <span className="counter-number">1</span>k
              <span className="fw-light">+</span>
            </h2>
            <p className="box-text text-white">Successful Campaigns</p>
          </div>
        </div>
        <div className="divider" />
        <div className="counter-card">
          <div className="media-body">
            <h2 className="box-number text-white">
              <span className="counter-number">400</span>
              <span className="fw-light">+</span>
            </h2>
            <p className="box-text text-white">Monthly Donors</p>
          </div>
        </div>
        <div className="divider" />
        <div className="counter-card">
          <div className="media-body">
            <h2 className="box-number text-white">
              <span className="counter-number">35</span>k
              <span className="fw-light">+</span>
            </h2>
            <p className="box-text text-white">Team Support</p>
          </div>
        </div>
        <div className="divider" />
      </div>
    </div>
  </div>
  {/*==============================
Process Area  
==============================*/}
  <section className="space-top">
    <div
      className="shape-mockup process-shape1-1 jump-reverse d-xxl-block d-none"
      data-top="20%"
      data-left={0}
    >
      <img src="/assets/img/shape/hand-bg-shape2-1.png" alt="img" />
    </div>
    <div className="container">
      <div className="title-area text-center">
        <span className="sub-title after-none before-none">Work Process</span>
        <h2 className="sec-title">Our Donating Work Process</h2>
      </div>
      <div className="row gy-40 justify-content-center">
        <div className="col-lg-4 col-md-6 process-card-wrap">
          <div className="process-card">
            <div className="process-card-thumb-wrap">
              <div
                className="process-card-thumb"
                data-mask-src="/assets/img/process/process-card-shape.png"
              >
                <img src="/assets/img/process/process-card-1-1.png" alt="img" />
              </div>
              <div className="process-card-icon">
                <img src="/assets/img/icon/process-icon1-1.svg" alt="img" />
              </div>
              <div className="process-card-shape">
                <img
                  src="/assets/img/process/process-card-shape2.png"
                  alt="img"
                />
              </div>
            </div>
            <div className="box-content">
              <h3 className="box-title">Awareness &amp; Engagement</h3>
              <p className="box-text">
                To inform and engage potential donors and supporters about the
                charity’s mission and the cause it supports. Utilize various
                channels such as social media.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 process-card-wrap">
          <div className="process-card">
            <div className="process-card-thumb-wrap">
              <div
                className="process-card-thumb"
                data-mask-src="/assets/img/process/process-card-shape.png"
              >
                <img src="/assets/img/process/process-card-1-1.png" alt="img" />
              </div>
              <div className="process-card-icon">
                <img src="/assets/img/icon/process-icon1-2.svg" alt="img" />
              </div>
              <div className="process-card-shape">
                <img
                  src="/assets/img/process/process-card-shape2.png"
                  alt="img"
                />
              </div>
            </div>
            <div className="box-content">
              <h3 className="box-title">Donation Collection</h3>
              <p className="box-text">
                Set up a secure and user-friendly online donation platform that
                accepts multiple payment methods and allows for both one-time
                and recurring donations.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 process-card-wrap">
          <div className="process-card">
            <div className="process-card-thumb-wrap">
              <div
                className="process-card-thumb"
                data-mask-src="/assets/img/process/process-card-shape.png"
              >
                <img src="/assets/img/process/process-card-1-1.png" alt="img" />
              </div>
              <div className="process-card-icon">
                <img src="/assets/img/icon/process-icon1-3.svg" alt="img" />
              </div>
              <div className="process-card-shape">
                <img
                  src="/assets/img/process/process-card-shape2.png"
                  alt="img"
                />
              </div>
            </div>
            <div className="box-content">
              <h3 className="box-title">Impact and Accountability</h3>
              <p className="box-text">
                Allocate funds to specific projects and initiatives that align
                with the charity’s mission, ensuring that resources are used
                efficiently and effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*==============================
Testimonial Area  
==============================*/}
  <section className="testi-area-1 space" id="testi-sec">
    <div
      className="shape-mockup testi-bg-shape1-1 jump-reverse d-xl-block d-none"
      data-top="5%"
      data-right={0}
    >
      <img src="/assets/img/shape/footer-bg-shape3.png" alt="img" />
    </div>
    <div
      className="shape-mockup testi-bg-shape1-2"
      data-top="28%"
      data-left="5%"
    >
      <img src="/assets/img/shape/testimonial_shape1_1.png" alt="img" />
    </div>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="title-area text-center">
            <span className="sub-title">Testimonials</span>
            <h2 className="sec-title">What People Say About Our Charity</h2>
          </div>
        </div>
      </div>
      <div className="row gx-0 justify-content-end">
        <div className="col-lg-5">
          <div
            className="swiper th-slider testi-thumb-slider1"
            data-slider-options='{"effect":"fade","loop":false}'
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testi-box-img">
                  <img
                    className="testi-img"
                    src="/assets/img/testimonial/testi_1_1.png"
                    alt="img"
                  />
                  <div className="testi-card_review">
                    <i className="fas fa-star" />
                    5.0
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testi-box-img">
                  <img
                    className="testi-img"
                    src="/assets/img/testimonial/testi_1_2.png"
                    alt="img"
                  />
                  <div className="testi-card_review">
                    <i className="fas fa-star" />
                    5.0
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testi-box-img">
                  <img
                    className="testi-img"
                    src="/assets/img/testimonial/testi_1_1.png"
                    alt="img"
                  />
                  <div className="testi-card_review">
                    <i className="fas fa-star" />
                    5.0
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testi-box-img">
                  <img
                    className="testi-img"
                    src="/assets/img/testimonial/testi_1_2.png"
                    alt="img"
                  />
                  <div className="testi-card_review">
                    <i className="fas fa-star" />
                    5.0
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="testi-slider1">
            <div
              className="swiper th-slider testimonial-slider1"
              id="testiSlide1"
              data-slider-options='{"loop":false,"paginationType":"progressbar","effect":"fade", "autoHeight": "true", "thumbs":{"swiper":".testi-thumb-slider1"}}'
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testi-card">
                    <p className="box-text">
                      “Stay informed about our upcoming events and campaigns.
                      Whether its a fundraising gala, a charity run, or a
                      community outreach program, there are plenty of ways to
                      get involved and support our cause. Check our event
                      calendar for details. We prioritize your security. Our
                      donation process uses the latest encryption technology to
                      protect your personal and financial information. Donate
                      with confidence knowing”
                    </p>
                    <h3 className="box-title">Alex Furnandes</h3>
                    <p className="box-desig">CEO, Founder</p>
                    <div
                      className="quote-icon"
                      data-mask-src="/assets/img/icon/quote2.svg"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-card">
                    <p className="box-text">
                      “Our donation process uses the latest encryption
                      technology to protect your personal and financial
                      information. Donate with confidence knowing Stay informed
                      about our upcoming events and campaigns. Whether its a
                      fundraising gala, a charity run, or a community outreach
                      program, there are plenty of ways to get involved and
                      support our cause. Check our event calendar for details.
                      We prioritize your security.”
                    </p>
                    <h3 className="box-title">Mustafa Kamal</h3>
                    <p className="box-desig">CEO, Founder</p>
                    <div
                      className="quote-icon"
                      data-mask-src="/assets/img/icon/quote2.svg"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-card">
                    <p className="box-text">
                      “Stay informed about our upcoming events and campaigns.
                      Whether its a fundraising gala, a charity run, or a
                      community outreach program, there are plenty of ways to
                      get involved and support our cause. Check our event
                      calendar for details. We prioritize your security. Our
                      donation process uses the latest encryption technology to
                      protect your personal and financial information. Donate
                      with confidence knowing”
                    </p>
                    <h3 className="box-title">Alex Furnandes</h3>
                    <p className="box-desig">CEO, Founder</p>
                    <div
                      className="quote-icon"
                      data-mask-src="/assets/img/icon/quote2.svg"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-card">
                    <p className="box-text">
                      “Our donation process uses the latest encryption
                      technology to protect your personal and financial
                      information. Donate with confidence knowing Stay informed
                      about our upcoming events and campaigns. Whether its a
                      fundraising gala, a charity run, or a community outreach
                      program, there are plenty of ways to get involved and
                      support our cause. Check our event calendar for details.
                      We prioritize your security.”
                    </p>
                    <h3 className="box-title">Mustafa Kamal</h3>
                    <p className="box-desig">CEO, Founder</p>
                    <div
                      className="quote-icon"
                      data-mask-src="/assets/img/icon/quote2.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="slider-pagination" />
              <div className="slider-pagination2" />
            </div>
            <div className="icon-box">
              <button
                data-slider-prev="#testiSlide1"
                className="slider-arrow default style-border slider-prev"
              >
                <i className="far fa-arrow-left" />
              </button>
              <button
                data-slider-next="#testiSlide1"
                className="slider-arrow default style-border slider-next"
              >
                <i className="far fa-arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*==============================
Brand Area  
==============================*/}
  <div className="space-bottom overflow-hidden brand-area-1">
    <div className="container">
      <div className="brand-wrap1 p-0 m-0 text-center">
        <h3 className="brand-wrap-title">
          Trusted by over{" "}
          <span className="text-theme2">
            <span className="counter-number">90</span>K+
          </span>{" "}
          companies worldwide
        </h3>
        <div
          className="swiper th-slider"
          id="brandSlider1"
          data-slider-options='{"breakpoints":{"0":{"slidesPerView":2},"576":{"slidesPerView":"2"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"4"},"1400":{"slidesPerView":"5", "spaceBetween": "90"}}}'
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <a href="blog.html" className="brand-box">
                <img src="/assets/img/brand/brand1-1.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="blog.html" className="brand-box">
                <img src="/assets/img/brand/brand1-2.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="blog.html" className="brand-box">
                <img src="/assets/img/brand/brand1-3.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="blog.html" className="brand-box">
                <img src="/assets/img/brand/brand1-4.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="blog.html" className="brand-box">
                <img src="/assets/img/brand/brand1-5.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="blog.html" className="brand-box">
                <img src="/assets/img/brand/brand1-1.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="blog.html" className="brand-box">
                <img src="/assets/img/brand/brand1-2.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="blog.html" className="brand-box">
                <img src="/assets/img/brand/brand1-3.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="blog.html" className="brand-box">
                <img src="/assets/img/brand/brand1-4.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="blog.html" className="brand-box">
                <img src="/assets/img/brand/brand1-5.svg" alt="Brand Logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*==============================
	Footer Area
==============================*/}
  <footer
    className="footer-wrapper footer-default"
    data-bg-src="/assets/img/bg/footer-default-bg-mask.png"
  >
    <div
      className="footer-bg-shape2 shape-mockup jump"
      data-top="20%"
      data-right={0}
    >
      <img src="/assets/img/shape/footer-bg-shape3.png" alt="img" />
    </div>
    <div
      className="footer-bg-shape3 shape-mockup d-none"
      data-bottom={0}
      data-right={0}
    >
      <img src="/assets/img/shape/footer-bg-shape2.png" alt="img" />
    </div>
    <div className="footer-top">
      <div className="container">
        <div className="subscribe-box">
          <div className="row gy-40 align-items-center justify-content-center">
            <div className="col-xl-6">
              <h4 className="subscribe-box_title">
                Subscribe to Our Newsletter
              </h4>
              <p className="subscribe-box_text">
                Regular inspections and feedback mechanisms
              </p>
            </div>
            <div className="col-xl-6 col-lg-8">
              <form className="newsletter-form">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Enter Email Address"
                    required=""
                  />
                </div>
                <button type="submit" className="th-btn style3">
                  <i className="fas fa-paper-plane" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="widget-area">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-6 col-xl-auto">
            <div className="widget footer-widget">
              <div className="th-widget-about">
                <div className="about-logo">
                  <a href="index.html">
                    <img src="/assets/img/logo-white.svg" alt="Donat" />
                  </a>
                </div>
                <p className="about-text">
                  {" "}
                  Our secure online donation platform allows you to make
                  contributions quickly and safely. Choose from various.
                </p>
                <a href="contact.html" className="th-btn">
                  <i className="fas fa-heart me-2" /> Donate Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-auto">
            <div className="widget widget_nav_menu footer-widget">
              <h3 className="widget_title">Quick Links</h3>
              <div className="menu-all-pages-container">
                <ul className="menu">
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="blog.html">Our News</a>
                  </li>
                  <li>
                    <a href="about.html">Our Campaign</a>
                  </li>
                  <li>
                    <a href="contact.html">Privacy policy</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-auto">
            <div className="widget widget_nav_menu footer-widget">
              <h3 className="widget_title">Our Service</h3>
              <div className="menu-all-pages-container">
                <ul className="menu">
                  <li>
                    <a href="donate-now.html">Give Donation</a>
                  </li>
                  <li>
                    <a href="faq.html">Education Support</a>
                  </li>
                  <li>
                    <a href="faq.html">Food Support</a>
                  </li>
                  <li>
                    <a href="faq.html">Health Support</a>
                  </li>
                  <li>
                    <a href="gallery.html">Our Campaign </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-auto">
            <div className="widget footer-widget">
              <div className="th-widget-contact">
                <h3 className="widget_title">Contact Us</h3>
                <div className="info-card">
                  <div className="box-icon">
                    <i className="fal fa-phone" />
                    <div
                      className="bg-shape1"
                      data-mask-src="/assets/img/shape/info_card_icon_bg_shape_1_1.png"
                    />
                    <div
                      className="bg-shape2"
                      data-mask-src="/assets/img/shape/info_card_icon_bg_shape_1_1.png"
                    />
                  </div>
                  <div className="box-content">
                    <p className="box-text">Call us any time:</p>
                    <h4 className="box-title">
                      <a href="tel:16336547896">+163-3654-7896</a>
                    </h4>
                  </div>
                </div>
                <div className="info-card">
                  <div className="box-icon">
                    <i className="fal fa-envelope-open" />
                    <div
                      className="bg-shape1"
                      data-mask-src="/assets/img/shape/info_card_icon_bg_shape_1_1.png"
                    />
                    <div
                      className="bg-shape2"
                      data-mask-src="/assets/img/shape/info_card_icon_bg_shape_1_1.png"
                    />
                  </div>
                  <div className="box-content">
                    <p className="box-text">Email us any time:</p>
                    <h4 className="box-title">
                      <a href="mailto:info@donat.com">info@donat.com</a>
                    </h4>
                  </div>
                </div>
                <div className="th-social style2">
                  <a href="https://www.facebook.com/">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="https://www.twitter.com/">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="https://www.youtube.com/">
                    <i className="fab fa-youtube" />
                  </a>
                  <a href="https://www.linkedin.com/">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-wrap">
      <div className="container">
        <div className="row justify-content-center gy-3 align-items-center">
          <div className="col-lg-12">
            <p className="copyright-text text-center">
              <i className="fal fa-copyright" /> Copyright 2024{" "}
              <a href="index.html">Donat</a>. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/*********************************
			Code End  Here 
	******************************** */}
  {/* Scroll To Top */}
  <div className="scroll-top">
    <svg
      className="progress-circle svg-content"
      width="100%"
      height="100%"
      viewBox="-1 -1 102 102"
    >
      <path
        d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
        style={{
          transition: "stroke-dashoffset 10ms linear 0s",
          strokeDasharray: "307.919, 307.919",
          strokeDashoffset: "307.919"
        }}
      />
    </svg>
  </div>
</>
  )
}

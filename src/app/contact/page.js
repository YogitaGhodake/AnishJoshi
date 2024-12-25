import React from 'react'

const ContactUS = () => {
  return (
    <>
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
                  src="/assets/img/product/product_thumb_1_1.png"
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
                  src="/assets/img/product/product_thumb_1_2.png"
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
                  src="/assets/img/product/product_thumb_1_3.png"
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
                  src="/assets/img/product/product_thumb_1_4.png"
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
                  src="/assets/img/product/product_thumb_1_5.png"
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
          <img src="/assets/img/logo.svg" alt="Donat" />
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
                <img src="/assets/img/logo.svg" alt="Donat" />
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
                    data-mask-src="/assets/img/shape/info_card_icon_bg_shape_1_1.png"
                  />
                  <div
                    className="bg-shape2"
                    data-mask-src="/assets/img/shape/info_card_icon_bg_shape_1_1.png"
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
                  <img src="/assets/img/logo-white.svg" alt="Donat" />
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
                                  src="/assets/img/pages/index.jpg"
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
                                  src="/assets/img/pages/home-2.jpg"
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
                                  src="/assets/img/pages/home-3.jpg"
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
                src="/assets/img/icon/heart-icon.svg"
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
    data-bg-src="/assets/img/bg/breadcumb-bg.jpg"
    data-overlay="theme"
  >
    <div className="container">
      <div className="breadcumb-content">
        <h1 className="breadcumb-title">Contact us</h1>
        <ul className="breadcumb-menu">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>
  </div>
  {/*==============================
Contact Area   
==============================*/}
  <div className="space overflow-hidden contact-area-1 position-relative z-index-common">
    <div className="container">
      <div className="contact-wrap1">
        <div className="row gx-60 gy-40">
          <div className="col-xl-4 col-lg-5">
            <div className="contact-feature">
              <div className="box-icon">
                <i className="fas fa-map-location-dot" />
              </div>
              <div className="media-body">
                <h3 className="box-title">Address</h3>
                <p className="box-text">
                  15 Maniel Lane, Front Line Berlin, Germany
                </p>
              </div>
            </div>
            <div className="contact-feature">
              <div className="box-icon" data-theme-color="#FFAC00">
                <i className="fas fa-phone-volume" />
              </div>
              <div className="media-body">
                <h3 className="box-title">Phone</h3>
                <p className="box-text">
                  <a href="tel:16363599852">(+58-125) 25-3158</a>
                </p>
                <p className="box-text">
                  <a href="tel:16363599852">+163-524-4521</a>
                </p>
              </div>
            </div>
            <div className="contact-feature">
              <div className="box-icon" data-theme-color="#122F2A">
                <i className="fas fa-envelope" />
              </div>
              <div className="media-body">
                <h3 className="box-title">Email</h3>
                <p className="box-text">
                  <a href="mailto:info@donet.com">info@donet.com</a>
                </p>
                <p className="box-text">
                  <a href="mailto:allinfo@donet.com">allinfo@donet.com</a>
                </p>
              </div>
            </div>
            <div className="contact-feature" data-theme-color="#FF5528">
              <div className="box-icon">
                <i className="fas fa-comment-question" />
              </div>
              <div className="media-body">
                <h3 className="box-title">Have Questions?</h3>
                <p className="box-text">
                  Discover more by visiting us or joining our community
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-7">
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.7310056272386!2d89.2286059153658!3d24.00527418490799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b97badc6151%3A0x30b048c9fb2129bc!2sAngfuztheme!5e0!3m2!1sen!2sbd!4v1651028958211!5m2!1sen!2sbd"
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="contact-page-form-wrap space-top">
        <div className="row gy-40">
          <div className="col-xl-6 align-self-end">
            <div className="contact-thumb1-1">
              <img src="/assets/img/normal/contact_1_1.png" alt="img" />
            </div>
          </div>
          <div className="col-xl-6">
            {/*==============================
Contact Area  
==============================*/}
            <div className="contact-form-v1 contact-page-form">
              <form
                action="https://html.themeholy.com/donat/demo/mail.php"
                method="POST"
                className="contact-form style-border ajax-contact"
              >
                <div className="row">
                  <div className="form-group style-border col-12">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="form-group style-border col-12">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="form-group style-border col-12">
                    <input
                      type="number"
                      className="form-control"
                      name="number"
                      id="number"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="form-group style-border col-12">
                    <textarea
                      name="message"
                      id="message"
                      cols={30}
                      rows={3}
                      className="form-control"
                      placeholder="Type Your Message"
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-btn col-12">
                    <button className="th-btn">Send a Message</button>
                  </div>
                </div>
                <p className="form-messages mb-0 mt-3" />
              </form>
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

export default ContactUS
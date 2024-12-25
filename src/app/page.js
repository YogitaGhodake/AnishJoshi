"use client"

import Image from "next/image";
import styles from "./page.module.css";



export default function Home() {
  return (
    <div>
     <>
  {/*==============================
     Preloader
  ==============================*/}
  {/* <div className="preloader ">
    <button className="th-btn style2 preloaderCls">Cancel Preloader </button>
    <div className="preloader-inner">
      <span className="loader">
        Anish Joshi
        <span className="loading-text">Anish Joshi</span>
      </span>
    </div>
  </div> */}
  {/*==============================
    Sidemenu
============================== */}
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
  <header className="th-header header-layout2">
    <div className="sticky-wrapper">
      {/* Main Menu Area */}
      <div className="container">
        <div className="menu-area">
          <div className="header-logo">
            <a href="index.html">
              <img src="/assets/img/logo.svg" alt="Donat" />
            </a>
          </div>
          <div className="menu-area-wrap">
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
            <a href="contact.html" className="th-btn style3 d-xl-block d-none">
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
Hero Area
==============================*/}
  <div className="th-hero-wrapper hero-3" id="hero">
    <div
      className="shape-mockup hero-shape-3-1 d-lg-block d-none"
      data-top="20%"
      data-left="50%"
    >
      <div className="color-masking shake">
        <div
          className="masking-src"
          data-mask-src="/assets/img/hero/hero-bg-shape2-3.png"
        />
        <img src="/assets/img/hero/hero-bg-shape2-3.png" alt="shape" />
      </div>
    </div>
    <div
      className="shape-mockup hero-shape-3-2 jump"
      data-top="25%"
      data-left="5%"
    >
      <div className="color-masking">
        <div
          className="masking-src"
          data-mask-src="/assets/img/hero/hero-bg-shape2-1.png"
        />
        <img src="/assets/img/hero/hero-bg-shape2-1.png" alt="shape" />
      </div>
    </div>
    <div
      className="shape-mockup hero-shape-3-3 jump"
      data-bottom={0}
      data-left="-2%"
    >
      <div className="color-masking2">
        <div
          className="masking-src"
          data-mask-src="/assets/img/shape/hand-shape3.png"
        />
        <img src="/assets/img/shape/hand-shape3.png" alt="shape" />
      </div>
    </div>
    <div
      className="hero-bg-3-1"
      data-bg-src="/assets/img/hero/hero_bg_3_1.jpg"
      data-mask-src="/assets/img/hero/hero-bg-shape3-1.png"
    />
    <div className="container">
      <div className="row gx-40 align-items-center">
        <div className="col-lg-6">
          <div className="hero-style3">
            <span className="sub-title after-none">Give Hope For Homeless</span>
            <h1 className="hero-title">
              <span className="title1">Donate For A</span>
              <span className="title2">
                Better <span className="text-theme2 d-inline-block">World</span>
              </span>
            </h1>
            <p className="hero-text">
              Explore the variety of volunteer opportunities available. From
              event planning and fundraising to fieldwork and administrative
              support
            </p>
            <div className="btn-wrap">
              <a href="about.html" className="th-btn">
                Discover Now
                <i className="fa-solid fa-arrow-up-right ms-2" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                className="play-btn style3 popup-video"
              >
                <i className="fas fa-play" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*======== / Hero Section ========*/}
  {/*==============================
Feature Area  
==============================*/}
  <section className="feature-area-1 position-relative space-bottom">
    <div
      className="feature-bg-wrap"
      data-bg-src="/assets/img/bg/gray-bg2.png"
      data-mask-src="/assets/img/bg/feature-bg-mask-1.png"
    >
      <div className="feature-bg-shape1-1" />
    </div>
    <div className="container">
      <div className="row gy-30 gx-30 justify-content-end">
        <div className="col-xl-3 col-lg-4">
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
        <div className="col-xl-3 col-lg-4">
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
        <div className="col-xl-3 col-lg-4">
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
      className="shape-mockup about-bg-shape2-1 jump-reverse d-lg-inline-block d-none"
      data-top="10%"
      data-right="5%"
    >
      <img src="/assets/img/shape/heart-shape1.png" alt="shape" />
    </div>
    <div
      className="shape-mockup about-bg-shape3-1 jump"
      data-bottom="20%"
      data-right="5%"
    >
      <div className="color-masking2">
        <div
          className="masking-src"
          data-mask-src="/assets/img/shape/about_shape3_1.png"
        />
        <img src="/assets/img/shape/about_shape3_1.png" alt="img" />
      </div>
    </div>
    <div className="container">
      <div className="row gy-60 align-items-center">
        <div className="col-xl-6">
          <div className="img-box3">
            <div className="img1">
              <img src="/assets/img/normal/about_3_1.png" alt="About" />
            </div>
            <div className="img2 jump">
              <img src="/assets/img/normal/about_3_2.png" alt="img" />
            </div>
            <div className="about-shape3-1 jump-reverse">
              <div className="color-masking2">
                <div
                  className="masking-src"
                  data-mask-src="/assets/img/shape/about_shape1_1.png"
                />
                <img src="/assets/img/shape/about_shape1_1.png" alt="img" />
              </div>
            </div>
            <div className="year-counter movingX">
              <div className="year-counter_number">
                <span className="counter-number">266300</span>+ Children in
                Africa Need School
              </div>
              <a className="link-btn style2" href="contact.html">
                Become a Volunteer
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="title-area mb-40">
            <span className="sub-title after-none before-none">
              <i className="text-theme far fa-heart" /> About Us
            </span>
            <h2 className="sec-title">
              Give Time, Change Lives Volunteer Opportunities
            </h2>
            <p>
              Our secure online donation platform allows you to make
              contribution quickly and safely. Choose from various payment
              methods and set up one-time or recurring donations with ease. Your
              support helps us continue our mission.
            </p>
          </div>
          <div className="about-wrap3">
            <p className="mb-30">
              Discover the inspiring stories of individuals and communities
              transformed by our programs. Our success stories highlight the
              real-life impact of your donations and the resilience of those we
              help. These narratives showcase the power of compassion &amp;
              generosity.
            </p>
            <div className="about-feature-grid">
              <div className="box-icon">
                <img src="/assets/img/icon/about-icon3-1.svg" alt="icon" />
              </div>
              <div className="media-body">
                <h4 className="box-title">32 Years of Experiences</h4>
                <p className="box-text">
                  Join our monthly giving program to provide consistent support
                  to our initiatives. Regular contributions,
                </p>
              </div>
            </div>
            <div className="btn-wrap mt-40">
              <a href="about.html" className="th-btn style3 style-radius">
                About More <i className="fa-solid fa-arrow-up-right ms-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*==============================
Service Area  
==============================*/}
  <section
    className="overflow-hidden space"
    id="service-sec"
    data-bg-src="/assets/img/bg/gray-bg2.png"
  >
    <div
      className="shape-mockup service-bg-shape2-1 d-xxl-inline-block d-none"
      data-bottom={0}
      data-left={0}
    >
      <img src="/assets/img/shape/service_bg_shape3_1.png" alt="img" />
    </div>
    <div className="container">
      <div className="row gx-80">
        <div className="col-xl-6">
          <div className="service-wrap2">
            <div className="title-area">
              <span className="sub-title after-none before-none">
                <i className="far fa-heart text-theme" /> Our Services
              </span>
              <h2 className="sec-title">
                We’re Helping People i Need Around the World
              </h2>
              <p className="sec-text">
                Discover the inspiring stories of individuals and communities
                transformed by our programs. Our success stories highlight the
                real-life impact of your donations and the resilience of those
                we help. These narratives showcase the power of compassion and
                generosity.
              </p>
            </div>
            <div className="service-bg-shape2-2">
              <img src="/assets/img/service/service-thumb3-1.png" alt="img" />
              <div className="service-bg-shape2-3">
                <div className="color-masking2">
                  <div
                    className="masking-src"
                    data-mask-src="/assets/img/shape/service_bg_shape3_2.png"
                  />
                  <img
                    src="/assets/img/shape/service_bg_shape3_2.png"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="row gy-30">
            <div className="col-12">
              <div className="service-card2">
                <div className="service-card-icon">
                  <img
                    src="/assets/img/icon/service-icon/service-card-icon1-1.svg"
                    alt="Icon"
                  />
                </div>
                <div className="box-content">
                  <h3 className="box-title">
                    <a href="about.html">Healthy Foods</a>
                  </h3>
                  <p className="box-text">
                    Share stories and experiences from current volunteers to
                    inspire others to join. Allow user to sign up for volunteer
                    opportunities.
                  </p>
                  <a href="about.html" className="icon-btn">
                    <i className="fas fa-arrow-up-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="service-card2">
                <div className="service-card-icon">
                  <img
                    src="/assets/img/icon/service-icon/service-card-icon1-2.svg"
                    alt="Icon"
                  />
                </div>
                <div className="box-content">
                  <h3 className="box-title">
                    <a href="about.html">Education Support</a>
                  </h3>
                  <p className="box-text">
                    Share stories and experiences from current volunteers to
                    inspire others to join. Allow user to sign up for volunteer
                    opportunities.
                  </p>
                  <a href="about.html" className="icon-btn">
                    <i className="fas fa-arrow-up-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="service-card2">
                <div className="service-card-icon">
                  <img
                    src="/assets/img/icon/service-icon/service-card-icon1-3.svg"
                    alt="Icon"
                  />
                </div>
                <div className="box-content">
                  <h3 className="box-title">
                    <a href="about.html">Medical Help</a>
                  </h3>
                  <p className="box-text">
                    Share stories and experiences from current volunteers to
                    inspire others to join. Allow user to sign up for volunteer
                    opportunities.
                  </p>
                  <a href="about.html" className="icon-btn">
                    <i className="fas fa-arrow-up-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*==============================
Cta Area  
==============================*/}
  <section className="" id="contact-sec">
    <div className="cta-wrap3 style2 bg-theme-dark">
      <div className="row gx-0">
        <div className="col-xl-7">
          <div className="cta-content-wrap">
            <div className="title-area text-xl-start text-center mb-40">
              <span className="sub-title after-none before-none justify-content-xl-start justify-content-center">
                Call To Action
              </span>
              <h2 className="sec-title text-white">
                Give Your Big Hand Forever
              </h2>
            </div>
            <form
              action="https://html.themeholy.com/donat/demo/mail.php"
              method="POST"
              className="contact-form ajax-contact"
            >
              <div className="row">
                <div className="form-group col-md-6 style-dark">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group col-md-6 style-dark">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email Address..."
                  />
                </div>
                <div className="form-group col-xxl-4 col-md-6 style-dark">
                  <input
                    type="number"
                    className="form-control"
                    name="number"
                    id="number"
                    placeholder="Phone Number..."
                  />
                </div>
                <div className="form-group col-xxl-4 col-md-6 style-dark">
                  <input
                    type="number"
                    className="form-control"
                    name="zip"
                    id="zip"
                    placeholder="Zip Code..."
                  />
                </div>
                <div className="form-group col-xxl-4 col-xl-12">
                  <button className="th-btn style3 w-100">
                    Get Involved Today
                  </button>
                </div>
              </div>
              <p className="form-messages mb-0 mt-3" />
            </form>
          </div>
        </div>
        <div className="col-xl-5">
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
  </section>
  {/*==============================
Donation Area  
==============================*/}
  <section className="space overflow-hidden" id="donation-sec">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="title-area text-center">
            <span className="sub-title before-none after-none">
              <i className="far fa-heart text-theme" /> Lets Start Donating
            </span>
            <h2 className="sec-title">
              See Your Impact: Transparent Donation Causes
            </h2>
          </div>
        </div>
      </div>
      <div className="row gy-30">
        <div className="col-xl-6">
          <div className="donation-card style3">
            <div className="box-thumb">
              <img src="/assets/img/donation/donation2-1.png" alt="image" />
              <div className="donation-card-tag">85%</div>
              <div
                className="donation-card-shape"
                data-mask-src="/assets/img/donation/donation-card-shape2-1.png"
              />
            </div>
            <div className="box-content">
              <h3 className="box-title">
                <a href="blog-details.html">
                  Your Little Help Can Heal Their Helps
                </a>
              </h3>
              <p>
                Join our community of dedicated supporter by becoming member.
                Enjoy exclusive benefit.
              </p>
              <div className="donation-card_progress-wrap">
                <div className="progress">
                  <div className="progress-bar" style={{ width: "85%" }}></div>
                </div>
                <div className="donation-card_progress-content">
                  <span className="donation-card_raise">
                    Raised{" "}
                    <span className="donation-card_raise-number">
                      $45,000.00
                    </span>
                  </span>
                  <span className="donation-card_goal">
                    Goal{" "}
                    <span className="donation-card_goal-number">
                      $60,000.00
                    </span>
                  </span>
                </div>
              </div>
              <a href="blog-details.html" className="th-btn style6">
                Donate Now <i className="fas fa-arrow-up-right ms-2" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="donation-card style3">
            <div className="box-thumb">
              <img src="/assets/img/donation/donation2-2.png" alt="image" />
              <div className="donation-card-tag bg-theme2">85%</div>
              <div
                className="donation-card-shape"
                data-mask-src="/assets/img/donation/donation-card-shape2-1.png"
              />
            </div>
            <div className="box-content">
              <h3 className="box-title">
                <a href="blog-details.html">
                  Help Children poor Insurance &amp; Medical
                </a>
              </h3>
              <p>
                Join our community of dedicated supporter by becoming member.
                Enjoy exclusive benefit.
              </p>
              <div className="donation-card_progress-wrap">
                <div className="progress">
                  <div className="progress-bar" style={{ width: "85%" }}></div>
                </div>
                <div className="donation-card_progress-content">
                  <span className="donation-card_raise">
                    Raised{" "}
                    <span className="donation-card_raise-number">
                      $45,000.00
                    </span>
                  </span>
                  <span className="donation-card_goal">
                    Goal{" "}
                    <span className="donation-card_goal-number">
                      $60,000.00
                    </span>
                  </span>
                </div>
              </div>
              <a href="blog-details.html" className="th-btn style6">
                Donate Now <i className="fas fa-arrow-up-right ms-2" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="donation-card style3">
            <div className="box-thumb">
              <img src="/assets/img/donation/donation2-3.png" alt="image" />
              <div className="donation-card-tag">85%</div>
              <div
                className="donation-card-shape"
                data-mask-src="/assets/img/donation/donation-card-shape2-1.png"
              />
            </div>
            <div className="box-content">
              <h3 className="box-title">
                <a href="blog-details.html">
                  Help us touch their lives of these youths
                </a>
              </h3>
              <p>
                Join our community of dedicated supporter by becoming member.
                Enjoy exclusive benefit.
              </p>
              <div className="donation-card_progress-wrap">
                <div className="progress">
                  <div className="progress-bar" style={{ width: "85%" }}></div>
                </div>
                <div className="donation-card_progress-content">
                  <span className="donation-card_raise">
                    Raised{" "}
                    <span className="donation-card_raise-number">
                      $45,000.00
                    </span>
                  </span>
                  <span className="donation-card_goal">
                    Goal{" "}
                    <span className="donation-card_goal-number">
                      $60,000.00
                    </span>
                  </span>
                </div>
              </div>
              <a href="blog-details.html" className="th-btn style6">
                Donate Now <i className="fas fa-arrow-up-right ms-2" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="donation-card style3">
            <div className="box-thumb">
              <img src="/assets/img/donation/donation2-4.png" alt="image" />
              <div className="donation-card-tag bg-theme2">85%</div>
              <div
                className="donation-card-shape"
                data-mask-src="/assets/img/donation/donation-card-shape2-1.png"
              />
            </div>
            <div className="box-content">
              <h3 className="box-title">
                <a href="blog-details.html">
                  Raise Fund for Clean &amp; Healthy Water
                </a>
              </h3>
              <p>
                Join our community of dedicated supporter by becoming member.
                Enjoy exclusive benefit.
              </p>
              <div className="donation-card_progress-wrap">
                <div className="progress">
                  <div className="progress-bar" style={{ width: "85%" }}></div>
                </div>
                <div className="donation-card_progress-content">
                  <span className="donation-card_raise">
                    Raised{" "}
                    <span className="donation-card_raise-number">
                      $45,000.00
                    </span>
                  </span>
                  <span className="donation-card_goal">
                    Goal{" "}
                    <span className="donation-card_goal-number">
                      $60,000.00
                    </span>
                  </span>
                </div>
              </div>
              <a href="blog-details.html" className="th-btn style6">
                Donate Now <i className="fas fa-arrow-up-right ms-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*==============================
Why Choose Us Area  
==============================*/}
  <div className="why-sec-1 overflow-hidden space-bottom overflow-hidden">
    <div className="container">
      <div className="row gx-80">
        <div className="col-xl-6">
          <div className="why-img-box1">
            <div className="img1">
              <img src="/assets/img/normal/why-thumb1-1.png" alt="img" />
            </div>
            <div className="why-img-shape">
              <img src="/assets/img/shape/why_shape1_1.png" alt="img" />
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="why-wrap-1">
            <div className="title-area mb-25">
              <span className="sub-title after-none before-none">
                <i className="far fa-heart text-theme" /> Why Choose Us
              </span>
              <h2 className="sec-title">Together, We Can Make A Difference</h2>
              <p>
                Our secure online donation platform allows you to make
                contribution quickly and safely. Choose from various payment
                methods and set up one-time or recurring donations with ease.
                Your support helps us continue our mission.
              </p>
            </div>
            <div className="progress-bar-wrap">
              <h3 className="progress-bar_title">Donations</h3>
              <div className="progress">
                <div
                  className="progress-bar bg-theme"
                  style={{ width: "55%" }}
                ></div>
                <div className="progress-value text-theme">
                  <span className="counter-number">55</span>%
                </div>
              </div>
            </div>
            <div className="progress-bar-wrap mt-20">
              <h3 className="progress-bar_title">Charity</h3>
              <div className="progress">
                <div
                  className="progress-bar bg-theme2"
                  style={{ width: "85%" }}
                ></div>
                <div className="progress-value text-theme2">
                  <span className="counter-number">85</span>%
                </div>
              </div>
            </div>
            <div className="mt-40">
              <div className="row gy-40">
                <div className="col-sm-6">
                  <div className="why-feature-grid">
                    <div className="box-icon bg-theme">
                      <img src="/assets/img/icon/why-icon1-1.svg" alt="icon" />
                    </div>
                    <div className="media-body">
                      <h4 className="box-title">Global Community</h4>
                      <p className="box-text">
                        Volunteers are the heart of our organization. Join our
                        team to make a hands.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="why-feature-grid">
                    <div className="box-icon bg-theme2">
                      <img src="/assets/img/icon/why-icon1-2.svg" alt="icon" />
                    </div>
                    <div className="media-body">
                      <h4 className="box-title">Crowdfunding</h4>
                      <p className="box-text">
                        Join our monthly giving program to provide consistent
                        support
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-wrap mt-35">
              <a href="about.html" className="th-btn">
                Learn More <i className="fas fa-arrow-up-right ms-2" />
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
Price Area  
==============================*/}
  <section className="space overflow-hidden">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-7">
          <div className="title-area text-center">
            <span className="sub-title after-none before-none">
              <i className="far fa-heart text-theme" /> Pricing Plan
            </span>
            <h2 className="sec-title">
              The terms and Conditions Select Your Plan
            </h2>
          </div>
        </div>
      </div>
      <div className="row gy-30 justify-content-center">
        <div className="col-xl-12 col-lg-4 col-md-6">
          <div className="price-card2">
            <div className="price-card-title-wrap">
              <h3 className="price-card_title">Free This Plan </h3>
              <p className="price-card_text">
                Refund policies vary based on the date of cancellation.
              </p>
            </div>
            <div className="price-card-price-wrap">
              <h4 className="price-card_price">
                <span className="currency">$</span>
                00
              </h4>
            </div>
            <div className="price-card_content">
              <div className="checklist">
                <ul>
                  <li>
                    <i className="fas fa-circle-check" /> We are privileged to
                    work.
                  </li>
                  <li>
                    <i className="fas fa-circle-check" /> 24/7 system monitoring
                  </li>
                  <li className="unavailable">
                    <i className="fas fa-circle-check" /> Encourage team member
                  </li>
                  <li className="unavailable">
                    <i className="fas fa-circle-check" /> Remote best support
                  </li>
                </ul>
              </div>
              <a href="pricing.html" className="th-btn">
                Choose Your Plan
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-12 col-lg-4 col-md-6">
          <div className="price-card2">
            <div className="price-card-title-wrap">
              <h3 className="price-card_title">Standard This Plan </h3>
              <p className="price-card_text">
                Refund policies vary based on the date of cancellation.
              </p>
            </div>
            <div className="price-card-price-wrap">
              <h4 className="price-card_price">
                <span className="currency">$</span>
                60
              </h4>
            </div>
            <div className="price-card_content">
              <div className="checklist">
                <ul>
                  <li>
                    <i className="fas fa-circle-check" /> We are privileged to
                    work.
                  </li>
                  <li>
                    <i className="fas fa-circle-check" /> 24/7 system monitoring
                  </li>
                  <li>
                    <i className="fas fa-circle-check" /> Encourage team member
                  </li>
                  <li className="unavailable">
                    <i className="fas fa-circle-check" /> Remote best support
                  </li>
                </ul>
              </div>
              <a href="pricing.html" className="th-btn">
                Choose Your Plan
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-12 col-lg-4 col-md-6">
          <div className="price-card2">
            <div className="price-card-title-wrap">
              <h3 className="price-card_title">Premium This Plan </h3>
              <p className="price-card_text">
                Refund policies vary based on the date of cancellation.
              </p>
            </div>
            <div className="price-card-price-wrap">
              <h4 className="price-card_price">
                <span className="currency">$</span>
                120
              </h4>
            </div>
            <div className="price-card_content">
              <div className="checklist">
                <ul>
                  <li>
                    <i className="fas fa-circle-check" /> We are privileged to
                    work.
                  </li>
                  <li>
                    <i className="fas fa-circle-check" /> 24/7 system monitoring
                  </li>
                  <li>
                    <i className="fas fa-circle-check" /> Encourage team member
                  </li>
                  <li>
                    <i className="fas fa-circle-check" /> Remote best support
                  </li>
                </ul>
              </div>
              <a href="pricing.html" className="th-btn">
                Choose Your Plan
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*==============================
Faq Area
==============================*/}
  <div
    className="space overflow-hidden faq-area-2"
    data-bg-src="/assets/img/bg/gray-bg2.png"
  >
    <div
      className="shape-mockup faq-shape2-1 jump-reverse"
      data-top="20%"
      data-left={0}
    >
      <img src="/assets/img/shape/hand-bg-shape2-1.png" alt="img" />
    </div>
    <div className="container">
      <div className="row gy-60 gx-60">
        <div className="col-xl-7">
          <div className="faq-wrap2">
            <div className="title-area">
              <span className="sub-title after-none before-none">
                <i className="far fa-heart text-theme" /> Frequently Asked
                Questions
              </span>
              <h2 className="sec-title">Have Any Questions For Us?</h2>
            </div>
            <div className="accordion" id="faqAccordion">
              <div className="accordion-card style2">
                <div className="accordion-header" id="collapse-item-1">
                  <button
                    className="accordion-button "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-1"
                    aria-expanded="true"
                    aria-controls="collapse-1"
                  >
                    What motivates you to donate to our charity?
                  </button>
                </div>
                <div
                  id="collapse-1"
                  className="accordion-collapse collapse show"
                  aria-labelledby="collapse-item-1"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      Explore the variety of volunteer opportunities available.
                      From event planning and fundraising to fieldwork and
                      administrative support, there are many ways to lend your
                      talents. Find the perfect fit for your skills and
                      interests.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card style2">
                <div className="accordion-header" id="collapse-item-2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-2"
                    aria-expanded="false"
                    aria-controls="collapse-2"
                  >
                    How did you hear about our organization?
                  </button>
                </div>
                <div
                  id="collapse-2"
                  className="accordion-collapse collapse "
                  aria-labelledby="collapse-item-2"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      Explore the variety of volunteer opportunities available.
                      From event planning and fundraising to fieldwork and
                      administrative support, there are many ways to lend your
                      talents. Find the perfect fit for your skills and
                      interests.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card style2">
                <div className="accordion-header" id="collapse-item-3">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-3"
                    aria-expanded="false"
                    aria-controls="collapse-3"
                  >
                    How frequently do you prefer to volunteer?
                  </button>
                </div>
                <div
                  id="collapse-3"
                  className="accordion-collapse collapse "
                  aria-labelledby="collapse-item-3"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      Explore the variety of volunteer opportunities available.
                      From event planning and fundraising to fieldwork and
                      administrative support, there are many ways to lend your
                      talents. Find the perfect fit for your skills and
                      interests.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-5">
          <div className="faq-img-box2">
            <div className="img1">
              <img src="/assets/img/normal/faq_2_1.png" alt="img" />
            </div>
            <div className="faq-img-shape">
              <img src="/assets/img/shape/faq-shape2-1.png" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*==============================
Brand Area  
==============================*/}
  <div
    className="bg-theme-dark overflow-hidden brand-area-1"
    data-mask-src="/assets/img/shape/brand-bg-shape1.png"
  >
    <div className="container">
      <div className="brand-wrap1 text-center">
        <h3 className="brand-wrap-title text-white">
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
                <img src="/assets/img/brand/brand2-1.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="blog.html" className="brand-box">
                <img src="/assets/img/brand/brand2-2.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="blog.html" className="brand-box">
                <img src="/assets/img/brand/brand2-3.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="blog.html" className="brand-box">
                <img src="/assets/img/brand/brand2-4.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="blog.html" className="brand-box">
                <img src="/assets/img/brand/brand2-5.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="blog.html" className="brand-box">
                <img src="/assets/img/brand/brand2-1.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="blog.html" className="brand-box">
                <img src="/assets/img/brand/brand2-2.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="blog.html" className="brand-box">
                <img src="/assets/img/brand/brand2-3.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="blog.html" className="brand-box">
                <img src="/assets/img/brand/brand2-4.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="blog.html" className="brand-box">
                <img src="/assets/img/brand/brand2-5.svg" alt="Brand Logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*==============================
Testimonial Area  
==============================*/}
  <section className="overflow-hidden space overflow-hidden">
    <div className="container">
      <div className="title-area text-center">
        <span className="sub-title after-none before-none">
          <i className="far fa-heart text-theme" />
          Testimonials
        </span>
        <h2 className="sec-title">What Our Customers Say?</h2>
      </div>
      <div className="testi-slider3 slider-area">
        <div
          className="swiper th-slider"
          id="testiSlide3"
          data-slider-options='{"autoHeight": "true","breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"1"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"2"}}}'
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="testi-card3">
                <div
                  className="testi-card-shape"
                  data-mask-src="/assets/img/shape/testi-card-bg-shape3-1.png"
                />
                <div className="testi-card_review">
                  <i className="fas fa-star" />
                  5.0
                </div>
                <div className="testi-card_profile">
                  <div className="box-thumb">
                    <img src="/assets/img/testimonial/testi_3_1.png" alt="img" />
                    <div className="quote-icon">
                      <i className="fal fa-quote-right" />
                    </div>
                  </div>
                  <div className="media-left">
                    <h3 className="testi-card_name">Brandon Dixon</h3>
                    <span className="testi-card_desig">CEO, Founder</span>
                  </div>
                </div>
                <p className="testi-card_text">
                  “Stay informed about our upcoming events and campaigns.
                  Whether its a fundraising gala, a charity run, or a community
                  outreach program, there are plenty of ways to get involved and
                  support our cause. Check our event calendar for details.”
                </p>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testi-card3">
                <div
                  className="testi-card-shape"
                  data-mask-src="/assets/img/shape/testi-card-bg-shape3-1.png"
                />
                <div className="testi-card_review">
                  <i className="fas fa-star" />
                  5.0
                </div>
                <div className="testi-card_profile">
                  <div className="box-thumb">
                    <img src="/assets/img/testimonial/testi_3_2.png" alt="img" />
                    <div className="quote-icon">
                      <i className="fal fa-quote-right" />
                    </div>
                  </div>
                  <div className="media-left">
                    <h3 className="testi-card_name">Brooklyn Simmons</h3>
                    <span className="testi-card_desig">CEO, Founder</span>
                  </div>
                </div>
                <p className="testi-card_text">
                  “Stay informed about our upcoming events and campaigns.
                  Whether its a fundraising gala, a charity run, or a community
                  outreach program, there are plenty of ways to get involved and
                  support our cause. Check our event calendar for details.”
                </p>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testi-card3">
                <div
                  className="testi-card-shape"
                  data-mask-src="/assets/img/shape/testi-card-bg-shape3-1.png"
                />
                <div className="testi-card_review">
                  <i className="fas fa-star" />
                  5.0
                </div>
                <div className="testi-card_profile">
                  <div className="box-thumb">
                    <img src="/assets/img/testimonial/testi_3_2.png" alt="img" />
                    <div className="quote-icon">
                      <i className="fal fa-quote-right" />
                    </div>
                  </div>
                  <div className="media-left">
                    <h3 className="testi-card_name">Michel Connor</h3>
                    <span className="testi-card_desig">CEO, Founder</span>
                  </div>
                </div>
                <p className="testi-card_text">
                  “Stay informed about our upcoming events and campaigns.
                  Whether its a fundraising gala, a charity run, or a community
                  outreach program, there are plenty of ways to get involved and
                  support our cause. Check our event calendar for details.”
                </p>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testi-card3">
                <div
                  className="testi-card-shape"
                  data-mask-src="/assets/img/shape/testi-card-bg-shape3-1.png"
                />
                <div className="testi-card_review">
                  <i className="fas fa-star" />
                  5.0
                </div>
                <div className="testi-card_profile">
                  <div className="box-thumb">
                    <img src="/assets/img/testimonial/testi_3_1.png" alt="img" />
                    <div className="quote-icon">
                      <i className="fal fa-quote-right" />
                    </div>
                  </div>
                  <div className="media-left">
                    <h3 className="testi-card_name">Ethan David</h3>
                    <span className="testi-card_desig">CEO, Founder</span>
                  </div>
                </div>
                <p className="testi-card_text">
                  “Stay informed about our upcoming events and campaigns.
                  Whether its a fundraising gala, a charity run, or a community
                  outreach program, there are plenty of ways to get involved and
                  support our cause. Check our event calendar for details.”
                </p>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testi-card3">
                <div
                  className="testi-card-shape"
                  data-mask-src="/assets/img/shape/testi-card-bg-shape3-1.png"
                />
                <div className="testi-card_review">
                  <i className="fas fa-star" />
                  5.0
                </div>
                <div className="testi-card_profile">
                  <div className="box-thumb">
                    <img src="/assets/img/testimonial/testi_3_1.png" alt="img" />
                    <div className="quote-icon">
                      <i className="fal fa-quote-right" />
                    </div>
                  </div>
                  <div className="media-left">
                    <h3 className="testi-card_name">Daniel Thomas</h3>
                    <span className="testi-card_desig">CEO, Founder</span>
                  </div>
                </div>
                <p className="testi-card_text">
                  “Stay informed about our upcoming events and campaigns.
                  Whether its a fundraising gala, a charity run, or a community
                  outreach program, there are plenty of ways to get involved and
                  support our cause. Check our event calendar for details.”
                </p>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testi-card3">
                <div
                  className="testi-card-shape"
                  data-mask-src="/assets/img/shape/testi-card-bg-shape3-1.png"
                />
                <div className="testi-card_review">
                  <i className="fas fa-star" />
                  5.0
                </div>
                <div className="testi-card_profile">
                  <div className="box-thumb">
                    <img src="/assets/img/testimonial/testi_3_2.png" alt="img" />
                    <div className="quote-icon">
                      <i className="fal fa-quote-right" />
                    </div>
                  </div>
                  <div className="media-left">
                    <h3 className="testi-card_name">Michel Vetory</h3>
                    <span className="testi-card_desig">CEO, Founder</span>
                  </div>
                </div>
                <p className="testi-card_text">
                  “Stay informed about our upcoming events and campaigns.
                  Whether its a fundraising gala, a charity run, or a community
                  outreach program, there are plenty of ways to get involved and
                  support our cause. Check our event calendar for details.”
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          data-slider-prev="#testiSlide3"
          className="slider-arrow style-border slider-prev"
        >
          <i className="far fa-arrow-left" />
        </button>
        <button
          data-slider-next="#testiSlide3"
          className="slider-arrow style-border slider-next"
        >
          <i className="far fa-arrow-right" />
        </button>
      </div>
    </div>
  </section>
  {/*==============================
Blog Area  
==============================*/}
  <section
    className="blog-area-3 overflow-hidden space-bottom"
    id="blog-sec"
    data-bg-src="/assets/img/bg/gray-bg2.png"
  >
    <div
      className="shape-mockup blog-bg-shape3-1"
      data-top={0}
      data-left={0}
      data-right={0}
    >
      <img src="/assets/img/shape/testi_bg_shape3_1.png" alt="img" />
    </div>
    <div className="container">
      <div className="row justify-content-lg-between justify-content-center align-items-center">
        <div className="col-lg-7">
          <div className="title-area text-lg-start text-center">
            <span className="sub-title after-none before-none">
              <i className="far fa-heart text-theme" /> News &amp; Articles
            </span>
            <h2 className="sec-title">Our Latest News &amp; Articles</h2>
          </div>
        </div>
        <div className="col-auto">
          <div className="sec-btn">
            <a href="blog.html" className="th-btn style3">
              View All Post <i className="fas fa-arrow-up-right ms-2" />
            </a>
          </div>
        </div>
      </div>
      <div className="slider-area">
        <div
          className="swiper th-slider has-shadow"
          id="blogSlider3"
          data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"2"}}}'
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="blog-card style2">
                <div className="blog-img">
                  <a href="blog-details.html">
                    <img src="/assets/img/blog/blog_1_1.jpg" alt="blog image" />
                  </a>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="blog.html">
                      <i className="fas fa-calendar-days" />
                      April 12 2024
                    </a>
                    <a href="blog-details.html">
                      <i className="fas fa-tags" />
                      Education
                    </a>
                  </div>
                  <h3 className="box-title">
                    <a href="blog-details.html">
                      See Your Impact: Transparent Donation Tracking
                    </a>
                  </h3>
                  <p className="blog-text">
                    Explore the variety of volunteer opportunities available.
                    From event planning and fundraising to fieldwork and
                    administrative support.
                  </p>
                  <a href="blog-details.html" className="th-btn">
                    Read More <i className="fas fa-arrow-up-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="blog-card style2">
                <div className="blog-img">
                  <a href="blog-details.html">
                    <img src="/assets/img/blog/blog_1_2.jpg" alt="blog image" />
                  </a>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="blog.html">
                      <i className="fas fa-calendar-days" />
                      June 17 2024
                    </a>
                    <a href="blog-details.html">
                      <i className="fas fa-tags" />
                      Education
                    </a>
                  </div>
                  <h3 className="box-title">
                    <a href="blog-details.html">
                      Every Contribution Counts: Make a Difference
                    </a>
                  </h3>
                  <p className="blog-text">
                    Explore the variety of volunteer opportunities available.
                    From event planning and fundraising to fieldwork and
                    administrative support.
                  </p>
                  <a href="blog-details.html" className="th-btn">
                    Read More <i className="fas fa-arrow-up-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="blog-card style2">
                <div className="blog-img">
                  <a href="blog-details.html">
                    <img src="/assets/img/blog/blog_1_1.jpg" alt="blog image" />
                  </a>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="blog.html">
                      <i className="fas fa-calendar-days" />
                      March 24 2024
                    </a>
                    <a href="blog-details.html">
                      <i className="fas fa-tags" />
                      Education
                    </a>
                  </div>
                  <h3 className="box-title">
                    <a href="blog-details.html">
                      See Your Impact: Transparent Donation Tracking
                    </a>
                  </h3>
                  <p className="blog-text">
                    Explore the variety of volunteer opportunities available.
                    From event planning and fundraising to fieldwork and
                    administrative support.
                  </p>
                  <a href="blog-details.html" className="th-btn">
                    Read More <i className="fas fa-arrow-up-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="blog-card style2">
                <div className="blog-img">
                  <a href="blog-details.html">
                    <img src="/assets/img/blog/blog_1_2.jpg" alt="blog image" />
                  </a>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="blog.html">
                      <i className="fas fa-calendar-days" />
                      July 05 2024
                    </a>
                    <a href="blog-details.html">
                      <i className="fas fa-tags" />
                      Education
                    </a>
                  </div>
                  <h3 className="box-title">
                    <a href="blog-details.html">
                      Every Contribution Counts: Make a Difference
                    </a>
                  </h3>
                  <p className="blog-text">
                    Explore the variety of volunteer opportunities available.
                    From event planning and fundraising to fieldwork and
                    administrative support.
                  </p>
                  <a href="blog-details.html" className="th-btn">
                    Read More <i className="fas fa-arrow-up-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*==============================
	Footer Area
==============================*/}
  <footer className="footer-wrapper footer-layout2">
    <div
      className="shape-mockup footer-bg-shape2-1 jump"
      data-left={0}
      data-top={0}
    >
      <div className="color-masking2">
        <div
          className="masking-src"
          data-mask-src="/assets/img/shape/footer-bg-shape2-1.png"
        />
        <img src="/assets/img/shape/footer-bg-shape2-1.png" alt="img" />
      </div>
    </div>
    <div
      className="shape-mockup footer-bg-shape2-2 jump-reverse"
      data-right={0}
      data-bottom={0}
    >
      <div className="color-masking">
        <div
          className="masking-src"
          data-mask-src="/assets/img/shape/footer-bg-shape2-2.png"
        />
        <img src="/assets/img/shape/footer-bg-shape2-2.png" alt="img" />
      </div>
    </div>
    <div className="widget-area space-top">
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
                <p className="about-text mb-3">
                  {" "}
                  Our secure online donation platform allows you to make
                  contributions quickly
                </p>
                <div className="info-card style2">
                  <div className="box-icon bg-theme">
                    <i className="fal fa-phone" />
                  </div>
                  <div className="box-content">
                    <p className="box-text">Call us any time:</p>
                    <h4 className="box-title">
                      <a href="tel:16336547896">+163-3654-7896</a>
                    </h4>
                  </div>
                </div>
                <div className="info-card style2">
                  <div className="box-icon bg-theme2">
                    <i className="fal fa-envelope-open" />
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
            <div className="widget newsletter-widget footer-widget">
              <h3 className="widget_title">Newsletter</h3>
              <p className="footer-text mb-4">
                Subscribe to Our Newsletter. Regular inspection and feedback
                mechanisms
              </p>
              <form className="newsletter-form">
                <div className="form-group style-dark">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Enter your email"
                    required=""
                  />
                </div>
                <button type="submit" className="th-btn style5">
                  <i className="fas fa-paper-plane" />
                </button>
              </form>
              <div className="th-social style6">
                <a href="https://www.facebook.com/">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="https://www.twitter.com/">
                  <i className="fab fa-twitter" />
                </a>
                <a href="https://www.linkedin.com/">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="https://www.behance.com/">
                  <i className="fab fa-behance" />
                </a>
                <a href="https://www.vimeo.com/">
                  <i className="fab fa-vimeo-v" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-wrap bg-theme text-center">
      <div className="container">
        <p className="copyright-text">
          Copyright 2024 <a href="index.html">Donat.</a> All Rights Reserved.
        </p>
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

    </div>
  );
}

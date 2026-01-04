import React from 'react';
import Container from '../layout/Container';
import logo from '../../assets/logo1.png'
import { AiOutlineMail } from 'react-icons/ai';
import { FaPhoneAlt, FaTwitterSquare } from 'react-icons/fa';
import { FaFacebookF, FaGithub, FaSquareInstagram, FaSquareXTwitter, FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className='bg-info'>
            <Container>
                <div className="footer sm:footer-horizontal text-base-content p-10">
                    <nav className='space-y-3'>
                        <div>
                            <a className="text-xl cursor-pointer" title="Home" href="/">
                                <img className='w-[150px]' src={logo} alt="" />
                            </a>
                        </div>
                        <div>
                            <h3 className='text-2xl font-semibold'>Bank Town</h3>
                            <p className='text-secondary'>Savar, Dhaka (DHA).</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <AiOutlineMail className='text-xl' /><span className="hover:text-secondary cursor-pointer text-lg">support@finease.com</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaPhoneAlt className='text-xl' /><span className="hover:text-secondary cursor-pointer text-lg">+880 1234-567809</span>
                        </div>
                        <div className='flex gap-3'>
                            <a className="hover:text-secondary cursor-pointer text-2xl">
                                <FaGithub />
                            </a>
                            <a className="hover:text-secondary cursor-pointer text-2xl">
                                <FaFacebookF />
                            </a>
                            <a className="hover:text-secondary cursor-pointer text-2xl">
                                <FaSquareInstagram />
                            </a>
                            <a className="hover:text-secondary cursor-pointer text-2xl">
                                <FaSquareXTwitter />
                            </a>
                        </div>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Explore</h6>
                        <a className="hover:text-secondary cursor-pointer" href="/" >Home</a>
                        <a className="hover:text-secondary cursor-pointer" href="/add-transaction">Add Transaction</a>
                        <a className="hover:text-secondary cursor-pointer" href="/my-transaction">My Transactions</a>
                        <a className="hover:text-secondary cursor-pointer" href="/report">Reports</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Quick Links</h6>
                        <a className="hover:text-secondary cursor-pointer">Privacy Policy</a>
                        <a className="hover:text-secondary cursor-pointer">Discussion</a>
                        <a className="hover:text-secondary cursor-pointer">Terms & Conditions</a>
                        <a className="hover:text-secondary cursor-pointer">Customer Support</a>
                        <a className="hover:text-secondary cursor-pointer">Course FAQ’s</a>
                    </nav>
                    <form>
                        <h6 className="footer-title">Subscribe</h6>
                        <fieldset className="w-80">
                            <label>Enter your email address</label>
                            <div className="join">
                                <input
                                    type="text"
                                    placeholder="Email here"
                                    className="input input-bordered join-item" />
                                <button className="btn border-3 border-primary bg-primary text-secondary hover:bg-accent join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <div className="border border-accent"></div>
                <div className='text-center py-5'>
                    <h2 className='font-semibold'>&copy; 2025 finease.web | All rights reserved.</h2>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
import { Link } from 'react-router-dom';
import React from 'react';

const Header = () => {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <div className="w-20 cursor-pointer">
                    <Link to='/#'>
                    <img src="./public/img4.jpg" alt="Logo" />
                    </Link>
                </div>

                <div className="flex flex-1 mx-4">
                    <input
                        type="text"
                        placeholder="Search for products, brands, and more"
                        className="w-full px-4 py-2 border rounded-l-lg focus:outline-none"
                    />
                    <button className="px-4 bg-blue-500 text-white rounded-r-lg">Search</button>
                </div>

                <div className="flex items-center space-x-4">
                    <div className="relative group">
                        <button className="text-gray-700 flex items-center">
                            <img src="./public/img6.jpg" alt="Login Icon" className="mr-2" />
                            Login
                        </button>
                        <div className="absolute hidden group-hover:flex flex-col bg-white text-black shadow-lg mt-2 py-2 w-60">
                            <Link to="#" className="px-4 py-2 hover:bg-gray-200 flex items-center">
                                <img src="./public/img8.jpg" alt="Profile Icon" className="mr-2" />
                                My Profile
                            </Link>
                            <Link to="#" className="px-4 py-2 hover:bg-gray-200 flex items-center">
                                <img src="./public/img9.jpg" alt="Flipkart Plus Icon" className="mr-2" />
                                Flipkart Plus Zone
                            </Link>
                            <Link to="#" className="px-4 py-2 hover:bg-gray-200 flex items-center">
                                <img src="./public/img10.jpg" alt="Orders Icon" className="mr-2" />
                                Orders
                            </Link>
                            <Link to="#" className="px-4 py-2 hover:bg-gray-200 flex items-center">
                                <img src="./public/img11.jpg" alt="Wishlist Icon" className="mr-2" />
                                Wishlist
                            </Link>
                            <Link to="#" className="px-4 py-2 hover:bg-gray-200 flex items-center">
                                <img src="./public/img12.jpg" alt="Rewards Icon" className="mr-2" />
                                Rewards
                            </Link>
                            <Link to="#" className="px-4 py-2 hover:bg-gray-200 flex items-center">
                                <img src="./public/img13.jpg" alt="Gift Cards Icon" className="mr-2" />
                                Gift Cards
                            </Link>
                        </div>
                    </div>

                    <Link to="/cart" className="text-gray-700 flex items-center">
                        <img src="./public/img5.jpg" alt="Cart Icon" className="mr-2" />
                        Cart
                    </Link>

                    <Link to="#" className="text-gray-700 flex items-center">
                        <img src="./public/img7.jpg" alt="Seller Icon" className="mr-2" />
                        Become a Seller
                    </Link>

                    <div className="relative group">
                        <button className="text-gray-700 flex items-center">
                            <img src="./public/img14.jpg" alt="More Icon" />
                        </button>
                        <div className="absolute hidden group-hover:flex flex-col bg-white text-black shadow-lg mt-2 right-0 py-2 w-60">
                            <Link to="#" className="px-4 py-2 hover:bg-gray-200 flex items-center">
                                <img src="./public/img15.jpg" alt="Notification Preferences Icon" className="mr-2" />
                                Notification Preferences
                            </Link>
                            <Link to="#" className="px-4 py-2 hover:bg-gray-200 flex items-center">
                                <img src="./public/img16.jpg" alt="Customer Care Icon" className="mr-2" />
                                24x7 Customer Care
                            </Link>
                            <Link to="#" className="px-4 py-2 hover:bg-gray-200 flex items-center">
                                <img src="./public/img17.jpg" alt="Advertise Icon" className="mr-2" />
                                Advertise
                            </Link>
                            <Link to="#" className="px-4 py-2 hover:bg-gray-200 flex items-center">
                                <img src="./public/img18.jpg" alt="Download App Icon" className="mr-2" />
                                Download App
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
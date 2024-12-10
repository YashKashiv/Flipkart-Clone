export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 text-sm pt-8 pb-4">
            <div className="flex">
                <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 ">
                    <div>
                        <h3 className="text-white font-semibold mb-4">ABOUT</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Contact Us</a></li>
                            <li><a href="#" className="hover:underline">About Us</a></li>
                            <li><a href="#" className="hover:underline">Careers</a></li>
                            <li><a href="#" className="hover:underline">Flipkart Stories</a></li>
                            <li><a href="#" className="hover:underline">Press</a></li>
                            <li><a href="#" className="hover:underline">Corporate Information</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">GROUP COMPANIES</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Myntra</a></li>
                            <li><a href="#" className="hover:underline">Cleartrip</a></li>
                            <li><a href="#" className="hover:underline">Shopsy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">HELP</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Payments</a></li>
                            <li><a href="#" className="hover:underline">Shipping</a></li>
                            <li><a href="#" className="hover:underline">Cancellation & Returns</a></li>
                            <li><a href="#" className="hover:underline">FAQ</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">CONSUMER POLICY</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Cancellation & Returns</a></li>
                            <li><a href="#" className="hover:underline">Terms Of Use</a></li>
                            <li><a href="#" className="hover:underline">Security</a></li>
                            <li><a href="#" className="hover:underline">Privacy</a></li>
                            <li><a href="#" className="hover:underline">Sitemap</a></li>
                            <li><a href="#" className="hover:underline">Grievance Redressal</a></li>
                            <li><a href="#" className="hover:underline">EPR Compliance</a></li>
                        </ul>
                    </div>
                </div>

                <div className=" border-l border-gray-700 mt-8 pt-4 container mx-auto px-4 ">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
                        <div>
                            <h3 className="text-white font-semibold">Mail Us:</h3>
                            <p className="mt-2">
                                Flipkart Internet Private Limited,<br />
                                Buildings Alyssa, Begonia & Clove Embassy Tech Village,<br />
                                Outer Ring Road, Devarabeesanahalli Village,<br />
                                Bengaluru, 560103, Karnataka, India
                            </p>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold">Registered Office Address:</h3>
                            <p className="mt-2">
                                Flipkart Internet Private Limited,<br />
                                Buildings Alyssa, Begonia & Clove Embassy Tech Village,<br />
                                Outer Ring Road, Devarabeesanahalli Village,<br />
                                Bengaluru, 560103, Karnataka, India<br />
                                CIN : U51109KA2012PTC066107<br />
                                Telephone: 044-45614700 / 044-67415800
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-4">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex space-x-4 mb-4 md:mb-0">
                        <a href="#" className="hover:underline">Become a Seller</a>
                        <a href="#" className="hover:underline">Advertise</a>
                        <a href="#" className="hover:underline">Gift Cards</a>
                        <a href="#" className="hover:underline">Help Center</a>
                    </div>

                    <div className="text-center">
                        <p className="text-gray-500">© 2007-2024 Flipkart.com</p>
                        <div className="mt-2 flex space-x-2">
                            <img src="./public/svg1.svg" alt="Visa" className="h-5" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}  
function Nav() {
    return (
        <div>
            <div className="relative flex justify-between mx-1 lg:mx-11 mt-7 text-xs">
                <div className="text-2xl lg:3xl text-yellow-600">Logo</div>
                <div className="flex items-center">
                    <ul className="flex space-x-2 lg:space-x-8 items-center text-yellow-600 text-xs lg:text-base font-medium">
                        <li className="pt-2 pb-1.5 hover:underline">ÜBER UNS</li>
                        <li className="pt-2 pb-1.5 rounded-full hover:underline">LOGIN</li>
                        <li className="group bg-yellow-600 hover:bg-yellow-500 text-white lg:px-8 px-4 pt-2 pb-1.5 rounded-full flex relative">
                            <div className="transform transition-transform duration-300 group-hover:-translate-x-2 relative">REGISTRIEREN</div>
                            <div style={{left: '8.5rem'}} className="pt-1 absolute transition-transform transform duration-300 group-hover:opacity-100 group-hover:translate-x-2 opacity-0">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.05521 0.541748L5.51308 2.07358L8.85842 5.41891H0V7.58125H8.85842L5.51308 10.9266L7.05521 12.4584L13 6.50008L7.05521 0.541748Z" fill="white"/>
                                </svg>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Nav;

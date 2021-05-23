import { Link } from 'react-router-dom'
import LogoWhite from './LogoWhite'

function Footer() {
    return (
        <div>
            <div className="lg:mt-24 mt-12">
                <div className="block lg:hidden">
                    <svg
                        viewBox="0 0 370 170"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0 170L1.13255e-05 91.9563C100.005 36.2802 164.087 9.63032 257.655 1.50024C290.618 -1.36397 331.143 2.50088 370 8.91903V170H0Z"
                            fill="#FF6915"
                        />
                    </svg>
                </div>
                <div className="lg:block hidden">
                    <svg
                        viewBox="0 0 1920 292"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0 292H1920V187.856C1920 187.856 1736.5 -234.821 0 187.856V292Z"
                            fill="#FF6915"
                        />
                    </svg>
                </div>
                <div className="lg:max-w-4xl relative lg:mx-auto mx-6 relative text-white bottom-20">
                    <div className="absolute justify-between items-end flex w-full ">
                        <div className="w-24 lg:w-32">
                            <Link to="/">
                                <LogoWhite />
                            </Link>
                        </div>
                        <div className="lg:flex text-right">
                            <div className="lg:mb-0 mb-5">
                                <Link to="/imprint">Impressum</Link>
                            </div>
                            <div className="lg:ml-8">
                                <Link to="/privacy">Datenschutz</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

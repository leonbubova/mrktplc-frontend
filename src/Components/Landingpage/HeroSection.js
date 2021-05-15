import Nav from './Nav'

function HeroSection() {
    return (
        <div>
            <div
                id="hero"
                style={{ height: '100vh' }}
                className="flex flex-col flex justify-between"
            >
                <Nav />
                <div>
                    <div
                        id="hero-text"
                        style={{}}
                        className="mx-2 lg:mx-11 mb-40 lg:mb-0"
                    >
                        <div className="text-yellow-600 text-lg lg:text-3xl font-medium">
                            werde noch heute ein exklusiver
                        </div>
                        <h1 className="text-yellow-600 text-4xl lg:text-6xl font-bold mt-1.5 mb-5 font-Raleway">
                            Eveeon Produkttester
                        </h1>
                        <ul className="list-disc pl-6 text-xs lg:text-xl">
                            <li className="text-gray-600">
                                Völlig kostenlos, es fallen keinerlei Gebühren
                                an
                            </li>
                            <li className="my-2 text-gray-600">
                                Auszahlung direkt auf dein Konto nach jedem
                                Produkttest
                            </li>
                            <li className="text-gray-600">
                                Simple step-by-step Anleitung
                            </li>
                        </ul>
                    </div>
                    <div
                        className="lg:flex hidden absolute items-center"
                        style={{ bottom: '5%', left: '3%' }}
                    >
                        <div className="text-yellow-600 bg-white mr-6 px-8 pt-2 pb-1.5 rounded-full text-xl font-medium">
                            REGISTRIEREN
                        </div>
                        <div className="text-yellow-50 text-2xl">
                            Registriere dich jetzt und erhalte bis zu{' '}
                            <span className="text-3xl mx-2">30€</span> pro
                            Auftrag
                        </div>
                    </div>
                    <div
                        className="absolute lg:hidden block items-center"
                        style={{ bottom: '3%', right: '1%' }}
                    >
                        <div className="text-yellow-600 bg-white mr-6 px-8 pt-2 pb-1.5 rounded-full text-sm font-medium">
                            REGISTRIEREN
                        </div>
                    </div>
                    <div
                        className="lg:block hidden"
                        style={{ width: '100%', bottom: '0', zIndex: '-9999' }}
                    >
                        <svg
                            viewBox="0 0 1920 448"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0 448H1920V0C1604.5 355.082 1356 14.3799 1075.5 173.669C794.999 332.958 534 221.788 354 221.788C227.937 231.467 134.737 288.794 1.52588e-05 355.082L0 448Z"
                                fill="#FF6915"
                            />
                        </svg>
                    </div>
                    <div
                        className="block lg:hidden"
                        style={{ width: '100%', bottom: '0', zIndex: '-9999' }}
                    >
                        <svg
                            viewBox="0 0 370 187"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0 187L1.13255e-05 108.956C100.005 53.28 164.087 9.63008 257.655 1.5C290.618 -1.36422 331.143 2.50063 370 8.91878V187H0Z"
                                fill="#FF6915"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <div style={{ width: '100%' }} className="hidden lg:block">
                <svg
                    viewBox="0 0 1920 312"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 312C540.5 26.2845 714.5 164.193 911 104.455C1107.5 44.7178 1317 34.8185 1476 62.8097C1635 90.8009 1785.26 45.2553 1920 0L0 0V127.667V312Z"
                        fill="#FF6915"
                    />
                </svg>
            </div>
            <div style={{ width: '100%' }} className="lg:hidden block">
                <svg
                    viewBox="0 0 370 118"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 117.887C160.869 42.608 277.997 12.086 370 0L0 0V117.887Z"
                        fill="#FF6915"
                    />
                </svg>
            </div>
        </div>
    )
}

export default HeroSection

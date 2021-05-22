import Icons from './Icons'
import HeroSection from './HeroSection'
import Steps from './Steps'
import Footer from './Footer'
import Contact from './Contact'

function Landingpage() {
    return (
        <div className="landingpage">
            <HeroSection />
            <Icons />
            <Steps />
            <Contact />
            <Footer />
        </div>
    )
}

export default Landingpage

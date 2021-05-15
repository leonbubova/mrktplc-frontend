import { useEffect } from 'react'
import Icons from './Icons'
import HeroSection from './HeroSection'
import Steps from './Steps'
import Footer from './Footer'

function Landingpage() {
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        // await fetch('http://localhost:8000/sanctum/csrf-cookie')
        const data = await fetch('http://localhost:8000/api/test')

        const array = await data.json()
        console.log(array)
    }

    return (
        <div>
            <HeroSection />
            <Icons />
            <Steps />
            <Footer />
        </div>
    )
}

export default Landingpage

import Nav from './Nav'
import Footer from './Footer'

function Privacy() {
    return (
        <div>
            <Nav />
            <div className="lg:mx-auto lg:max-w-4xl mx-6 mt-12 lg:mt-40 lg:mb-56">
                <div className="">
                    <h1 className="text-lg lg:text-3xl lg:font-normal text-yellow-600 mb-8">
                        Datenschutz
                    </h1>
                    <p className="text-justify mb-8">
                        Eveeon ist ein Vermittler für Produkttests im Bereich
                        des Proxy-Marketings. Als Produkttester erhältst du die
                        Möglichkeit, Produkte aus unterschiedlichen Kategorien
                        zu testen.
                    </p>
                    <p className="text-justify mb-8">
                        Dazu gehören unter anderem Babyartikel, Elektronik,
                        Haushaltsartikel, Bekleidung, Sportartikel und
                        ähnliches: In der Regel gilt, wird ein Produktart auf
                        E-Commerce-Plattformen wie Amazon oder eBay angeboten,
                        haben wir ein ähnliches Produkt zum testen für dich
                        parat!
                    </p>
                    <p className="text-justify mb-8">
                        Wir senden dir stetig neue Angebote von Tests zu, wenn
                        dir einer davon gefällt, wähle das Angebot einfach aus!
                        Dadurch vermeiden wir, dass unsere Produkttester keine
                        Sachen testen müssen, die sie eigentlich gar nicht
                        mögen.
                    </p>
                    <p className="text-justify mb-8">
                        Hersteller auf E-Commerce Plattformen wissen, ohne
                        Kundenrezensionen keine Verkäufe und ohne Verkäufe keine
                        Rezensionen.
                    </p>
                    <p className="text-justify mb-8">
                        Aus diesem Grund fokussieren sich viele Hersteller auf
                        das erhalten von Rezensionen durch Produkttests.
                    </p>
                    <p className="text-justify">
                        Aber durch die Rezensionen profitieren nicht nur die
                        Hersteller auf Amazon, eBay & Co., sondern auch
                        Online-Kunden, die sich vor dem Kauf näher informieren
                        möchten.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Privacy

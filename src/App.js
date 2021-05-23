import { Route, Switch } from 'react-router-dom'

import Landingpage from './Components/Landingpage/Landingpage'
import Privacy from './Components/Landingpage/Privacy'
import Imprint from './Components/Landingpage/Imprint'
import About from './Components/Landingpage/About'
import { ScrollToTop } from './Components/ScrollToTop'

function App() {
    return (
        <div className="app">
            <Switch>
                <ScrollToTop>
                    <Route path="/" component={Landingpage} exact />
                    <Route path="/about" component={About} />
                    <Route path="/privacy" component={Privacy} />
                    <Route path="/imprint" component={Imprint} />
                </ScrollToTop>
            </Switch>
        </div>
    )
}

export default App

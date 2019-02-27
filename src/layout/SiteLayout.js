import React from "react"
import { enquireScreen } from "enquire-js"

import Header from "./Header"
// import Banner from './Banner';
// import Page1 from './Page1';
// import Page2 from './Page2';
// import Footer from './Footer';
import "./Header.less"

let isMobile

enquireScreen(b => {
    isMobile = b
})

class SiteLayout extends React.PureComponent {
    state = {
        isMobile,
    }

    componentDidMount() {
        enquireScreen(b => {
            this.setState({
                isMobile: !!b,
            })
        })
    }

    render() {
        return (
            <div>
                <Header isMobile={this.state.isMobile} />
                {/* <div className="home-wrapper">
            <Banner isMobile={this.state.isMobile} />
            <Page1 isMobile={this.state.isMobile} />
            <Page2 />
          </div>
          <Footer /> */}
            </div>
        )
    }
}

export default SiteLayout

import React from "react"
export default ({ children }) => (
    <div>
        <div className="Site-header">
            <header className="Header Container">
                <div className="Header-branding">
                    <div className="Branding">
                        <div className="Branding-logo">Logo</div>
                    </div>
                </div>
                <div className="Header-nav">
                    <div
                        id="PrimaryMenu-toggle"
                        className="icon-menu Menu-toggle"
                    />
                    <nav>
                        <ul className="Menu PrimaryMenu">
                            <li>
                                {" "}
                                Tutorial
                                {/* <Link href='/tutorial'><a>Tutorial</a></Link> */}
                            </li>
                            <li>
                                {" "}
                                API
                                {/* <Link href='/api'><a>API</a></Link> */}
                            </li>
                            <li>
                                {" "}
                                Creditos
                                {/* <Link href='/creditos'><a>Creditos</a></Link> */}
                            </li>
                            <li>
                                {" "}
                                Versiones
                                {/* <Link href='/versiones'><a>Versiones</a></Link> */}
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
        {children}
    </div>
)

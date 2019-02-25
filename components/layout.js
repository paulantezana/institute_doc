import Link from 'next/link'
import Head from 'next/head'
import './layout.less'

export default ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <div className="Site-header">
      <header className="Header Container">
        <div className="Header-branding">
          <div className="Branding">
            <div className="Branding-logo">
              <Link href='/'><a>LOGO</a></Link>
            </div>
          </div>
        </div>
        <div className="Header-nav">
          <div id="PrimaryMenu-toggle" className="icon-menu Menu-toggle"></div>
          <nav>
            <ul className="Menu PrimaryMenu">
              <li>      
                <Link href='/tutorial'><a>Tutorial</a></Link>
              </li>
              <li>      
                <Link href='/api'><a>API</a></Link>
              </li>
              <li>      
                <Link href='/creditos'><a>Creditos</a></Link>
              </li>
              <li>      
                <Link href='/versiones'><a>Versiones</a></Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
    { children }
    <footer style={{textAlign:'center'}}>PaulAntezana</footer>
  </div>
)

import { Button } from 'antd';

export default class Versiones extends React.Component {
  // Add some delay
  render () {
    return (
      <div>
        <div className="SiteHeader">
          <h1 className="SiteHeader-title">Versiones</h1>
        </div>
        <div className="Container">
          <a href="https://github.com/paulantezana" target="_blacnk" >
            <Button icon="github">0.1.0</Button>
          </a>
        </div>
      </div>
    )
  }
}

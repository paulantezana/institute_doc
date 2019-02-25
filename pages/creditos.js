import Link from 'next/link'
import { Button, Divider } from 'antd';

export default class Creditos extends React.Component {
  render () {
    return (
      <div>
        <div className="SiteHeader">
          <h1 className="SiteHeader-title">Creditos</h1>
        </div>
        <div className="Container">
          <h2>Paul Antezana</h2>
          <p>
          Como habrás observado me llamo **Paúl Yoel Antezana Yana** soy arquitecto Frontend, desarrollo de aplicaciones web y  **AUTODIDACTA**, inicie con mi formación profesional desde el 2015, en el mundo del diseño gráfico en CorelDraw pasando por Photoshop E InDesign y no fue hasta agosto del año 2015 en donde conocí sobre la existencia de las tecnologías como HTML5 y CSS que me gustó muchísimo e inmediatamente comencé capacitarme comprando cursos por internet, y convirtiéndose el diseño y programación web como uno de mis principales pasatiempos. 
          </p>
          <p>
          Actualmente sigo capacitándome y actualizándome de los nuevos estándares y tecnologías que día a día van evolucionando, Puedes ver todos mis desarrollos desde [paulantezana.com](https://paulantezana.com) me puedes contactar por los siguientes medios
          </p>
          <Divider/>
          <a href="https://github.com/paulantezana" target="_blacnk" >
            <Button icon="github">github</Button>
          </a>
          <Divider type="vertical" />
          <a href="https://paulantezana.com" target="_blacnk" >
            <Button icon="global">sitio web</Button>
          </a>
          <Divider type="vertical" />
          <a href="https://www.facebook.com/Paulantezana-764145183607069" target="_blacnk" >
            <Button icon="facebook">facebook</Button>
          </a>
          <Divider type="vertical" />
          <a href="https://www.youtube.com/channel/UCwnGqfqlVjDxRZJ-pFjP2oQ?view_as=subscriber" target="_blacnk" >
            <Button icon="youtube">youtube</Button>
          </a>
          <Divider type="vertical" />
          <a href="https://twitter.com/paulantezana" target="_blacnk" >
            <Button icon="twitter">twitter</Button>
          </a>
          <Divider/>
        </div>
      </div>
    )
  }
}

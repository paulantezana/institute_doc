import { Button } from "antd";
import Link from 'next/link';

export default () => (
  <div>
    <div className="MainBanner">
      <div className="MainBanner-data">
        <h1>Sistema institucional para IEST públicas y privadas</h1>
        <div className="center">
          <Link href='/documentacion'><a><Button size="large">Documentacion</Button></a></Link>
        </div>
        <img src="/static/images/home/dashboard.JPG" className="MainBanner-img"/>
      </div>
    </div>
  </div>
)

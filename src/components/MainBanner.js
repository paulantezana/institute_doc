import React from "react"
import { Button } from "antd"
import { Link } from "gatsby"
// import bannerImg from './banner.jpg';
import dashboard from "../images/dashboard.jpg"
console.log(dashboard)
export default () => (
    <div className="MainBanner">
        <div className="MainBanner_data">
            <h1>Sistema institucional para IEST públicas y privadas</h1>
            <div className="Center">
                <Link to="/tutorial">
                    <Button size="large">Documentacion</Button>
                </Link>
            </div>
            <img
                src={dashboard}
                alt="Interfas del sistema"
                className="MainBanner_img"
            />
        </div>
    </div>
)

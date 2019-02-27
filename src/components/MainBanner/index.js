import React from "react"
import { Button } from "antd";
import { Link } from "gatsby";
// import bannerImg from './banner.jpg';
export default () => (
    <div className="MainBanner">
        <div className="MainBanner-data">
            <h1>Sistema institucional para IEST públicas y privadas</h1>
            <div className="Center">
                <Link to='/tutorial'><Button size="large" >Documentacion</Button></Link>
            </div>
            {/* <img src={bannerImg}/> */}
        </div>
    </div>
);

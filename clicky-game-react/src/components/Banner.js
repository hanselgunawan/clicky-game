import React from "react";

let bannerText = {
    textAlign:"center",
    color:"white",
    backgroundImage: 'url(https://www.funnyfeelinggame.com/sites/default/files/memorizing-cards.jpg)',
    height: 400,
    paddingTop: 125,
    paddingRight: 100
};

const Banner = () =>
    <div className="row"  style={bannerText}>
        <div className="col-lg-12">
            <h1>Clicky Game!</h1>
            <h5>Click on an image to earn points, but don't click on any more than once!</h5>
        </div>
    </div>

export default Banner;

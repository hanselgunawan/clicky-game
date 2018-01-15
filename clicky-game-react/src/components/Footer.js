import React from "react";

let footerStyle = {
    height:50,
    marginTop: 5,
    borderTop: 2,
    borderTopStyle: "solid",
    borderTopColor: "#000000"
};

const Footer = props =>
    <div>
        <div className="row" style={footerStyle}>
            <div className="col-lg-3">
                <h5>Clicky Game!</h5>
            </div>
            <div className="col-lg-9"></div>
        </div>
    </div>

export default Footer;
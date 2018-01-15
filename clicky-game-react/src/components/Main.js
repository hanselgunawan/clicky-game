import React from "react";

let imageEdit = {
    width:150,
    height:150,
    margin: 0,
    padding: 0
};

let borderEdit = {
    borderWidth:0.5,
    borderColor:"#000000",
    borderRadius: 4,
    borderStyle: "solid",
    width:180,
    height:150,
    margin:30
};

const Main = props =>
    <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
            <div className="row">
                {props.results.map(data =>
                    <div className="col-lg-4" style={borderEdit}>
                        <img className="img-responsive" key={data.imgId} style={imageEdit} alt={data.imgAlt} src={data.imgUrl}/>
                    </div>
                )}
            </div>
        </div>
        <div className="col-lg-3"></div>
    </div>

export default Main;

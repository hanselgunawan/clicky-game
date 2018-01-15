import React, { Component } from "react";
import Header from "./Header";
import Banner from "./Banner";
import Main from "./Main";
import Footer from "./Footer";

class SearchResultContainer extends Component {
    state = {
        score: 0,
        topScore: 0,
        clickStatus:"",
        results: [
            {
                imgId:0,
                imgUrl: "http://clipart.info/images/ccovers/1510684304iron-man-tsum-tsum-marvel.png",
                imgAlt: "Iron-Man",
                imgClickStatus: false
            },
            {
                imgId:1,
                imgUrl: "http://clipart.info/images/ccovers/1510684305Captain-America-tsum-tsum-marvel.png",
                imgAlt: "Captain-America",
                imgClickStatus: false
            },
            {
                imgId:2,
                imgUrl: "http://clipart.info/images/ccovers/1510684304She-Hulk-tsum-tsum-marvel.png",
                imgAlt: "Gamora",
                imgClickStatus: false
            },
            {
                imgId:3,
                imgUrl: "http://clipart.info/images/ccovers/1510684304Spider-Man-tsum-tsum-marvel.png",
                imgAlt: "Spider-Man",
                imgClickStatus: false
            },
            {
                imgId:4,
                imgUrl: "http://clipart.info/images/ccovers/1510684304Hulk-tsum-tsum-marvel.png",
                imgAlt: "Hulk",
                imgClickStatus: false
            },
            {
                imgId:5,
                imgUrl: "http://clipart.info/images/ccovers/1510684304Rocket-Raccoon-tsum-tsum-marvel.png",
                imgAlt: "Rocket",
                imgClickStatus: false
            },
            {
                imgId:6,
                imgUrl: "http://clipart.info/images/ccovers/1510684304tsum-tsum-marvel.png",
                imgAlt: "Winter-Soldier",
                imgClickStatus: false
            },
            {
                imgId:7,
                imgUrl: "http://clipart.info/images/ccovers/1510684303Falcon-tsum-tsum-marvel.png",
                imgAlt: "Falcon",
                imgClickStatus: false
            },
            {
                imgId:8,
                imgUrl: "http://clipart.info/images/ccovers/1510684304Captain-tsum-tsum-marvel.png",
                imgAlt: "Captain-Marvel",
                imgClickStatus: false
            }
        ]
    };

    render() {
        return (
            <div>
                <Header
                score={this.state.score}
                topScore={this.state.topScore}
                clickStatus={this.state.clickStatus}
                />
                <Banner />
                <Main results={this.state.results} />
                <Footer />
            </div>
        );
    }
}

export default SearchResultContainer;
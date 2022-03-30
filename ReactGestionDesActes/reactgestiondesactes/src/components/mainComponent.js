import React from "react";
import GoogleFontLoader from 'react-google-font-loader'
import Overlay from "./overlay";
import PageLoader from "./pageLoader";
import NavBar from "./navBar";
import SearchBar from "./searchBar";
import SideBar from "./sideBar";
import "adminbsb-materialdesign/css/themes/all-themes.css";

class MainComponent extends React.Component{
    state = {
        bodyClass: "theme-green ls-closed",
        displayOverlay: "none",
        width: window.screen.width,
    }
    onBarClick=()=>{
        if(this.state.bodyClass==="theme-green ls-closed overlay-open"){
            this.setState({bodyClass: "theme-green ls-closed"});
            this.setState({displayOverlay: "none"});
        } else if(this.state.bodyClass==="theme-green ls-closed"){
            this.setState({bodyClass: "theme-green ls-closed overlay-open"});
            this.setState({displayOverlay: "block"});

        }
    };

    onscreenresize=()=>{
        console.log(window.screen.width);
        this.setState({width: window.screen.width});
    };

    componentWillMount(){
        window.addEventListener("resize", this.onscreenresize)
    };

    componentWillUnmount(){
        window.removeEventListener("resize", this.onscreenresize)
    };

    componentDidMount(){
        var inputall=document.querySelectorAll("input");
        inputall.forEach((input)=>{
            input.addEventListener("focus", function(){
                this.parentNode.className="form-line focused"
            });
        });
        inputall.forEach((input)=>{
            input.addEventListener("blur", function(){
                this.parentNode.className="form-line"
            });
        });
    }

    render(){
        if (this.state.width > 1150){
            document.getElementById("root").className="theme-green";
        }else {
            document.getElementById("root").className=this.state.bodyClass;
        }
        return(
            <React.Fragment>
                <GoogleFontLoader
                    fonts={[
                        {
                        font: 'Roboto',
                        weights: [400, 700],
                        }
                    ]}
                    subsets={['latin', 'cyrillic-ext']}
                />
                <GoogleFontLoader
                    fonts={[
                        {
                        font: 'Material+Icons'
                        }
                    ]}
                />
                <PageLoader/>
                <Overlay display={this.state.displayOverlay}/>
                <NavBar onBarClick={this.onBarClick}/>
                <SearchBar/>
                <SideBar activepage={this.props.activepage}/>
                {this.props.page}
            </React.Fragment>
        );
    }
}
export default MainComponent;
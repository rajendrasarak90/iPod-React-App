// Importing necessary components and libraries
import Buttons from "./Buttons";
import Display from "./Display";
import React from "react";
import "./styles.css";
import ZingTouch from "zingtouch";

// Defining the App component
class App extends React.Component {
  // Constructor to initialize the state
  constructor() {
    super();
    this.state = {
      menuItems: {
        mainMenu: true,
        coverFlow: false,
        music: false,
        games: false,
        settings: false,
        all_songs: false,
        artists: false,
        albums: false
      },
    };
  }

  // Function to handle the click on menu items in the display
  handleButtonClick = (e) => {
    let menuList = document.querySelectorAll(".menu-item");
    let arrowIcon = document.querySelectorAll(".arrow-icon");
    for(let i=0 ; i<menuList.length ; i++) {
      let element = menuList[i];
      if (element !== e.target) {
        element.classList.remove("active");
        arrowIcon[i].classList.add("remove");
      } else {
        element.classList.add("active");
        arrowIcon[i].classList.remove("remove");
      }
    }
  };

  // Function to navigate to a specific window
  navigate = () => {
    if (this.state.menuItems.mainMenu) {
      let { menuItems } = this.state;
      let nav = document.querySelector(".active").dataset.navigate;
      for (let item in menuItems) {
        if (nav === item) menuItems[item] = true;
        else menuItems[item] = false;
      }
      this.setState({
        menuItems,
      });
    }
    if (this.state.menuItems.music) {
      let { menuItems } = this.state;
      let nav = document.querySelector(".active").dataset.navigate;
      for (let item in menuItems) {
        if (nav === item) menuItems[item] = true;
        else menuItems[item] = false;
      }
      console.log("in navigate music: ", this.state.menuItems)
      this.setState({
        menuItems,
      });
    }
  };

  // Function to go back to the main menu
  goBack = () => {
    this.setState({
      menuItems: {
        mainMenu: true,
        coverFlow: false,
        music: false,
        games: false,
        settings: false,
      },
    });
  };

  // Function called when the component is mounted
  componentDidMount = () => {
    // Creating an instance of ZingTouch.Region
    var myRegion = new ZingTouch.Region(
      document.querySelector(".iPod-container")
    );
    // Getting the wheel element
    var myElement = document.getElementById("wheel");
    // Binding the 'rotate' event to the wheel element
    myRegion.bind(myElement, "rotate", function (e) {
      if (e.detail.distanceFromLast > 1.2) {
        // Rotating clockwise
        let menuList = document.querySelectorAll(".menu-item");
        let arrowIcon = document.querySelectorAll(".arrow-icon");
        for (let i = 0; i < menuList.length - 1; i++) {
          if (menuList[i].classList.contains("active")) {
            menuList[i].classList.remove("active");
            arrowIcon[i].classList.add("remove");
            menuList[i + 1].classList.add("active");
            arrowIcon[i + 1].classList.remove("remove");
            return;
          }
        }
      }
      if (e.detail.distanceFromLast < -2) {
        // Rotating anti-clockwise
        let menuList = document.querySelectorAll(".menu-item");
        let arrowIcon = document.querySelectorAll(".arrow-icon");
        for (let i = menuList.length - 1; i > 0; i--) {
          let isActive = menuList[i].classList.contains("active");
          if (isActive) {
            menuList[i].classList.remove("active");
            arrowIcon[i].classList.add("remove");
            menuList[i - 1].classList.add("active");
            arrowIcon[i - 1].classList.remove("remove");
            return;
          }
        }
      }
    });

    // Adding event listener for select button
    let selectButton = document.querySelector(".select-button");
    selectButton.addEventListener("click", this.navigate);

    // Adding event listener for menu button
    let menuButton = document.querySelector(".menu-button");
    menuButton.addEventListener("click", this.goBack);
  };

  // Function to render the App component
  render() {
    return (
      <div className="iPod-container" draggable="false">
        <Display
          menuItems={this.state.menuItems}
          handleButtonClick={this.handleButtonClick}
          navigate={this.navigate}
        />
        <Buttons />
      </div>
    );
  }
}

export default App;

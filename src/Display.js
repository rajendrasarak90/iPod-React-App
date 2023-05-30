import React from "react";
// import MainMenu from "./MainMenu";

class Display extends React.Component {
  render() {
    // Destructure props into variables
    let { mainMenu, coverFlow, music, games, settings, all_songs,artists, albums} = this.props.menuItems;
    let { handleButtonClick, navigate } = this.props;

    return (
      // Main display container
      <div className="display" draggable="false">
        {/* Render the main menu if mainMenu prop is true */}
        {mainMenu && (
          <ul
            className="main-menu"
            onMouseDown={handleButtonClick}
            onMouseUp={navigate}
          >
            {/* Main menu title */}
            <h2> iPod.js </h2>
            {/* Main menu items */}
            <li className="menu-item cover-flow active" data-navigate="coverFlow">
              Cover Flow <i className="arrow-icon fa-sharp fa-solid fa-arrow-right"></i>
            </li>
            <li className="menu-item music" data-navigate="music">
              Music <i className="remove arrow-icon fa-sharp fa-solid fa-arrow-right"></i>
            </li>
            <li className="menu-item games" data-navigate="games">
              Games <i className="remove arrow-icon fa-sharp fa-solid fa-arrow-right"></i>
            </li>
            <li className="menu-item settings" data-navigate="settings">
              Settings <i className="remove arrow-icon fa-sharp fa-solid fa-arrow-right"></i>
            </li>
          </ul>
        )}
        {/* Render coverFlow image if coverFlow prop is true */}
        {coverFlow && (
          <img
            className="menu-img"
            src="https://cdn.wallpapersafari.com/61/34/ETkBUo.jpeg"
            alt="menu"
          />
        )}
        {/* Render music image if music prop is true */}
        {music && (<>{console.log(this.props.menuItems)}
          <ul
            className="main-menu"
            onMouseDown={handleButtonClick}
            onMouseUp={navigate}
          >
            {/* Main menu title */}
            <h2> Music </h2>
            {/* Main menu items */}
            <li className="menu-item all_songs active" data-navigate="all_songs">
              All Songs <i className="arrow-icon fa-sharp fa-solid fa-arrow-right"></i>
            </li>
            <li className="menu-item artists" data-navigate="artists">
              Artists <i className="remove arrow-icon fa-sharp fa-solid fa-arrow-right"></i>
            </li>
            <li className="menu-item albums" data-navigate="albums">
              Albums <i className="remove arrow-icon fa-sharp fa-solid fa-arrow-right"></i>
            </li>
          </ul></>
        )}
        {/* Render games image if games prop is true */}
        {games && (
          <img
            className="menu-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLXhSkVpIJU47tvJKMsuczAYKKOIqme2K6NjjbsrihQw&usqp=CAU&ec=48665698"
            alt="games"
          />
        )}
        {/* Render settings image if settings prop is true */}
        {settings && (
          <img
            className="menu-img"
            src="https://t3.ftcdn.net/jpg/03/00/71/16/240_F_300711632_r2Vh9WjuRdX5CnBFFyq7FUZS1F4EMCk4.jpg"
            alt="settings"
          />
        )}
        {/* Render games image if games prop is true */}
        {all_songs && (<>
            {console.log(this.props.menuItems)}
            <img
              className="menu-img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLXhSkVpIJU47tvJKMsuczAYKKOIqme2K6NjjbsrihQw&usqp=CAU&ec=48665698"
              alt="games"
            /></>
          )}
          {/* Render settings image if settings prop is true */}
          {artists && (
            <img
              className="menu-img"
              src="https://t3.ftcdn.net/jpg/03/00/71/16/240_F_300711632_r2Vh9WjuRdX5CnBFFyq7FUZS1F4EMCk4.jpg"
              alt="settings"
            />
          )}
          {/* Render settings image if settings prop is true */}
          {albums && (
            <img
              className="menu-img"
              src="https://t3.ftcdn.net/jpg/03/00/71/16/240_F_300711632_r2Vh9WjuRdX5CnBFFyq7FUZS1F4EMCk4.jpg"
              alt="settings"
            />
          )}
      </div>
    );
  }
}

export default Display;

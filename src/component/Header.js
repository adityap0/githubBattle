import React from "react";
class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      language: null,
    };
  }
  handleLanguage = (event) => {
   
       this.props.handleLanguage(event.target.innerText.toLowerCase())
  };
  render() {
    return (
      <>
        <div className="flex flex-col w-6/12 mx-auto my-20">
          <div className="flex justify-between align-middle">
            <ul className="flex text-xl w-3/12 justify-between font-bold">
              <li>Poular</li>
              <li>Battle</li>
            </ul>
            <div className="text-2xl">🔦</div>
          </div>
          <div className="m-10">
            <ul className="flex w-8/12 mx-auto justify-between font-bold cursor-pointer text-xl">
              {["All", "JavaScript", "Ruby", "Java", "CSS", "Python"].map(
                (lang) => {
                  return (
                    <>
                      <li
                        onClick={this.handleLanguage}
                      >
                        {lang}
                      </li>
                    </>
                  );
                }
              )}
            </ul>
          </div>
          <span
            className={
              this.props.allStars
                ? "text-center text-4xl hidden"
                : "text-center text-4xl"
            }
          >
            Fetching Repos...
          </span>
        </div>
      </>
    );
  }
}
export default Header;

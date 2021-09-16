import React from "react";

class Card extends React.Component {

  render() {
    return (
      <>
        <div className="flex w-10/12 mx-auto flex-wrap justify-between">
          {this.props.allStars.map((cv, id) => {
            return (
              <div className="flex flex-col w-64 p-4 m-4 border mx-auto bg-gray-200 justify-center">
                <h1 className="text-center text-3xl">#{id + 1}</h1>
                <img
                  src={cv.owner.avatar_url}
                  alt=""
                  className="w-8/12 mx-auto m-4"
                />
                <span className="text-red-600 font-bold text-2xl text-center">
                  {cv.name}
                </span>
                <ul className="m-4 p-2">
                  <li className="m-2 text-xl">🙋🏻‍♂️ {cv.name}</li>
                  <li className="m-2 text-xl">
                    ⭐️ {cv.stargazers_count} stars
                  </li>
                  <li className="m-2 text-xl">⚠️ 26,522 forks</li>
                  <li className="m-2 text-xl">🥄 {cv.open_issues_count} open issues</li>
                </ul>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
export default Card;

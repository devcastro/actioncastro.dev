import React from "react";
import "./LinkList.css";

export default function LinkList() {
  return (
    <>
      <ul className="linklist">
        <a id="website-link" href="https://davidcastro.dev">
          {" "}
          <li> Portfolio </li>{" "}
        </a>

        <a id="github-link" href="https://github.com/devcastro">
          {" "}
          <li> GitHub </li>{" "}
        </a>

        <a id="twitch-link" href="https://www.twitch.tv/actioncastro">
          {" "}
          <li> Twitch </li>{" "}
        </a>

        <a id="twitter-link" href="https://twitter.com/dCastroMMA">
          {" "}
          <li> Twitter </li>{" "}
        </a>

        <a id="instagram-link" href="https://www.instagram.com/davidcvstro/">
          {" "}
          <li> Instagram </li>{" "}
        </a>

        <a
          id="linkedin-link"
          href="https://www.linkedin.com/in/david-castro-munoz-aab526170/"
        >
          {" "}
          <li> LinkedIn </li>{" "}
        </a>
      </ul>
    </>
  );
}

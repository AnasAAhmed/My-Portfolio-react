import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineArrowUp,
  AiFillLinkedin
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="Founder"
        />

        <h2>Anas Ahmed</h2>

        <p>Biutl with React, Sass ,Javascript & Bootstrap</p>
        <p>Created By Anas Ahmed</p>

    

      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://linkedin.com" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://instagram.com" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/AnasAAhmed" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;

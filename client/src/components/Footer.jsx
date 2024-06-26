import React from "react";
import { FaTelegram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <span>
        <h4>Copyright © 2024 | Zohidjon Ma'rufov</h4>
      </span>
      <span>
        <a href="https://t.me/ZohidjonMarufov" className="link">
          <FaTelegram className="social-media" />
        </a>
        <a href="https://discord.gg/uPtrHeku5A" className="link">
          <FaDiscord className="social-media" />
        </a>
      </span>
    </footer>
  );
};

export default Footer;

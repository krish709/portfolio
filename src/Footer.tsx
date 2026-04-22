import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">

      {/* Wave Top */}
      <div className="footer__wave"></div>

      {/* Content */}
      <div className="footer__container">

        {/* About */}
        <div className="footer__col">
          <h3>About Us</h3>
          <p>
            We build modern UI interfaces using React, TypeScript and SCSS
            with clean animations and responsive design.
          </p>

          <div className="footer__social">
            <span>🌐</span>
            <span>🐦</span>
            <span>📸</span>
            <span>💼</span>
          </div>
        </div>

        {/* Menu */}
        <div className="footer__col">
          <h3>Menu</h3>
          <span>Home</span>
          <span>About Us</span>
          <span>Services</span>
          <span>Blog</span>
          <span>Contact</span>
        </div>

        {/* Links */}
        <div className="footer__col">
          <h3>Quick Links</h3>
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
          <span>Disclaimer</span>
        </div>

        {/* Contact */}
        <div className="footer__col">
          <h3>Contact Us</h3>
          <span>📍 India</span>
          <span>📞 +91 12345 67890</span>
          <span>✉️ demo@email.com</span>
          <span>🌍 www.demo.com</span>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer__bottom">
        © 2026 All Rights Reserved
      </div>

    </footer>
  );
};

export default Footer;
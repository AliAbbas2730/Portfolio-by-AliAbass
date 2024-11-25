import React from "react"
function Home() {
  return (
    <>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portfolio Website</title>
    <link rel="stylesheet" href="style.css" />
    <link
      href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
      rel="stylesheet"
    />
    {/* Header */}
    <header className="header">
      <a href="#home" className="logo">
        {" "}
        Ali <span>Abbas</span>
      </a>
      <i className="bx bx-menu" id="menu-icon" />
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
    {/* Home Section */}
    {/* Home Section */}
    <section className="home" id="home">
      <div className="home-content">
        <h1>
          Hi, It's <span>Ali</span>
        </h1>
        <h3>
          I'm a <span>Frontend Developer</span>
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          incidunt quae perspiciatis voluptate, reiciendis numquam pariatur
          maxime, ad aut dolore labore voluptas sapiente iste ipsa autem nulla a
          ullam voluptatibus.
        </p>
        <div className="btn-group">
          <a href="#" className="btn">
            Hire
          </a>
          <a href="#contact" className="btn">
            Contact
          </a>
        </div>
        <div className="social-icons">
          <a href="#">
            <i className="bx bxl-github" />
          </a>
          <a href="#">
            <i className="bx bxl-linkedin-square" />
          </a>
          <a href="#">
            <i className="bx bxl-instagram-alt" />
          </a>
        </div>
      </div>
      <div className="home-img">
        <img src="/images/ali.png" alt="Ali Abbas" />
      </div>
    </section>
    {/* About Section */}
    <section className="about" id="about">
      <div className="about-img">
        <img src="/images/ali.png" alt="Ali Abbas" />
      </div>
      <div className="about-content">
        <h2>
          About <span>Me</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          aspernatur? Unde dolor animi vero, accusamus commodi a corporis
          consequatur eum aut ipsa molestias provident. Vitae similique
          consectetur explicabo. Magnam, similique?
        </p>
        <a href="#" className="btn">
          Read More
        </a>
      </div>
    </section>
    {/* Services Section */}
    <section className="services" id="services">
      <h2 className="heading">Services</h2>
      <div className="services-container">
        <div className="services-box">
          <div className="services-info">
            <i className="bx bxs-devices" />
            <h4>Graphic Designer</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat iste
              temporibus amet deserunt labore non repellendus natus qui eum ea
              fugit, repellat similique laudantium ipsa cumque possimus
              voluptatibus distinctio in.
            </p>
          </div>
        </div>
        <div className="services-box">
          <div className="services-info">
            <i className="bx bx-code" />
            <h4>Frontend Development</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat iste
              temporibus amet deserunt labore non repellendus natus qui eum ea
              fugit, repellat similique laudantium ipsa cumque possimus
              voluptatibus distinctio in.
            </p>
          </div>
        </div>
        <div className="services-box">
          <div className="services-info">
            <i className="bx bx-code-curly" />
            <h4>Backend Development</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat iste
              temporibus amet deserunt labore non repellendus natus qui eum ea
              fugit, repellat similique laudantium ipsa cumque possimus
              voluptatibus distinctio in.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* Contact Section */}
    <section className="contact" id="contact">
      <h2 className="heading">
        Contact <span>Me</span>
      </h2>
      <form action="">
        <div className="input-box">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input-box">
          <input type="number" placeholder="Phone Number" />
          <input type="text" placeholder="Subject" />
        </div>
        <div className="input-group-2">
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Your Message"
            defaultValue={""}
          />
          <input type="submit" defaultValue="Send Message" className="btn" />
        </div>
      </form>
    </section>
    {/* Footer */}
    <footer className="footer">
      <div className="social-icons">
        <a href="#">
          <i className="bx bxl-github" />
        </a>
        <a href="#">
          <i className="bx bxl-linkedin-square" />
        </a>
        <a href="#">
          <i className="bx bxl-instagram-alt" />
        </a>
      </div>
      <ul className="list">
        <li>
          <a href="#">FAQ</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <p className="copyright">© Ali Abbas | All Rights Reserved</p>
    </footer>
  </>
  
  )
}
export default Home

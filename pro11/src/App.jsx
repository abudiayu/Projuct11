import './App.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="header_container">
        <div className="logo">
          <h1>Qa<span>Dire</span></h1>
        </div>
        <div className="midile_logo">
          <img src="../../public/midile.png" alt="" />
        </div>
        <div className="menu_icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
        <nav className={menuOpen ? 'nav_active' : ''}>
          <ul>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#skill" onClick={() => setMenuOpen(false)}>Skill</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            <li><a href="#project" onClick={() => setMenuOpen(false)}>Project</a></li>
          </ul>
        </nav>
      </header>
      <section className="section_container">
        <div className="section_wrapper">
          <div className="img_container">
            <div>
              <h1 className='stylesh'>
                Q <br />a <br />  D <br />i <br />R <br /> e
              </h1>
            </div>
            <img src="../../men.jpg" alt="" />
          </div>
          <div className="text_container">
            <h1>I am <span> QADIRE </span> Programmer</h1>
            <h4>Hir i am to help ur busness!!</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus nisi deleniti quaerat consequatur deserunt harum recusandae ex facere sed autem incidunt, doloremque suscipit dolores architecto velit perferendis vel neque illum.</p>

          </div>
        </div>
      </section>
      <section className="projuct_container">
        <div className="projuct_wrapper">
          <h1>Latest Updated Projects</h1>
          <div className="projuct_grid">
            <a href="https://babilons-amazon.netlify.app/" className="projuct_card">
              <div className="projuct_image">
                <img src="https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=500&h=300&fit=crop" alt="Amazon Clone" />
              </div>
              <div className="projuct_content">
                <h3>Amazon Clone</h3>
                <p>E-commerce platform with modern UI</p>
              </div>
            </a>
            <a href="https://github.com/abudiayu/netflix/" className="projuct_card">
              <div className="projuct_image">
                <img src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=500&h=300&fit=crop" alt="Netflix Clone" />
              </div>
              <div className="projuct_content">
                <h3>Netflix Clone</h3>
                <p>Streaming service interface design</p>
              </div>
            </a>
            <a href="https://ourscafe.netlify.app/" className="projuct_card">
              <div className="projuct_image">
                <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=300&fit=crop" alt="Cafe Website" />
              </div>
              <div className="projuct_content">
                <h3>Cafe Website</h3>
                <p>Modern cafe landing page</p>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="service_container">
        <div className="service_wrapper">
          <h1>Our Services</h1>
          <div className="service_list">
            <div className="service_card">
              <div className="service_image">
                <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop" alt="Application Development" />
              </div>
              <div className="service_content">
                <h3>Application Development</h3>
                <p>Build powerful mobile and desktop applications tailored to your business needs</p>
              </div>
            </div>
            <div className="service_card">
              <div className="service_image">
                <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop" alt="Software Development" />
              </div>
              <div className="service_content">
                <h3>Software Development</h3>
                <p>Custom software solutions designed to streamline your operations</p>
              </div>
            </div>
            <div className="service_card">
              <div className="service_image">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop" alt="Web Development" />
              </div>
              <div className="service_content">
                <h3>Web Development</h3>
                <p>Modern, responsive websites that engage your audience and drive results</p>
              </div>
            </div>
            <div className="service_card">
              <div className="service_image">
                <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=300&fit=crop" alt="Annual Web Updates" />
              </div>
              <div className="service_content">
                <h3>Annual Web Updates</h3>
                <p>Keep your website fresh and secure with regular maintenance and updates</p>
              </div>
            </div>
            <div className="service_card">
              <div className="service_image">
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop" alt="Teaching Programming" />
              </div>
              <div className="service_content">
                <h3>Teaching Programming</h3>
                <p>Learn coding from basics to advanced with personalized mentorship and guidance</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="client_container">
        <div className="client_wrapper">
          <h1>Our Clients</h1>
          <div className="client_marquee">
            <div className="client_track">
              <div className="client_logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/320px-Microsoft_logo_%282012%29.svg.png" alt="Microsoft" />
              </div>
              <div className="client_logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/320px-Google_2015_logo.svg.png" alt="Google" />
              </div>
              <div className="client_logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/320px-Amazon_logo.svg.png" alt="Amazon" />
              </div>
              <div className="client_logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/160px-Apple_logo_black.svg.png" alt="Apple" />
              </div>
              <div className="client_logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/200px-2021_Facebook_icon.svg.png" alt="Meta" />
              </div>
              <div className="client_logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/200px-Instagram_logo_2022.svg.png" alt="Instagram" />
              </div>
              <div className="client_logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/240px-LinkedIn_logo_initials.png" alt="LinkedIn" />
              </div>
              <div className="client_logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Docker_%28container_engine%29_logo.svg/320px-Docker_%28container_engine%29_logo.svg.png" alt="Docker" />
              </div>
              <div className="client_logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/320px-Microsoft_logo_%282012%29.svg.png" alt="Microsoft" />
              </div>
              <div className="client_logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/320px-Google_2015_logo.svg.png" alt="Google" />
              </div>
              <div className="client_logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/320px-Amazon_logo.svg.png" alt="Amazon" />
              </div>
              <div className="client_logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/160px-Apple_logo_black.svg.png" alt="Apple" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer_container">
        <div className="footer_wrapper">
          <div className="footer_icon_wrapper">
            <div className="footer_logo">
              <h1>QaDire</h1>
            </div>
            <div className="footer-icon">
                <FacebookOutlinedIcon/>
                <InstagramIcon/>
                <TelegramIcon/>
                <XIcon/>
                <YouTubeIcon/>
            </div>
          </div>
        </div>
        <div className="footer_link">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Me</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>

          <ul>
            <li><a href="#">GitHub</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">YouTube</a></li>
            <li><a href="#">Portfolio</a></li>
          </ul>

          <ul>
            <li><a href="#">Download CV</a></li>
            <li><a href="#">Hire Me</a></li>
            <li><a href="#">Email Me</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
        
      </footer>
      <div className="info_container">
        <h3>Abdul Qadir</h3>

        <p>
          Email: 
          <a href="mailto:abdulkadirayalsew@gmail.com">
            abdulkadirayalsew@gmail.com
          </a>
        </p>

        <p>
          Phone: 
          <a href="tel:+251901013902">
            +251 901 013 902
          </a>
        </p>
      </div>
      <div className="copylink">
          © 2026 Abdul Qadir Ayalsew. All Rights Reserved.
      </div>      
    </>
  )
}

export default App

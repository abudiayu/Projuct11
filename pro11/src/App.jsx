import './App.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

function App() {
  return (
    <>
      <header className="header_container">
        <div className="logo">
          <h1>Qa<span>Dire</span></h1>
        </div>
        <div className="midile_logo">
          <img src="../../public/midile.png" alt="" />
        </div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skill">Skill</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#project">Project</a></li>
          </ul>
        </nav>
      </header>
      <section className="section_container">
        <div className="section_wrapper">
          <div className="img_container">
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
      <footer className="footer_container">
        <div className="footer_wrapper">
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
        <div className="footer_link">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Me</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <ul>
            <li><a href="#">GitHub</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Download CV</a></li>
            <li><a href="#">Email Me</a></li>
          </ul>
        </div>
        
      </footer>
      <div className="copylink">
          © 2026 Abdul Qadir Ayalsew. All Rights Reserved.
      </div>
    </>
  )
}

export default App

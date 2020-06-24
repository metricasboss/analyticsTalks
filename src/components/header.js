import { Link } from "gatsby"
import React from "react"

class Header extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {showHamburguer: false};
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e){
    this.setState(prevState => ({
      showHamburguer: !prevState.showHamburguer
    }));
  }
  render() {
    return (
      <nav className="is-spaced navbar has-shadow is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
          <Link to="/" className="navbar-item">
              <img alt="" src="https://metricasboss.com.br/assets/images/mala-logo.svg" width="35" height="32" />
              <h1 className="title is-4">Métricas Boss</h1>
            </Link>

            <Link to="false" className={`navbar-burger burger ${this.state.showHamburguer
            ? "is-active"
            : ""}`} 
            aria-label="menu" 
            aria-expanded="false" 
            data-target="navbarBasicExample" 
            onClick={this.handleClick}>

              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </Link>
          </div>
      
          <div className={`navbar-menu ${this.state.showHamburguer
            ? "is-active"
            : ""}`}>
            <div className="navbar-end">
              
              <Link 
                to="/"
                className="navbar-item"
              >
                O que fazemos
              </Link>

              <Link 
                to="/"
                className="navbar-item"
              >
                Blog
              </Link>

              <Link 
                to="/"
                className="navbar-item"
              >
                Podcast
              </Link>

              <Link 
                to="/"
                className="navbar-item"
              >
                Vídeos
              </Link>

              <Link 
                to="/"
                className="navbar-item"
              >
                Cursos
              </Link>

            
              <Link 
                to="/"
                className="navbar-item"
              >
                Cases
              </Link>
                  
              <Link 
                to="/"
                className="navbar-item"
              >
                FAQ
              </Link>

              <Link 
                to="/"
                className="navbar-item"
              >
                Consultoria
              </Link>
              <hr className="navbar-divider" />   

              <Link
              to="/"
              className="navbar-item button is-success"
              >
                Teste o seu Google Analytics
              </Link>

            </div>

            </div>
          </div>
      </nav>
    )
  }
}

export default Header
import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";

class Header extends Component {
  render() {
     const {renderBg, data} = this.props;

    if(data){
       var project = this.props.data.project;
       var github = this.props.data.github;
      var name = this.props.data.name;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">
      {/* {renderBg ? <ParticlesBg type="cobweb" color="#444444" bg={true} /> : null} */}
      

      <div className="row banner">
      
         <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3>{description}.</h3>
            <hr />
            <ul className="social">
               <a href={project} className="button btn project-btn"><i className="fa fa-github"></i>Project</a>
               <a href={github} className="button btn github-btn"><i className="fa fa-github"></i>Github</a>
            </ul>
         </div>
      </div>

   </header>
    );
  }
}

export default Header;

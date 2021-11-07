import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

class Portfolio extends Component {
  render() {

    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = 'images/portfolio/' + projects.image;
        
        return (
          <Slide>
          <div key={projects.title} className="portfolio-item">
            <div className="item-wrap">
              <a href={projects.url} title={projects.title} style={{height: 500}}>
                <img alt={projects.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                      <h2 style={{color: "white"}}>{projects.title}</h2>
                      <h3 style={{color: "#7c7c7c"}}>{projects.category}</h3>
                  </div>
                </div>
              </a>
            </div>
          </div>
          </Slide>
        )
      })
    }

    return (
      <section id="portfolio">
        <CarouselProvider className="row" infinite={true} orientation="vertical" naturalSlideHeight={300} naturalSlideWidth={300} totalSlides={5}>
          <div className="six rows">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <Slider>
                {projects}
              </Slider>
              <ButtonBack>Back</ButtonBack>
              <ButtonNext>Next</ButtonNext>
            </div>
          </div>
        </CarouselProvider>
      </section>
    );
  }
}

export default Portfolio;

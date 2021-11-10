import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";
import $ from 'jquery';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import SunnySideAgency from './Components/SunnysideAgency';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      //foo: 'bar',
      resumeData: {},
      page: 'Home'
    };
    this.setPage = this.setPage.bind(this);
    this.getPageToRender = this.getPageToRender.bind(this);
  }

  getResumeData(){
    $.ajax({
      url:'./resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  setPage = pageName => {
    const {page} = this.state;
    if (page === pageName) return;
    this.setState({page: pageName});
  }

  getPageToRender = () => {
    const {page} = this.state;
    if (page === 'About') {
      return <About data={this.state.resumeData.main}/>
    }

    if (page === 'Resume') {
      return <Resume data={this.state.resumeData.resume}/>
    }

    if (page === 'Portfolio') {
      return <Portfolio data={this.state.resumeData.portfolio}/>
    }

    if (page === 'Contact') {
      return <Contact data={this.state.resumeData.main}/>
    }

    if (page === 'Sample') {
      return <SunnySideAgency />
    }

    return <Header data={this.state.resumeData.main} renderBg={page === "Home"} />
  }

  render() {
    const {page} = this.state;
    return (
      <div className="App">
        <ParticlesBg type="cobweb" color="#444444" bg={true} />
        <Navbar data={this.state.resumeData.main} curPage={page} setPage={this.setPage} />
        {this.getPageToRender()}
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'
import { FaFacebookF,FaLinkedinIn,FaGithub,FaGitlab,FaInstagram,FaTumblr } from "react-icons/fa";

export default class Socialmedia extends Component {
    render() {
        return (
            

        
            <div className="row my-2 mx-2 text-center">
                
                <div className="col" >
                    <div className="social">
                    <a href="https://www.facebook.com/profile.php?id=100010684601743"><FaFacebookF /></a>

                    </div>
                </div>
                <div className="col" >
                    <div className="social">
                  <a href="https://www.linkedin.com/in/brahim-hmida-29a305192/">  <FaLinkedinIn /></a>

                    </div>
                </div>
                <div className="col" >
                    <div className="social">
                   <a href="https://github.com/brahim0"><FaGithub /></a>

                    </div>
                </div>
                <div className="col" >
                    <div className="social">
                  <a href="https://gitlab.com/brah17">  <FaGitlab /></a>

                    </div>
                </div>
                <div className="col" >
                    <div className="social">
                 <a href="https://www.instagram.com/brahim_hmida/?hl=fr">   <FaInstagram/></a>
                    </div>
                  
                </div>
                <div className="col" >
                    <div className="social">
                  <a href="https://twitter.com/hmida_brahim">  <FaTumblr /></a>

                    </div>
                </div>
                
            </div>
          
        )
    }
}

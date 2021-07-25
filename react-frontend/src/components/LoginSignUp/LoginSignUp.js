import React, { Component } from "react";
import Header from "../Header";
import "./LoginSignUp.css";

export default class LoginSignUp extends Component  {
    render(){
        return (
            <section>
            <Header />
            <link rel="stylesheet" href="LoginSignUp.css"></link>
            <div className="hero">
                <div className="form-box">
                    <div className="button-box">
                        <div id="btn"></div>
                        <button type="button" className="toggle-btn" onClick= {login}>Log In</button>
                        <button type="button" className="toggle-btn" onClick={register} >Register</button>

                    </div>
                    <form id="login" class="input-group">
                        <input type="email" className="input-field" placeholder="Email" required></input>
                        <input type="text" className="input-field" placeholder="Company ID" required></input>


                        <input type="password" className="input-field" placeholder="Password" required></input>
                        <input type="checkbox" className="check-box"></input><span>Remember Password</span>
                        <button type="submit" className="submit-btn">Log in</button>


                    </form>
                    <form id="register" class="input-group">
                        <input type="text" className="input-field" placeholder="Company ID" required></input>
                        <input type="text" className="input-field" placeholder="Company Name" required></input>
                        <input type="phone" className="input-field" placeholder="Contact Number" required></input>
                        <input type="text" className="input-field" placeholder="Website" required></input>


                        <input type="email" className="input-field" placeholder="Email" required></input>
                        <input type="password" className="input-field" placeholder="Password" required></input>
                        <input type="password" className="input-field" placeholder="Re-enter Password" required></input>



                        <input type="checkbox" className="check-box"></input><span>Agree to terms and conditions</span>
                        <button type="submit" className="submit-btn">Register</button>



                    </form>
                </div>
            </div>

          
            


          </section>
       



        );
    


    function register(){

    var x=document.getElementById("login");
    var y=document.getElementById("register");
    var z=document.getElementById("btn");
    x.style.left= "-400px";
    y.style.left="0px";
    z.style.left="113.7px";
    y.style.top="-271px";


    }

    function login(){
        var x=document.getElementById("login");
        var y=document.getElementById("register");
        var z=document.getElementById("btn");
        x.style.left= "0px";
        y.style.left="-400px";
        z.style.left="0px";
    
    
        }

    }
}
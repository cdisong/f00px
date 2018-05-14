import React from 'react';

class Footer extends React.Component {
    render() { 
        return ( 
            <footer className="footer">
                <section className="footer-left">
                    <div className="footer-left-header">
                        <div className="ughreally">
                        </div>
                        <div><h1>FPX</h1></div>
                    </div>
                    <p>Fine Pixels, a photo-hosting web application inspired by 500px.</p> 
                    <p>FPX utilizes a PostgreSQL database, Ruby-on-Rails backend, and React.js/Redux frontend.</p>
                </section>
                <section className="footer-right">
                    <div>
                        <i className="fa fa-github" aria-hidden="true"></i><a href="https://github.com/cdisong">   Github</a>
                    </div>
                    <div>
                        <i className="fa fa-linkedin"></i><a href="https://www.linkedin.com/in/cdisong">   Linkedin</a> 
                    </div>
                </section>
            </footer>
        );
    }
}

export default Footer;
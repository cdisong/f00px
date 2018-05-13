import React from 'react';

class Footer extends React.Component {
    render() { 
        return ( 
            <footer className="footer">
                <section className="footer-left">
                    <h1>F00PX</h1>
                    <p>A photo-hosting web application inspired by 500px.</p> 
                    <p>F00PX utilizes a PostgreSQL database, Ruby-on-Rails backend, and React.js/Redux frontend.</p>
                </section>
                <section className="footer-right">
                    <a href="https://github.com/cdisong">Github</a>
                    <a href="https://www.linkedin.com/in/cdisong">Linkedin</a>
                </section>
            </footer>
        );
    }
}

export default Footer;
import React from "react" ;

export const Footer = (props) => {

    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <ul className="list-inline social-buttons">
                            <li><a href="https://github.com/Sa3y/saay" target><i className="fa fa-github"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <span className="copyright">الحقوق محفوظة &copy; لموقع ساعٍ ١٤٣٨</span>
                    </div>
                </div>
            </div>
        </footer>

    );

}
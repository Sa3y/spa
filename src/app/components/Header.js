import React from "react" ;
import {Link} from "react-router-dom" ;
import { browserHistory } from "react-router" ;




export const Header = (props) => {

        return (
            <nav className="navbar navbar-default navbar-custom navbar-fixed-top">
                <div className="container">
                    {/* Brand and toggle get grouped for better mobile display */}
                    <div className="navbar-header page-scroll">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span> القائمة <i className="fa fa-bars"></i>
                        </button>
                        <Link className="navbar-brand page-scroll" to="/"><img src="../img/saai.png" alt="هوية ساع" className="logo"/></Link>
                    </div>

                    {/* Collect the nav links, forms, and other content for toggling */}
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link className="page-scroll" to="/terms/">  بنود الخدمة </Link>
                            </li>
                            <li>
                                <Link className="page-scroll" to="/privacy/">  سياسية الخصوصية </Link>
                            </li>
                            <li className="page-scroll">
                                <Link className="page-scroll" to="/dashboard/">  لوحة التحكم </Link>
                            </li>
                        </ul>
                    </div>
                    {/* /.navbar-collapse */}
                </div>
                 {/* /.container-fluid */}
            </nav>
        );

};
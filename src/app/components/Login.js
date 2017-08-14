import React from "react" ;

export const Login = (props) => {

    return(
        <header>
            <form  method="POST" action="Login.php">
                <section id="signHeader">
                    <div className="container formSection ">
                        <form name="sign" id="signForm" novalidate>
                            <div className="row">
                                <div className="col-lg-12">
                                    <h3 className="section-heading text-center">حياك الله مرة أخرى</h3>
                                    <br />
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <h4> البريد الإلكتروني</h4>
                                                <input type="email" name="email" className="form-control" placeholder="البريد الإلكتروني *" id="email" required data-validation-required-message="فضلًا أدخل بريدك الالكتروني" />
                                                    <p className="help-block text-danger"></p>
                                            </div>
                                            <div className="form-group">
                                                <h4> كلمة السر</h4>
                                                <input type="password" name="password" className="form-control" placeholder="كلمة السر *" id="pass" required data-validation-required-message="فضلًا أدخل كلمة السر" />
                                                    <p className="help-block text-danger"></p>
                                            </div>
                                            <div className="text-center">
                                                <div id="success"></div>
                                                <button type="submit" name="login-btn" className="btn btn-xl">تسجيل الدخول </button>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </form>
                </div>
            </section>
        </form>

</header>

    );

}
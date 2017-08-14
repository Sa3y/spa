import React from "react" ;

export const Register = (props) => {

    return(

        <form  method="POST" action="Register.php">
            <section id="signupHeader">
                <div className="container formSection">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading">حياك الله معنا في ساعٍ</h2>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-lg-12">
                            <form name="sign" id="signForm" novalidate>
                                <div className="col-md-12">

                                    <div className="form-group">
                                        <h4> الاسم الأول</h4>
                                        <input type="text" name="fname" className="form-control" placeholder="الاسم الأول *" id="fname" required data-validation-required-message="فضلًا أدخل اسمك" />
                                            <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="form-group">
                                        <h4> اسم العائلة</h4>
                                        <input type="text" name="lname" className="form-control" placeholder="اسم العائلة *" id="lname" required data-validation-required-message="فضلًا أدخل اسم العائلة" />
                                            <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="form-group">
                                        <h4> البريد الإلكتروني</h4>
                                        <input type="email" name="email" className="form-control" placeholder="البريد الإلكتروني *" id="email" required data-validation-required-message="فضلًا أدخل بريدك الالكتروني" />
                                            <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="form-group">
                                        <h4> كلمة السر</h4>
                                        <input type="password" name="password" className="form-control" placeholder="كلمة السر *" id="password" required data-validation-required-message="فضلًا أدخل كلمة السر" />
                                            <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="form-group">
                                        <h4>تأكيد كلمة السر</h4>
                                        <input type="password" name="password2" className="form-control" placeholder="تأكيد كلمة السر *" id="password2" required data-validation-required-message="فضلًا أدخل كلمة السر" />
                                            <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="text-right">
                                        <input type="checkbox"  id="agreement" required data-validation-required-message="يجب الموافقة على بنود الخدمة وسياسة الخصوصية للتسجيل" />
                                            أوافق على<a href="services.html"> بنود الخدمة </a>و<a href="services.html" > سياسة الخصوصية. </a>
                                            <p className="help-block text-danger"></p>
                                    </div>
                                </div>

                                <div className="clearfix"></div>
                                <div className="col-lg-12 text-center">
                                    <div id="success"></div>
                                    <button type="submit" name="signup-btn" className="btn btn-xl">إنشاء حساب</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </form>

    );

}

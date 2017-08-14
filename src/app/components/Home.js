import React from "react" ;
import { Link } from "react-router-dom" ;
import { browserHistory } from "react-router" ;

export class Home extends React.Component {

    render(){
        return(
            <div className="index">
            <header>
            <div className="container">
                <div className="intro-text">
                    <div className="intro-lead-in">اكتب رسالتك <br /> حدد مستلمك</div>
                    <div className="intro-heading">وساعٍ سينجز المهمة</div>
                    <Link to = "/auth/register/" className="page-scroll btn btn-xl" >الانضمام إلى ساعٍ</Link>
                    <h4><Link to = "/auth/login/" id = "test" >تسجيل الدخول </Link></h4>
                </div>
            </div>
            </header>
            <section id="services">
            <div className ="container">
            <div className ="row">
            <div className ="col-lg-12 text-center">
            <h2 className ="section-heading">ساعٍ</h2> <br/>
            <h3 className ="section-subheading text-muted">خدمة ساع : هي خدمة توفر لك الجهد و الوقت المبذولين لإرسال العديد من الرسائل في الوقت ذاته لتكون بمثابة
        ساعي البريد تصلك منه الرسائل و تُرِسل من خلاله أيضاً . من خلال خدمة سترسل الرسائل بالشكل الذي تريد،
                        مثل أن تكون رسائل رسمية عبر البريد الإلكتروني أو رسائل عبر تطبيق "واتس آب" أو "تيليجرام" و كذلك أيضاً
        تستطيع إرسال الرسائل النصية "SMS “ فكل وسائل المراسلة ستتاح لك.
        </h3>
    </div>
    </div>
    </div>
    </section>

        <section id="portfolio" className="bg-light-gray">
            <div className="container formSection">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading">قريبًا</h2>
                        <h3 className="section-subheading text-muted">أدخل بريدك الإلكتروني لتصلك رسالة تدشين ساعٍ</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <form action="mail.php" method="POST">
                            <form name="sentMessage" id="contactForm" novalidate>
                                <div className="form-group">
                                    <input type="email" name="email" className="form-control contact" placeholder="بريدك الإلكتروني" id="email" required data-validation-required-message="من فضلك أدخل بريدك." />
                                        <p className="help-block text-danger"></p>
                                </div>

                                <div className="clearfix"></div>
                                <div className="col-lg-12 text-center">
                                    <div id="success"></div>
                                    <button type="submit" className="btn btn-xl" name="submit" >اشتراك</button>
                                </div>
                                <h4 className="text-center"><a href="unsubscribe.html">إلغاء الاشتراك</a></h4>
                            </form>
                        </form>
                    </div>
                    </div>
                </div>
        </section>
            </div>
        );
    }
}
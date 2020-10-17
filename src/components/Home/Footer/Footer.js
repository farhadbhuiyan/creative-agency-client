import React from 'react';

const Footer = () => {
  return (
    <div style={{backgroundColor: '#FBD062', padding: '50px 0 20px 0'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4  style={{fontFamily: 'Poppins,sans-serif', fontWeight: '700', fontSize: '2.5em'}}>Let us handle your <br/> project, professionally.</h4>
            <p style={{fontFamily: 'Poppins,sans-serif', lineHeight: '24px', fontSize: '16px', letterSpacing: '2px', margin: '15px 0'}}>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
          </div>
          <div className="col-md-6">
            <form>
              <div className="form-group">
                <input className="form-control form-control-lg" type="text" placeholder="Your email address" />
              </div>
              <div className="form-group">
                <input className="form-control form-control-lg" type="text" placeholder="Your name / company’s name" />
              </div>
              <div className="form-group">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
              </div>
              <button type="submit" class="btn btn-primary black-button">Send</button>
            </form>
          </div>
        </div>
      </div>
      <p style={{textAlign: 'center', marginTop: '100px'}}>copyright Orange labs 2020</p>
    </div>
  );
};

export default Footer;
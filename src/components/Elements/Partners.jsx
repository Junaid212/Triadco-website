import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ClientsLogo from './ClientsLogo';

const images = [
    require('./../../images/allimges/about1.webp'),
    require('./../../images/allimges/about2.webp'),
    require('./../../images/allimges/about1.webp'),
    require('./../../images/allimges/about2.webp'),
   
]

var bnr1 = require('./../../images/background/line.png');

class Partners extends React.Component {
    
    componentDidMount(){
        function loadScript(src) {
           
          return new Promise(function(resolve, reject){
            var script = document.createElement('script');
            script.src = src;
            script.addEventListener('load', function () {
              resolve();
            });
            script.addEventListener('error', function (e) {
              reject(e);
            });
            document.body.appendChild(script);
            document.body.removeChild(script);
          })
        };
 
      loadScript('./assets/js/masonary.js');
      
    };
    
    render() {
        const options = {
            loop:true,
            autoplay:true,
            autoplayTimeout:3000,
            margin:30,
            nav:false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            items:1,
            dots: true
        };
        return (
            <>
                <div className="section-full p-t10 p-b10 bg-white inner-page-padding" >
                    <div className="container">
                    {/* <h3 className="font-weight-600" >Ils Nous<span style={{color:'#75BF44'}}> Font Confiance</span></h3> */}
                    

                    <div className="section-head">
                            <div className="mt-separator-outer separator-left" style={{display:'flex',justifyContent:'center'}}>
                                <div className="mt-separator">
                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">ILS NOUS   </span>  FONT CONFIANCE</h2>
                                </div>
                            </div>
                        </div>


                        <div className="section-content " id='laptopId'
                        style={{ display: window.innerWidth < 768 ? 'none' : 'block' }}>
                        <h2 className="font-weight-600" style={{textAlign:'center'}}>INSTITUTIONS <span style={{color:'#75BF44'}}> & ONG </span></h2>
                            <div className="row about-row">
  {[1,5,3,4,2,6,7].map((img, index) => (
    <div className="col-lg-3 col-md-3 about-col" key={index}>
      <div className="m-about">
        <OwlCarousel className="owl-carousel about-us-carousel" {...options}>
          <div className="ow-img">
            <img
              src={require(`./../../images/folder1/${img}img.jpg`)}
              alt=""
              className="about-img"
            />
          </div>
        </OwlCarousel>
      </div>
    </div>
  ))}

  <style>{`
    /* GAP BETWEEN ROWS */
    .about-col {
      margin-bottom: 30px;
    }

    .ow-img {
      overflow: hidden;
      border-radius: 0px;
    }

    .about-img {
      width: 100%;
      height: auto;
      border: 2px solid #D7F7D5;
      border-radius: 0px;
      transition: transform 0.4s ease, box-shadow 0.4s ease;
    }

    .ow-img:hover .about-img {
      transform: scale(0.95);
    //   box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    }
  `}</style>
</div>

                        </div>
                    </div>
                </div>











                <div className="section-full p-t10 p-b10 bg-white inner-page-padding" id='laptopId' style={{ display: window.innerWidth < 768 ? 'none' : 'block' }}>
                    <div className="container">
                    {/* <h3 className="font-weight-600" >Ils Nous<span style={{color:'#75BF44'}}> Font Confiance</span></h3> */}
                    <h2 className="font-weight-600" style={{textAlign:'center'}}>CLINIQUES 
                    <span style={{color:'#75BF44'}}> MEDICALES  </span></h2>
                        <div className="section-content ">
                            <div className="row about-row">
  <div className="col-lg-3 col-md-4 col-sm-6 about-col">
    <div className="m-about">
      <OwlCarousel className="owl-carousel about-us-carousel" {...options}>
        <div className="ow-img">
          <img
            src={require('./../../images/floder2/img1.jpg')}
            alt=""
            className="about-img"
          />
        </div>
      </OwlCarousel>
    </div>
  </div>

  <div className="col-lg-3 col-md-4 col-sm-6 about-col">
    <div className="m-about">
      <OwlCarousel className="owl-carousel about-us-carousel" {...options}>
        <div className="ow-img">
          <img
            src={require('./../../images/floder2/img2.jpg')}
            alt=""
            className="about-img"
          />
        </div>
      </OwlCarousel>
    </div>
  </div>

  <div className="col-lg-3 col-md-4 col-sm-6 about-col">
    <div className="m-about">
      <OwlCarousel className="owl-carousel about-us-carousel" {...options}>
        <div className="ow-img">
          <img
            src={require('./../../images/floder2/img3.jpg')}
            alt=""
            className="about-img"
          />
        </div>
      </OwlCarousel>
    </div>
  </div>

  <div className="col-lg-3 col-md-4 col-sm-6 about-col">
    <div className="m-about">
      <OwlCarousel className="owl-carousel about-us-carousel" {...options}>
        <div className="ow-img">
          <img
            src={require('./../../images/floder2/img4.jpg')}
            alt=""
            className="about-img"
          />
        </div>
      </OwlCarousel>
    </div>
  </div>

  <div className="col-lg-3 col-md-4 col-sm-6 about-col">
    <div className="m-about">
      <OwlCarousel className="owl-carousel about-us-carousel" {...options}>
        <div className="ow-img">
          <img
            src={require('./../../images/floder2/img5.jpg')}
            alt=""
            className="about-img"
          />
        </div>
      </OwlCarousel>
    </div>
  </div>

  <div className="col-lg-3 col-md-4 col-sm-6 about-col">
    <div className="m-about">
      <OwlCarousel className="owl-carousel about-us-carousel" {...options}>
        <div className="ow-img">
          <img
            src={require('./../../images/floder2/img6.jpg')}
            alt=""
            className="about-img"
          />
        </div>
      </OwlCarousel>
    </div>
  </div>
</div>

                        </div>
                    </div>
                </div>




 <ClientsLogo/>




                
            </>
        );
    }
};

export default Partners;
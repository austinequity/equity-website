import {bfast, BFast} from 'bfastjs';
import {Component, AfterViewInit, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';



@Component({
    selector: 'app-footer',
    template: `<!-- <footer>
  <div class="sector-footer-grid">
    <div class="company">
      <ol>
        <li><a routerLink='/about'>About us</a></li>
        <li><a routerLink='/howitworks'>Services</a></li> -->
<!-- <li><a href="#features">Features</a></li>
                                  <li><a href="#pricing">Our pricing</a></li>
                                  <li><a href="#latest news">Latest news</a></li> -->
<!-- </ol>

    </div>

    <div class="support">
      <ol> -->
<!-- <li><a href="#FAQ'S">FAQ'S</a></li>
                              <li><a href="#privacypolicy">Privacy policy</a></li>
                              <li><a href="#terms&conditions">Terms & Conditions</a></li>
                              <li><a href="#community">Community</a></li> -->
<!-- <li><a href="address">Contact us</a></li>
      </ol>
    </div>

    <div class="address" id="address">
      <ol>
        <li>Location: Dar es salaam,Tanzania</li>
        <li>Email:info@patientcapital.com</li>
        <li>Phone:+255748288520</li>

      </ol>
    </div>
  </div>
  <article align="center">codenasi technologies @2021</article>
</footer> -->





<!-- Site footer -->
<footer class="site-footer">
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <h6>About</h6>
        <p class="text-justify">AustinEquity.co.tz
           Crowd funding investments platform allows you to invest
           into projects in smaller 
          amounts than it
          would be required, if you would be a sole investor and start benefitting
          from your investments almost immediately. You also have a better opportunity to diversify 
          your investments
          between different projects and keep your investments safe.</p> 
      </div>

      <div class="col-xs-6 col-md-3">
        <h6>Categories</h6>
        <ul class="footer-links">
          <li>
            <a routerLink='/projects'>Agricultural Investments</a></li>
          <li><a routerLink='/projects'>Realestate investments</a></li>
          <li><a routerLink='/projects'>Third-party Investments</a></li>

        </ul>
      </div>

      <div class=" col-xs-6 col-md-3">
        <h6>Quick Links</h6>
        <ul class="footer-links">
          <li><a routerLink='/about'>About Us</a></li>
          <li><a routerLink='/howitworks'>How it works</a></li>
          <li><a routerLink='/privacypolicy'>Privacy Policy</a></li>
        </ul>
      </div>
    </div>
    <hr>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-8 col-sm-6 col-xs-12">
        <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by
          <a href="#">AustinEquity</a>.
        </p>
      </div>

      <div class="col-md-4 col-sm-6 col-xs-12">
        <ul class="social-icons">
          <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
          <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
          <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
          <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>`,
    styleUrls: ['../styles/footer.style.scss']
})
export class FooterComponent implements OnInit, OnDestroy, AfterViewInit {

    
    
    constructor(){
    }
    
    async ngOnInit(): Promise<any> {
        
    }

    async ngAfterViewInit(): Promise<any> {
        
    }

    async ngOnDestroy(): Promise<any> {
        
    }
}


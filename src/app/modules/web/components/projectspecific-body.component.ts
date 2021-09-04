import {bfast, BFast} from 'bfastjs';
import {Component, AfterViewInit, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';



@Component({
    selector: 'app-projectspecific-body',
    template: `<div class="body">
  <div class="project-specific-title">
    <!-- hapa hii project name ni kma product name smartstock -->
    <span class="project-name">Eucalyptus trees plantation</span>
    <!-- hapa kwenye ya chini inabidi iwe location ya hili shamba nadhani kwa kule smartstock ni shemu ya supplier -->
    <span class="project-location">Njombe njia kuu </span>
  </div>
  <!-- hii div ya prjct-specific-banner inabidi ndo iwe sehemu ya slide show so sijajua tutawezaje kusave zaidi ya picha moja kule smartstock ili itokee hapa kama slides -->
  <div class="prjct-specific-banner" >

   </div>

   <!-- hii ndo the middle content part ya kwenye page -->
  <div class="projectspecific-body-grid">
    <div class="left-projectspecific">
      <!-- hii mat-tab-group hapa hizi descriptions za hio project lakini zimetenganishwa into groups  -->
      <mat-tab-group animationDuration="0ms">
        <!-- project overview ndo the main description nahisi kwenye smartstock hii ni sawa tu na product description -->
        <mat-tab label="Project Overview">
          <h3>Project Overview</h3>
        </mat-tab>
        <!-- investmat case ni description nyingine sema iko more Financials explanation sijajua inakaa wap smartstock -->
        <mat-tab label="Investment Case">
          <h3>Investment Case</h3>
        </mat-tab>
        <!-- .hapa financials hii nisehemu ya share calculation -->
        <!-- .inavutwa project latest valuation ambayo kwa kuanza ndo kama purchase price lakini inahitajika sehemu ya latest valuation cause purchase price ni fixed lakini valuation itakua inabadilishwa ili kupandisha share price -->
        <!-- .inavutwa pia ile price ya share moja itauzwa ngapi -->
        <!-- .inabidi kuwe na variable ya available shares (units) ambayo ni latestvaluation/price ya share moja -->
        <mat-tab label="Financials">
          <h3>Financials</h3>
          <div class=financial-calc>
            <!-- so hizo mambo nilizoomba ndo ziingie in respective span -->
            <span class="latestValuation"></span>
            <span class="sharesAvailable"></span>
            <span class="shareValue"></span>
            </div>
        </mat-tab>
        <!-- hapa kwenye Technical overview inabidi smart stock niwe na nafasi ya kuupload documents because hii sehemu mteja inabidi aweze kudownload resources kama financial statement -->
        <mat-tab label="Technical Overview">
          <h3>Technical Overview</h3>
        </mat-tab>
      </mat-tab-group>

    </div>


    <div class="right-projectspecific">
      <div class="assurance-note">
        <div class="square-icon">
          <img src="/assets/imgsvd/secure.svg">
          </div>
        <div class="guarantee-content">
          <h2>Safety guaranteed</h2>
          <p>This project has passed austin equity risk assesment,and is secured</p>
        </div>

      </div>

      <!-- Hii ni sehemu ya chini inayofanya the investing place -->
      <div class="projectspecific-investing-tab">
        <div class="funding-target">
          <span class="funding">Funding target</span><br>
          <!-- hapa kinachovotwa ni amount inayokua raised nahisi hii ndo purchase price kule smartstock -->
          <span class="amount">20,000,0000</span>
        </div>
        <br>
        <div class="progress-main">
          <!-- hii progress bar inaonesha progress in response to kufikia kwenye funding target -->
          <div class="mat">
            <mat-progress-bar mode="determinate" value="40"></mat-progress-bar>
          </div>
          
          <!-- hapa ndo ambapo hako ka 45% karepresent progress percentage -->
          <!-- hio span ya chini yake ni kwa ajili ya kuonesha the specific amount colected -->
          <div class="progress-info">
            <span class="percent">45% funded</span>
            <span class="amount-funded">TZS 200,000 funded</span>
          </div>

        </div>

        <div class="invsto-info">
          <!-- kule smartstock kwenye product inabidi kuwe na sehemu ya kuonesha hii ni project ya miaka mingapi -->
          <!-- . so sehemu ya duration ndo project ina mature in how many years  -->
          <div class="space-between-spans">
            <span class="duration-data">Duration</span>
            <span class="duration-figure">15 Years</span>
          </div>
          <!-- .hapa kwenye potential growth calculation zake ni as follows
          The actual purchasing price/ potential endgoal value * 100
          
          hio potential endgoal inabidi project inavosajili smartstock niwe na uwezo wa kufeed hii project inategemea kufikia valuation ya ngapi -->
          <div class="space-between-spans">
            <span class="potentialGrowth-data">Potential growth</span>
            <span class="potentialGrowth-figure">95%</span>
          </div>

          <!-- hii share price inakua fade in the system by me so inabidi kue na sehemu ya kuweka share price ya project -->
          <div class="space-between-spans">
            <span class="sharePrice-data">Share price</span>
            <span class="sharePrice-figure">2,500</span>
          </div>
        </div>
        

        <!-- hapa ndo sehemu ya kuinvest form yake inapoanzia -->
        <div class="investment-form">
          <form>
            <!-- hio input ndo mtu anaandika anainvest shilingi ngapi -->
            <div class="units-investing">
              
                <input type="text" class="amount-input" autocomplete="off" maxlength="9000000">
        
              <button type="submit">Invest</button>
            </div>
            <div class="investment-analytics">
              <!-- Share price inayoongelewa hapa ni the same na kule juu niliongelea ya mwisho hapo -->
                  <div class="space-between-spans">
                <span class="share-price-analytics-data">Share price</span>
                <span class="share-price-analytics-figure">2500</span>
              </div>
              <!-- hapa inabidi imuoneshe mtu amelipia shares ngapi alivojaza figure pale juu -->
              <!-- sasa hapa inabidi ioneshe ni share ngapi zinatokana na hela yake alioweka -->
              <div class="space-between-spans">
                <span class="shares-data">Shares</span>
                <span class="shares-figure">23</span>
              </div>
              <!-- hapa inaonesha total ya investment aliofanya huyu mtu baada ya hesabu ya shareprice * share(units) bought -->
              <div class="space-between-spans">
                <span class="investment-total-data">Investment</span>
                <span class="investment-total-figure">2000000</span>
              </div>
              <!-- For now hii sehemu inamconvince mtu kua anachajiwa 0 na sisi kwa kuinvest so panabaki hivihivi -->
              <div class="space-between-spans">
                <span class="transactionCost-data">Transaction cost</span>
                <span class="transactionCost-figure">0</span>
              </div>
              <!-- hapa ndo inaandika the grand total lakini maranyingi hufanana na investment  -->
              <div class="space-between-spans">
                <span class="totalInvestment-data">Total</span>
                <span class="totalInvestment-figure">200000</span>
              </div>
            </div>
          </form>
        </div>

      </div>


    </div>

  </div>
</div>`,
    styleUrls: ['../styles/prjct-specific-body.style.scss']
})
export class ProjectspecificBodyComponent implements OnInit, OnDestroy, AfterViewInit {

    
    
    constructor(){
    }
    
    async ngOnInit(): Promise<any> {
        
    }

    async ngAfterViewInit(): Promise<any> {
        
    }

    async ngOnDestroy(): Promise<any> {
        
    }
}


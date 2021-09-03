import {bfast, BFast} from 'bfastjs';
import {Component, AfterViewInit, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';



@Component({
    selector: 'app-projectspecific-body',
    template: `<div class="body">
  <div class="project-specific-title">
    <span class="project-name">Eucalyptus trees plantation</span>
    <span class="project-location">Njombe njia kuu </span>
  </div>
  <div class="prjct-specific-banner" >

   </div>
  <div class="projectspecific-body-grid">
    <div class="left-projectspecific">
      <mat-tab-group animationDuration="0ms">
        <mat-tab label="Project Overview">
          <h3>Project Overview</h3>
        </mat-tab>
        <mat-tab label="Investment Case">
          <h3>Investment Case</h3>
        </mat-tab>
        <mat-tab label="Financials">
          <h3>Financials</h3>
        </mat-tab>
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
          <span class="amount">20,000,0000</span>
        </div>
        <br>
        <div class="progress-main">
          <div class="mat">
            <mat-progress-bar mode="determinate" value="40"></mat-progress-bar>
          </div>

          <div class="progress-info">
            <span class="percent">45% funded</span>
            <span class="amount-funded">TZS 200,000 funded</span>
          </div>

        </div>

        <div class="invsto-info">
          <div class="space-between-spans">
            <span class="duration-data">Duration</span>
            <span class="duration-figure">15 Years</span>
          </div>
          <div class="space-between-spans">
            <span class="potentialGrowth-data">Potential growth</span>
            <span class="potentialGrowth-figure">95%</span>
          </div>
          <div class="space-between-spans">
            <span class="sharePrice-data">Share price</span>
            <span class="sharePrice-figure">2,500</span>
          </div>
        </div>

        <div class="investment-form">
          <form>
            <div class="units-investing">
              
                <input type="text" class="amount-input" autocomplete="off" maxlength="9000000">
        
              <button type="submit">Invest</button>
            </div>
            <div class="investment-analytics">
                  <div class="space-between-spans">
                <span class="share-price-analytics-data">Share price</span>
                <span class="share-price-analytics-figure">2500</span>
              </div>
              <div class="space-between-spans">
                <span class="shares-data">Shares</span>
                <span class="shares-figure">23</span>
              </div>
              <div class="space-between-spans">
                <span class="investment-total-data">Investment</span>
                <span class="investment-total-figure">2000000</span>
              </div>
              <div class="space-between-spans">
                <span class="transactionCost-data">Transaction cost</span>
                <span class="transactionCost-figure">0</span>
              </div>
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


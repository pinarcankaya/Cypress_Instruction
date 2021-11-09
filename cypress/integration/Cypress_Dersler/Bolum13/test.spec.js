/// <reference types = "Cypress"/>

import helper from "../../../support/helper"




context("Promise",()=>{
   
    it.skip("Promise Return",async()=>{  //helperdaki method asenkron oldugu icin test de asenkron olmali
     cy.visit("https://test.iyikisordun.com/login.php")
    //   cy.get('h1').invoke('text').then((text)=>{
    //       cy.log(text)
    //   })  ///bu methodu helper classindan cagiracaz
    
    const test=await  helper.GetTextFunction('h1') 
      //helperdan gelen methoda yazdiracagmz elemebt pathini atiyoruz
      //await ile beklemsi gerektigini soyluyorz
      //anacak elektron browser'inda await gorunce test durdugu icin o browserda bu yontemi kullanamayiz
    cy.log(test)
    })
})
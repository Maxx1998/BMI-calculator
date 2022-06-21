"use strict";

document.querySelector(".calculate").addEventListener("click",function()
{
   let weight= document.querySelector(".weight").value;

   let height= document.querySelector(".height").value;

   let bmi=Number(weight)/(Number(height)*Number(height));

   if(bmi||bmi===0)
   {
    console.log(bmi);
    document.querySelector(".output").textContent=bmi;
   }
   else
   {
    document.querySelector(".output").textContent="Enter correct data";
   }
});
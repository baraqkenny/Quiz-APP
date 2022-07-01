 //VARIABLE DECLARATION

let quest1 = document.getElementById('quest1');
let quest2 = document.getElementById('quest2');
let quest3 = document.getElementById('quest3');
let quest4 = document.getElementById('quest4');
let quest5 = document.getElementById('quest5');
let quest6 = document.getElementById('quest6');
let quest7 = document.getElementById('quest7');
let quest8 = document.getElementById('quest8');
let quest9 = document.getElementById('quest9');
let quest10 = document.getElementById('quest10');
let quest11 = document.getElementById('quest11');
let quest12 = document.getElementById('quest12');
let quest13 = document.getElementById('quest13');
let quest14 = document.getElementById('quest14');
let quest15 = document.getElementById('quest15');
let quest16 = document.getElementById('quest16');

let bit =     document.querySelector('.bit')
let submit1 = document.getElementById('submit1');
let submit2 = document.getElementById('submit2');
let submit3 = document.getElementById('submit3');
let submit4 = document.getElementById('submit4');

let start = document.querySelector('.start')
let begin = document.querySelector('#begin');
let input = document.getElementsByTagName('input');


let header =  document.querySelector('.header');
let header2 = document.querySelector('.header2');
let header3 = document.querySelector('.header3');
let header4 = document.querySelector('.header4')
let header5 = document.querySelector('.header5')

let spinner = document.querySelector('.sk-chase');
let spin2 = document.querySelector('.spinner');

  // HOMEPAGE
begin.addEventListener('click',()=>{
   if(begin){
      spinner.style.display = 'block';

      setTimeout(()=>{
         header.style.display = 'flex';
         spinner.style.display = 'none';
      },3000);
   }
});

//QUESTION 1 ANSWERS

const answer = ['china',
                'three',
                'blue',
                'alexander fleming'
               ];


quest1.addEventListener('input', (e)=>{
  if(answer[0] === e.target.value ){
     quest1.style.borderBottomColor = 'green';
  }else{
      quest1.style.borderBottomColor = 'red';
  };
});


quest2.addEventListener('input', (e)=>{
   if(answer[1] === e.target.value ){
      quest2.style.borderBottomColor = 'green';
   }else{
       quest2.style.borderBottomColor = 'red';
   };
 });

quest3.addEventListener('input', (e)=>{
   if(answer[2] === e.target.value ){
      quest3.style.borderBottomColor = 'green';
   }else{
       quest3.style.borderBottomColor = 'red';
   };
 });


 quest4.addEventListener('input', (e)=>{
   if(answer[3] === e.target.value ){
      quest4.style.borderBottomColor = 'green';
   }else{
       quest4.style.borderBottomColor = 'red';
   };
 });


submit1.addEventListener('click',(e)=>{
   e.preventDefault();

  if(quest1.value === answer[0] && quest2.value === answer[1] && quest3.value === answer[2] && quest4.value === answer[3]){

           spin2.style.display = 'block';       
           setTimeout(()=>{
           header2.style.display = 'flex';
           spin2.style.display = 'none';
           },3000);
   
   }else{
      console.log('pls fill the empty box');
   };
    
});

// QUESTION TWO ANSWERS


const answer2 = ['ten',
                'five',
                'hexagon',
                'elephant'
               ];



      quest5.addEventListener('input', (e)=>{
       if(answer2[0] === e.target.value ){
           quest5.style.borderBottomColor = 'green';
          }else{
              quest5.style.borderBottomColor = 'red';
              };
      });


      quest6.addEventListener('input', (e)=>{
         if(answer2[1] === e.target.value ){
            quest6.style.borderBottomColor = 'green';
         }else{
             quest6.style.borderBottomColor = 'red';
         };
       });

       quest7.addEventListener('input', (e)=>{
         if(answer2[2] === e.target.value ){
            quest7.style.borderBottomColor = 'green';
         }else{
             quest7.style.borderBottomColor = 'red';
         };
       });


       quest8.addEventListener('input', (e)=>{
         if(answer2[3] === e.target.value ){
            quest8.style.borderBottomColor = 'green';
         }else{
             quest8.style.borderBottomColor = 'red';
         };
       });     

       submit2.addEventListener('click',(e)=>{
         e.preventDefault();
      
        if(quest5.value === answer2[0] && quest6.value === answer2[1] && quest7.value === answer2[2] && quest8.value === answer2[3]){
       
         spin2.style.display = 'block';

         setTimeout(()=>{
         header3.style.display = 'flex';
         spin2.style.display = 'none';
         },3000);
         
         }else{
            console.log('pls fill the empty box');
         };
          
      });




// QUESTION THREE ANSWERS



const answer3 = ['egyptians',
                'hotmail',
                'fifteen',
                'paella'
               ];



      quest9.addEventListener('input', (e)=>{
       if(answer3[0] === e.target.value ){
           quest9.style.borderBottomColor = 'green';
          }else{
              quest9.style.borderBottomColor = 'red';
              };
      });


      quest10.addEventListener('input', (e)=>{
         if(answer3[1] === e.target.value ){
            quest10.style.borderBottomColor = 'green';
         }else{
             quest10.style.borderBottomColor = 'red';
         };
       });

       quest11.addEventListener('input', (e)=>{
         if(answer3[2] === e.target.value ){
            quest11.style.borderBottomColor = 'green';
         }else{
             quest11.style.borderBottomColor = 'red';
         };
       });


       quest12.addEventListener('input', (e)=>{
         if(answer3[3] === e.target.value ){
            quest12.style.borderBottomColor = 'green';
         }else{
             quest12.style.borderBottomColor = 'red';
         };
       });       

       submit3.addEventListener('click',(e)=>{
         e.preventDefault();
      
        if(quest9.value === answer3[0] && quest10.value === answer3[1] && quest11.value === answer3[2] && quest12.value === answer3[3]){
    
         spin2.style.display = 'block';

         setTimeout(()=>{
         header4.style.display = 'flex';
         spin2.style.display = 'none';
         },3000)
         
         }else{
            console.log('pls fill the empty box');
         };
          
      });

   
// QUESTION FOUR ANSWERS



   const answer4 = [
   
   'craig silverstein',
   'elon musk',
   'meta',
   'apple'
];



     quest13.addEventListener('input', (e)=>{
      if(answer4[0] === e.target.value ){
      quest13.style.borderBottomColor = 'green';
     }else{
     quest13.style.borderBottomColor = 'red';
     };
  });


   quest14.addEventListener('input', (e)=>{
    if(answer4[1] === e.target.value ){
    quest14.style.borderBottomColor = 'green';
   }else{
   quest14.style.borderBottomColor = 'red';
  };
 });

   quest15.addEventListener('input', (e)=>{
    if(answer4[2] === e.target.value ){
    quest15.style.borderBottomColor = 'green';
     }else{
      quest15.style.borderBottomColor = 'red';
   };
  });


   quest16.addEventListener('input', (e)=>{
    if(answer4[3] === e.target.value ){
     quest16.style.borderBottomColor = 'green';
    }else{
     quest16.style.borderBottomColor = 'red';
  };
 });       

 submit4.addEventListener('click',(e)=>{
   e.preventDefault();

     if(quest13.value === answer4[0] && quest14.value === answer4[1] && quest15.value === answer4[2] && quest16.value === answer4[3]){

      spin2.style.display = 'block';

      setTimeout(()=>{
      header5.style.display = 'flex';
      start.style.display = 'none';
      spin2.style.display = 'none';
      header.style.display ='none';
      header2.style.display ='none';
      header3.style.display ='none';
      header4.style.display ='none';
      bit.style.display ='none';
    },4000);

  }else{
  console.log('pls fill the empty box');
  };
  
 });













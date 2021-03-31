import tabTwoLoad from './tabTwoLoad';
import tabThreeLoad from './tabThreeLoad';

const pageLoad = ()=>{
  console.log("testing");
  const logoContainer = document.querySelector("#logoContainer");
  const container = document.querySelector("#content");

  const nav = document.createElement("nav");
  nav.className = ("navTab")
  const anchorElmnt = document.createElement("A");
  anchorElmnt.setAttribute('href',"")
  const anchorElmntTwo = document.createElement("A");
  anchorElmntTwo.setAttribute('href',"")
  const anchorElmntThree = document.createElement("A");
  anchorElmntThree.setAttribute('href',"");


  const txt1 = document.createTextNode("Home");
  const txt2 = document.createTextNode("Menu");
  const txt3 = document.createTextNode("Contact");
  let reSizeHome =  document.querySelector('#content');
  anchorElmnt.addEventListener('click',(e)=>{
    if(document.querySelector('.menuBackground')==null){
      console.log('remove menu')
      document.querySelector('.menuBackground').innerHTML=' '.className=' ';
     }
     if(document.querySelector('.contactInfoStyle')==null){
      let valuesInputted = document.querySelector('.contactInfoStyle');
      console.log('test');
      valuesInputted.innerHTML = ' ';
      valuesInputted.className = " ";
     }
     console.log('test');
     valuesInputted.innerHTML = ' ';
     valuesInputted.className = " ";
    e.preventDefault();
    console.log(e.target.innerHTML);
    console.log("click button");

    if(e.target.innerHTML=="Home"){
      console.log('letsgo')
      let textOne =document.querySelector("p");
      textOne.innerHTML = "Hey welcome to Someone's Restaraunt. We really do not know who came up with it but we've all decided to keep it going. It's imperative we never dissapoint someone or anyone for that matter.";
      if (document.querySelector('.imgVeggies') == null){

const homeImage = document.createElement('img');
  homeImage.className = "imgVeggies";
  homeImage.src = "veggy.png"
  container.append(homeImage);      }
      e.target.style.borderBottom=" #424874 .2vw solid";
      e.target.style.borderBottom=" #424874 .2vw solid";
      reSizeHome.style.height='25vw';
      let changeTab = document.querySelectorAll("a");
      changeTab[1].style.borderBottom=" white .2vw solid";
      changeTab[2].style.borderBottom=" white .2vw solid";
      


    }
    else{
      console.log("hi")
    }
   
  })
  anchorElmntTwo.addEventListener('click',(e)=>{
    if(document.querySelector('.contactInfoStyle')!=null){
      console.log('remove menu')
     let valuesInputted = document.querySelector('.contactInfoStyle');
     console.log('test');
     valuesInputted.innerHTML = ' ';
     valuesInputted.className = " ";
     }
    e.preventDefault();
    console.log(e.target.innerHTML);
    console.log("click button");
   if(e.target.innerHTML=="Menu"){
 
      tabTwoLoad();
      e.target.style.borderBottom=" #424874 .2vw solid";
      let changeTab = document.querySelectorAll("a");
      changeTab[0].style.borderBottom=" white .2vw solid";
      changeTab[2].style.borderBottom=" white .2vw solid";


    }
    
  })
  anchorElmntThree.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(e.target.innerHTML);
    console.log("click button");
 if(e.target.innerHTML=="Contact"){
  if(document.querySelector('.menuBackground')!=null){
    console.log('remove menu')
    let pageVals = document.querySelector('.menuBackground');
    pageVals.innerHTML = "";
    pageVals.className=" "
   }
      tabThreeLoad();
      e.target.style.borderBottom=" #424874 .2vw solid";
      let changeTab = document.querySelectorAll("a");
      changeTab[0].style.borderBottom=" white .2vw solid";
      changeTab[1].style.borderBottom=" white .2vw solid";
      reSizeHome.style.height='25vw';
      console.log('test elem 3')


    }
  
  })
  
  
  anchorElmnt.appendChild(txt1);
  anchorElmntTwo.appendChild(txt2);
  anchorElmntThree.appendChild(txt3);
  nav.appendChild(anchorElmnt);
  nav.appendChild(anchorElmntTwo);
  nav.appendChild(anchorElmntThree);

  document.body.append(nav);
  console.log(container);
  const logo = document.createElement("h1");
  logo.innerHTML =  "<span style='color: #424874;'>Someone's Restaraunt</span>";
  logo.className = "siteLogo";
  logoContainer.append(logo);
  console.log(container);
  const homePageContent = document.createElement('p');
  homePageContent.innerHTML = "Hey welcome to Someone's Restaraunt. We really do not know who came up with it but we've all decided to keep it going. It's imperative we never dissapoint someone or anyone for that matter.";
  container.append(homePageContent);
  if (document.querySelector('.imgVeggies') == null){

  const homeImage = document.createElement('img');
  homeImage.className = "imgVeggies";
  homeImage.src = "veggy.png"
  container.append(homeImage);
  }

  
  }



export default pageLoad;
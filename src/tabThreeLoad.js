
const tabThreeLoad = ()=>{
  // let tabTwoContainer = document.querySelector('#content');
  if(document.querySelector('.contactInfoStyle')==null){
  console.log("tab three called")
  let textThree =document.querySelector("p");
  console.log(textThree);
  textThree.innerHTML = "Contact";
  if (document.querySelector('.imgVeggies') != null){
   let vegetables = document.querySelector('.imgVeggies');
   vegetables.remove();
}
let articleSize = document.querySelector('#content');
let logoDefault = document.querySelector('#logoContainer');
let logoDefaultFont = document.querySelector('.siteLogo');
let navigationStyle = document.querySelector('.navTab');
navigationStyle.style = null;
logoDefault.style.width='25vw';
logoDefault.style.height='15vw';
logoDefaultFont.style.fontSize='2.4vw';
logoDefaultFont.style.marginTop='5vw';

let menuStyle = document.createElement('div');

  articleSize.append(menuStyle);


let contactBackground = document.querySelector('.menuBackground');

let contactInfo = document.createElement('div');

let Name = document.createElement('h1');

contactInfo.className = 'contactInfoStyle'
Name.innerHTML = 'Divesh Patel';

let phoneNumber = document.createElement('h3');
let address = document.createElement('h3');
address.innerHTML = '2121 Laine Ave.'
phoneNumber.innerHTML ='(123) 930-2343'
contactInfo.append(Name);
contactInfo.append(phoneNumber);
contactInfo.append(address);
console.log(contactBackground);
articleSize.append(contactInfo);

}
}
export default tabThreeLoad;
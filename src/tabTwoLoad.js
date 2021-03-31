
const tabTwoLoad = ()=>{
  // let tabTwoContainer = document.querySelector('#content');
  console.log("heyotabtwo")
  if(document.querySelector('.menuBackground')== null){
  let articleSize = document.querySelector('#content');
  let logoResizeTwo = document.querySelector('#logoContainer');
  let logoFontResizeTwo = document.querySelector('.siteLogo');
  let navResize = document.querySelector('.navTab');
  let textTwo =document.querySelector("p");
  console.log(document.querySelector('.imgVeggies'),'before remove');
  if (document.querySelector('.imgVeggies') != null){
    console.log('remove');
  let vegetables = document.querySelector('.imgVeggies');
  vegetables.remove();
  }
  navResize.style.top='11.9vw';
  articleSize.style.height='40vw';
  logoResizeTwo.style.width='10vw';
  logoResizeTwo.style.height='7vw';
  logoFontResizeTwo.style.fontSize='1vw';
  logoFontResizeTwo.style.marginTop='2.5vw';
  console.log(textTwo);
  textTwo.innerHTML = "Menu"
  let menuStyle = document.createElement('div');
  menuStyle.className = 'menuBackground';
  articleSize.append(menuStyle);

  let menuOne = new menuItems("Nachos","Four blends of cheesey goodness, topped off with chopped jalapenos, and creamy guacamole","$5.99");

  let menuTwo = new menuItems("Tacos",'Four blends of cheesey goodness, topped off with chopped jalapenos, and creamy guacamole',"$7.99");

  let menuThree = new menuItems("Burritos",'Four blends of cheesey goodness, topped off with chopped jalapenos, and creamy guacamole',"$17.99");
  
  makeMenuItem.newItem(menuOne);
  makeMenuItem.newItem(menuTwo);
  makeMenuItem.newItem(menuThree);


}
}
class menuItems {
  constructor(title,description,price){
  this.title = title
  this.description = description
  this.price = price

}
}

const makeMenuItem = (()=>{
const newItem = (itemInfo)=>{
  const menuContainer = document.querySelector('.menuBackground');
  console.log(menuContainer,itemInfo);

  const itemContainer = document.createElement('div');
  itemContainer.className = 'individualItem';
  const itemTitle = document.createElement('h1');
  itemTitle.innerText = itemInfo.title;

  const itemDesc = document.createElement('h3');
  itemDesc.innerText = itemInfo.description;
  const itemPrice = document.createElement('h3');
  itemPrice.innerText = itemInfo.price;
  itemContainer.append(itemTitle);
  itemContainer.append(itemDesc);
  itemContainer.append(itemPrice);
  menuContainer.append(itemContainer);
}

  return{
    newItem

  };

})();

export default tabTwoLoad;
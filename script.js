console.log("Работает!");
const menuButton = document.getElementsByClassName('menu__button')[0];
const menu = document.getElementsByClassName('menu')[0];
let menuV = false;

menuButton.addEventListener('click', ()=>{
  let tD = 100;
  menuButton.classList.toggle('active');
  if(menuV == false){
    menuV = true;
    //   // let i = 200;
    //   // menu.style.transition = `${i}ms`;
    //   // while(i > 0){
    //   //     i--;
    //   //     menu.style.height = i * (25/i);
    //   //     console.log(i)
    //   //     menu.style.height = '0';
    //   // }
    // };
    menu.classList.add('.toggled');
    menu.style.display = 'block';
    menu.style.transition = tD+'ms';
    setTimeout(()=>{
        menu.style.height = '21rem';
    }, tD);
  }else{
    menuV = false;
      menu.classList.remove('.toggled');
      menu.style.height = '0';
      menu.style.transition = tD+'ms';
      setTimeout(()=>{
          menu.style.display = 'none';
      }, tD);
    };
  console.log(menuV);
});


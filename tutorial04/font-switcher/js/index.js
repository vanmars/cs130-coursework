const makeBigger = () => {
   alert('make bigger!');
   document.querySelector('.content').style.fontSize = '36px';

};

const makeSmaller = () => {
   alert('make smaller!');
   document.querySelector('.content').style.fontSize = '12px';
};


document.querySelector('.a1').onclick = makeBigger;
document.querySelector(".a2").onclick = makeSmaller;

const pics =[
    `url("pic1.jpg")`,
    `url("pic2.jpg")`,
    `url("pic3.jpg")`,
    `url("pic4.jpg")`,
    `url("pic5.jpg")`,
    `url("pic6.jpg")`,
    `url("pic7.jpg")`,
    `url("pic8.jpg")`,
    `url("pic9.jpg")`,
    `url("pic10.jpg")`,
];

const pic = document.querySelector('section');

function showImage(){
    var a = Math.floor(Math.random()*pics.length);
      console.log(a)
    var img = pics[a];
    console.log(img);
    pic.style.backgroundImage = img
}
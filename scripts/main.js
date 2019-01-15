
// var img = document.querySelector('img');
// img.onclick = function(){
//     var src_path = img.getAttribute('src');
//     if(src_path === 'images/firefox-icon.png'){
//         img.setAttribute('src', 'images/firefox-icon2.jpg');
//     }
//     else{
//         img.setAttribute('src', 'images/firefox-icon.png');
//     }
// }

var heading = document.querySelector('h1');
var button = document.querySelector('button');
button.onclick = function(){
    if(!localStorage.getItem('name')){
        setUsername()
    }
    else{
        var name = localStorage.getItem('name');
        heading.textContent = 'Mozilla is cool, ' + name;
    }
    
}

function setUsername(){
    var name = prompt('enter name');
    localStorage.setItem('name', myName);
    heading.textContent = 'Mozilla is cool, ' + name;
}

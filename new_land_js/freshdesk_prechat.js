setTimeout(putLink, 5000);
function putLink() {

var place = document.getElementById('lc_prechat_form');
var newLink = document.createElement('a');
newLink.href = 'https://2.r-lab.biz/%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BE%20%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B4%D0%B5%D0%BD%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8%20%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85%20%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85.pdf'
var newLinkText = document.createTextNode('Положения о конфеденциальности персональных данных');
newLink.appendChild(newLinkText);

place.childNodes[0].appendChild(newLink);

}
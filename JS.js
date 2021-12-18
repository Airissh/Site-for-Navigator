(function(){
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header-nav');
    const menuclose = document.querySelector('.header-nav-close');
burgerItem.addEventListener('click', () => {
menu.classList.add('header-nav-active');
menuclose.addEventListener('click', () => {
    menu.classList.remove('header-nav-active');

});
})    
}())

function calculation() {

    typeAdd = document.getElementById('type-add').value
    switch(typeAdd){
    case "none":
        alert("Вы не указали вид рекламы");
        break
    case "Наружная":
        cost1 = 100;
          break
    case "Интерьерная":
        cost1 = 40;
        break   
}

    material  = document.getElementById('material-add').value;
    switch (material) {
       case "none":
        alert("Вы не указали материал");
          break
       case "ПВХ":
          cost2 = 2;
          break   
        case "Оргстекло":
          cost2 = 4;
          break   
        case "Алюминий":
            cost2 = 2.5;
            break 
        case "Фанера":
            cost2 = 2;
            break     
        case "Текстолит":
            cost2 = 7;
            break   
        case "Капролон":
            cost2 = 4;
            break   
        case "ДСП":
            cost2 = 3;
            break 
        case "Композитные материалы":
            cost2 = 1.5;
            break           
        default:
          cost2 = 2;
          break
    }

    dop = document.getElementsByName('checkbox-add');
    var cost3 = 0;  
    for (var i = 0; i < dop.length; i++) {
        if(dop[i].checked) {
            cost3 += parseInt(dop[i].value);
        }
    }


    width  = document.getElementById('width-add').value;
    height  = document.getElementById('height-add').value;

    amount_zagl = document.getElementById('amount-zagl').value;
    height_zagl = document.getElementById('height-zagl').value;

    amount_stroch = document.getElementById('amount-stroch').value;
    height_stroch = document.getElementById('height-stroch').value;
      
    ploschad_zagl = parseInt (amount_zagl)*20* parseInt (height_zagl);      
    ploschad_stroch = parseInt (amount_stroch)*20* parseInt (height_stroch);
    ploschad = parseInt (width)* parseInt (height);

    if(amount_zagl != "" && height_zagl != "" && amount_stroch != "" && height_stroch != ""){
            stoimost = ploschad_zagl*cost2 + ploschad_stroch*cost2 + cost1 + cost3;
    } else if(amount_zagl != "" && height_zagl != ""){
            stoimost = ploschad_zagl*cost2 + cost1 + cost3;
    } else if(amount_stroch != "" && height_stroch != ""){
            stoimost = ploschad_stroch*cost2 + cost1 + cost3;
    } else {
            stoimost = ploschad*cost2 + cost1 + cost3;
    }
    document.getElementById('stoimost').innerHTML = stoimost +" бел.руб.";
    }


    window.onload = function () {
        var str, domParser, xmlDoc, city, street, house, phoneone, phonetwo, author, name, cityi, streeti, housei, phoneonei, phonetwoi ;
    
        str = "<info>" +
        "<city>г. Могилев</city>"+
        "<street>ул.Космонавтов</street>"+
        "<house>27А</house>"+
    "<phoneone> (0222)634597</phoneone>"+
    "<phonetwo>+375293256939</phonetwo>"+
    "<name>Golovkina Arina</name>" +
    "</info>";
    
        domParser = new DOMParser();
        xmlDoc = domParser.parseFromString(str, "text/xml");
    
        city = document.getElementById("city");
        street = document.getElementById("street");
        house = document.getElementById("house");

        phoneone = document.getElementById("phone-one");
        phonetwo = document.getElementById("phone-two");
        author = document.getElementById("author-name");
    
        cityi = xmlDoc.getElementsByTagName("city")[0].childNodes[0].nodeValue;
        streeti = xmlDoc.getElementsByTagName("street")[0].childNodes[0].nodeValue;
        housei = xmlDoc.getElementsByTagName("house")[0].childNodes[0].nodeValue;
    
        phoneonei = xmlDoc.getElementsByTagName("phoneone")[0].childNodes[0].nodeValue;
        phonetwoi = xmlDoc.getElementsByTagName("phonetwo")[0].childNodes[0].nodeValue;

        name = xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue;

        city.innerHTML = cityi;
        street.innerHTML = streeti;
        house.innerHTML = housei;

        phoneone.innerHTML = phoneonei;
        phonetwo.innerHTML = phonetwoi;

        author.innerHTML = "© " + name;
    };
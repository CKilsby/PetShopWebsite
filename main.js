function changeFontStyle() {
    var listItems = document.getElementsByTagName('li');
    for (var i = 0; i < listItems.length; i++) {
        listItems[i].style.fontFamily = 'Arial, sans-serif';
        listItems[i].style.fontSize = '18px';
        listItems[i].style.fontWeight = 'bold';
    }
}

function showAdditionalInfo() {
    const additionalInfo = document.getElementById('additionalInfo');
    if (additionalInfo.style.display === 'none') {
        additionalInfo.style.display = 'block';
    } else {
        additionalInfo.style.display = 'none';
    }
}

productsAndServices = ["Grooming", "Daycare", "Lodging", "Breeding", "Products"];

listItems = "";

for (let item of productsAndServices) {
    listItems += "<li>" + item + "</li>";
}

document.getElementById("productsAndServices").innerHTML = listItems;

function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
    } else {
        body.classList.add('dark-theme');
    }
}

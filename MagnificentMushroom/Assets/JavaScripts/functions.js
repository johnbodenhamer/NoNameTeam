function showStarters(){
  var s = document.getElementById("starters");
  var w = document.getElementById("wrapsSandwiches");
  var e = document.getElementById("entrees");
  var k = document.getElementById("kidsMenu");
  if(s.style.display == "none"){
    s.style.display = "block";
    w.style.display = "none";
    e.style.display = "none";
    k.style.display = "none";
  }else{
    s.style.display = "block";
    w.style.display = "none";
    e.style.display = "none";
    k.style.display = "none";
  }
}

function showWS(){
  var s = document.getElementById("starters");
  var w = document.getElementById("wrapsSandwiches");
  var e = document.getElementById("entrees");
  var k = document.getElementById("kidsMenu");
  if(w.style.display == "none"){
    w.style.display = "block";
    s.style.display = "none";
    e.style.display = "none";
    k.style.display = "none";
  }else{
    w.style.display = "block";
    s.style.display = "none";
    e.style.display = "none";
    k.style.display = "none";
  }
}

function showEntrees(){
  var s = document.getElementById("starters");
  var w = document.getElementById("wrapsSandwiches");
  var e = document.getElementById("entrees");
  var k = document.getElementById("kidsMenu");
  if(e.style.display == "none"){
    e.style.display = "block";
    w.style.display = "none";
    s.style.display = "none";
    k.style.display = "none";
  }else{
    e.style.display = "block";
    w.style.display = "none";
    s.style.display = "none";
    k.style.display = "none";
  }
}

function showKids(){
  var s = document.getElementById("starters");
  var w = document.getElementById("wrapsSandwiches");
  var e = document.getElementById("entrees");
  var k = document.getElementById("kidsMenu");
  if(k.style.display == "none"){
    e.style.display = "none";
    w.style.display = "none";
    s.style.display = "none";
    k.style.display = "block";
  } else{
    e.style.display = "none";
    w.style.display = "none";
    s.style.display = "none";
    k.style.display = "block";
  }

}

function showGlutenLess(){

}

function showSoyFree(){

}

function showNutFree(){

}

function showAll(){
  var s = document.getElementById("starters");
  var w = document.getElementById("wrapsSandwiches");
  var e = document.getElementById("entrees");
  var k = document.getElementById("kidsMenu");

  if(s.style.display == "none" || w.style.display == "none" ||
     e.style.display == "none" || k.style.display == "none"){
    s.style.display = "block";
    w.style.display = "block";
    e.style.display = "block";
    k.style.display = "block";
  }

}

//funtion to direct selected option for SMALL or LARGE value
function pricePortionLNT(){
  var p = document.getElementById("portionLNT").value;
  if(p.substring(0,5) == "small"){
    window.location.href  = "cookieLoadedNachoTotsSmall.html";
  }else if(p.substring(0,5) == "large"){
    window.location.href  = "cookieLoadedNachoTotsLarge.html";
  }else {
    alert("Please Select A Porion Size (Small/Large)");
  }
}

function pricePortionVT(){
  var p = document.getElementById("portionVT").value;
  if(p.substring(0,5) == "small"){
    window.location.href  = "cookieVolcanoTotsSmall.html";
  }else if(p.substring(0,5) == "large"){
    window.location.href  = "cookieVolcanoTotsLarge.html";
  }else {
    alert("Please Select A Porion Size (Small/Large)");
  }
}

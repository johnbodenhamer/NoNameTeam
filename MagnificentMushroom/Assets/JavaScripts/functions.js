function showStarters(){
  var s = document.getElementById("starters");
  var w = document.getElementById("wrapsSandwhiches");
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
  var w = document.getElementById("wrapsSandwhiches");
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
  var w = document.getElementById("wrapsSandwhiches");
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
  var w = document.getElementById("wrapsSandwhiches");
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
  var w = document.getElementById("wrapsSandwhiches");
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

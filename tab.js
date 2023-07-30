function tab(evt, sem) {
  var i, tabss, tablinks;
  tabss = document.getElementsByClassName("tabss");
  for (i = 0; i < tabss.length; i++) {
    tabss[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("button");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(sem).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
function side() {
  var navbar = document.getElementById('semsteres');
  var check = document.getElementById('bca-course');
  if (check.checked) {
        navbar.style.display = "block";
  } else {
        navbar.style.display = "none";
  }}
  function close() {
    var navbar = document.getElementById('semsteres');
    
    var check = document.getElementById('bca-course');
    if (check.checked) {
          navbar.style.display = "none";
    } else {
          navbar.style.display = "none";
    }}

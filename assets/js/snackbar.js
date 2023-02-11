function show_snackbar(message) {
  let x = document.getElementById("snackbar");
  x.className = "show";
  x.innerHTML = message;
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}

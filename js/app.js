function thumb() {
  var url = document.getElementById("url").value;
  const image = document.getElementById("pic");

  if (!url.includes("v=")) {
    window.alert("PWEASE ENTER A VALID URL");
    image.src =
      "https://media.tenor.com/images/dfd5463012520de18fbcbb9f9d86ebc8/tenor.gif";
  } else {
    const id = url.split("v=")[1];
    const link = "https://img.youtube.com/vi/" + id + "/maxresdefault.jpg";

    image.src = link;
  }
}

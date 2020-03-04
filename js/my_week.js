
var text = String(window.location)

function delineate(str)
{
  theleft = str.indexOf("=")+1;
  theright = str.indexOf("&");
  str = str.substring(theleft,theright);
  return(str.replace(/\+/g," "));
}

document.querySelector("main a").innerHTML = document.querySelector("main a").innerHTML + "<a>: "+delineate(text)+"</a>";

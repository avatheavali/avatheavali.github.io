// Dark mode JS for https://kawaiizenbo.github.io/jb/

var isDarkMode = false;

if(getCookie(dark) = "true")
{
    darkOn(false)
}
else
{
    darkOff(false);
}

document.getElementById("darkToggle").onclick = function()
{
    if(isDarkMode)
    {
        darkOff(true)
    }
    else
    {
        darkOn(true);
    }
}

function darkOn(saveCookie)
{
    document.getElementById("page").style.color = "#f9f9f9";
    document.getElementById("page").style.backgroundColor = "#232323";
    isDarkMode = true;
    if(saveCookie)
    {
        setCookie("dark", "true", 1000);
    }
    console.log("dark mode toggled on");
}

function darkOff(saveCookie)
{
    document.getElementById("page").style.color = "#010101";
    document.getElementById("page").style.backgroundColor = "#fdfdfd";
    isDarkMode = false;
    if(saveCookie)
    {
        setCookie("dark", "false", 1000);
    }
    console.log("dark mode toggled off");
}

function getCookie(cname) 
{
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) 
    {
      var c = ca[i];
      while (c.charAt(0) == ' ') 
      {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) 
      {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
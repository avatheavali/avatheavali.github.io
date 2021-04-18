// Dark mode JS for https://kawaiizenbo.github.io/jb/

var isDarkMode = false;

console.log("dark cookie = " + getCookie("dark"));
if(getCookie("dark") == "true")
{
    darkOn(false)
}
else if(getCookie("dark") == "false")
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
        this.setCookie("dark", "true", 1000);
    }
    console.log("dark mode toggled on");
}

function darkOff(saveCookie)
{
    document.getElementById("page").style.color = "#010101";
    document.getElementById("page").style.backgroundColor = "#fefefc";
    isDarkMode = false;
    if(saveCookie)
    {
        this.setCookie("dark", "false", 1000);
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

function setCookie(c_name, value, exdays) 
{
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
}
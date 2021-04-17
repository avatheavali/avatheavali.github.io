// Dark mode JS for https://kawaiizenbo.github.io/jb/

var isDarkMode = false;

if(document.cookie == "true;")
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
        document.cookie = "true;"
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
        document.cookie = "false;"
    }
    console.log("dark mode toggled off");
}
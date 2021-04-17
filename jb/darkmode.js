// Dark mode JS for https://kawaiizenbo.github.io/jb/

var isDarkMode = false;

if(document.cookie == "dark=true; expires=Tue, 19 Jan 2038 00:00:00 UTC")
{
    darkOn()
}
else
{
    darkOff();
}

document.getElementById("darkToggle").onclick = function()
{
    if(isDarkMode)
    {
        darkOff()
    }
    else
    {
        darkOn();
    }
}

function darkOn()
{
    document.getElementById("page").style.color = "#f9f9f9";
    document.getElementById("page").style.backgroundColor = "#232323";
    isDarkMode = true;
    document.cookie = "dark=true; expires=Tue, 19 Jan 2038 00:00:00 UTC"
    console.log("dark mode toggled on");
}

function darkOff()
{
    document.getElementById("page").style.color = "#010101";
    document.getElementById("page").style.backgroundColor = "#fdfdfd";
    isDarkMode = false;
    document.cookie = "dark=false; expires=Tue, 19 Jan 2038 00:00:00 UTC"
    console.log("dark mode toggled off");
}
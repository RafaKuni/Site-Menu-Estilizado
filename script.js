var showSidebar = false;

function toggleSidebar(){
    var header=document.getElementById('header');
    var menu = document.getElementById('menu');
    var content= document.getElementById('content');
    var img = document.getElementById('example_image');
    var nome = document.getElementById('name');
    var nav1 = document.getElementById('navigation1');
    var nav2 = document.getElementById('navigation2');
    var nav3 = document.getElementById('navigation3');
    var headerbtn = document.getElementById('header_main_btn')
    showSidebar = !showSidebar;
    if(showSidebar)
    {
        menu.style.marginLeft ='-10vw';
        menu.style.animationName ='showSidebar';
        content.style.filter='blur(2px)';
        content.style.cursor='default';
        nome.style.filter='blur(2px)';
        nav1.style.filter='blur(2px)';
        nav1.style.pointerEvents="none";
        nav2.style.filter='blur(2px)';
        nav2.style.pointerEvents="none";
        nav3.style.filter='blur(2px)';
        nav3.style.pointerEvents="none";
        headerbtn.style.filter='blur(2px)';
    }
    else
    {
        menu.style.animationName ='';
        menu.style.marginLeft ='-100vw';
        content.style.filter='blur(0px)';
        content.style.cursor='auto';
        nome.style.filter='blur(0px)';
        nav1.style.filter='blur(0px)';
        nav1.style.pointerEvents="all";
        nav2.style.filter='blur(0px)';
        nav2.style.pointerEvents="all";
        nav3.style.filter='blur(0px)';
        nav3.style.pointerEvents="all";
        headerbtn.style.filter='blur(0px)';
    }
}

function closeSidebar()
{
    if(showSidebar)
    {
        toggleSidebar();
    }
}
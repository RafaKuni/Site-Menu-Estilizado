var showSidebar = false;

function toggleSidebar() {
  var header = $('#header');
  var menu = $('#menu');
  var content = $('#content');
  var img = $('#example_image');
  var nome = $('#name');
  var nav1 = $('#navigation1');
  var nav2 = $('#navigation2');
  var nav3 = $('#navigation3');
  var headerbtn = $('#header_main_btn');

  showSidebar = !showSidebar;

  if (showSidebar) {
    menu.css({
      'margin-left': '-10vw',
      'animation-name': 'showSidebar'
    });
    content.css({
      'filter': 'blur(2px)',
      'cursor': 'default'
    });
    nome.add(nav1).add(nav2).add(nav3).css({
      'filter': 'blur(2px)',
      'pointer-events': 'none'
    });
    headerbtn.css('filter', 'blur(2px)');
    header.css('z-index', '1000');
  } else {
    menu.css({
      'animation-name': '',
      'margin-left': '-100vw'
    });
    content.css({
      'filter': 'blur(0px)',
      'cursor': 'auto'
    });
    nome.add(nav1).add(nav2).add(nav3).css({
      'filter': 'blur(0px)',
      'pointer-events': 'all'
    });
    headerbtn.css('filter', 'blur(0px)');
    header.css('z-index', '1000');
  }
}

function closeSidebar() {
  if (showSidebar) {
    toggleSidebar();
  }
}


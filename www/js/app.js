
$(document).on('init', function(event) {
  var page = event.target;
  if(page.id == 'list-page') {
    $('.item', this).on('click', function() {
      currentItem = {
        title : $('.item-title', this).text(),
        desc : $('.item-desc', this).text(),
      };
      app.navi.pushPage('detail.html');
    });
  } else {
//console.log("pop");
      //app.navi.popPage('detail.html');    
  }
});
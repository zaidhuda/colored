$(function() {
  function colorChangedCallback() {
    var color = $('#colorCode').val();
    parent.location.hash = color;
    $(document).attr("title", color);
    $('body').css("background-color", color);
    $('#shareLink').prop('href', color);
  }

  function randomColor() {
    var hex = Math.floor(Math.random()*16777215).toString(16).toUpperCase();
    while(hex.length < 6) hex = '0' + hex;
    return '#' + hex;
  }

  function intialize() {
    var defaultColor = parent.location.hash || randomColor();
    $('#colorCode').val(defaultColor);
    colorChangedCallback();

    $picker = $('#colorCode').colorPicker({
      color: $('#colorCode').val(),
      opacity: false,
      renderCallback: function() {
        colorChangedCallback();
      },
      positionCallback: function($elm) {
        console.log($elm.offset())
        var x = $(window).width() / 2 - 70;
        var y = $elm.offset().top + $elm.height();
        return {top: y, left: x}; // positions colorPicker before appearing
      }
    });
  }

  intialize();
})
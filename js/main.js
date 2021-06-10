$(document).ready(function () {
  // .mask-tel maskedit
  if ($(".mask-tel").length) {
    $(".mask-tel").inputmask({ mask: "+\\9\\9\\8 99 999-99-99" });
  }

  if ($(".game-settings").length) {
    $(".toggleGameSettings").on("click", function () {
      $(".game-settings").toggleClass("show");
    });
  }
});


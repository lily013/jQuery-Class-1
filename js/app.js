let sidebar = $(".sidebar");
$("nav .sidebarBtn").click(function () {
  sidebar.addClass("active");
});
$(".sidebar,.closeBtn").click(function (event) {
  if (
    event.target.classList.contains("closeBtn") ||
    event.target.classList.contains("sidebar")
  ) {
    sidebar.removeClass("active");
  }
});

$(".faq").click(function () {
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
  } else {
    $(".faq").removeClass("active");
    $(this).toggleClass("active");
  }
});

$(".eyeIcon").click(function () {
  if ($(".passwordToggle input").attr("type") == "password") {
    $(".passwordToggle input").attr("type", "text");
    $(this).html('<i class="bi bi-eye"></i>');
  } else {
    $(".passwordToggle input").attr("type", "password");
    $(this).html('<i class="bi bi-eye-slash"></i>');
  }
});



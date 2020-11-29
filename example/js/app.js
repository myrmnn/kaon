// $(document).ready(function () {
//   $("[data-js-page]").on("touchend", function () {
//     var goal_page = $(this).data("js-page");
//     $(".page").removeClass("active");
//     $(".page[data-page='" + goal_page + "']").addClass("active");
//   });
// });

window.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("[data-js-page]");
  buttons.forEach((el) =>
    el.addEventListener("click", function () {
      var goal_page = el.getAttribute("data-js-page");
      el.parentElement.classList.remove("active");
      document
        .querySelector(".page[data-page='" + goal_page + "']")
        .classList.add("active");
    })
  );
});

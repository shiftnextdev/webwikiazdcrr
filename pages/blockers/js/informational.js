const sidebar = document.getElementById("sidebar");

function toggleSidebar() {
  sidebar.classList.toggle("show");
}

function replaceContainerContent(id, content) {
  const container = document.getElementById(id);
  container.innerHTML = content;
}

function moveSidebarScroll2Element(element) {
  const topval = element.getBoundingClientRect();
  const elMiddle = element.getBoundingClientRect().height / 2;
  document.getElementById("heading-pointer").style.top =
    topval.top - elMiddle + "px";
  // console.log(topval.top-elMiddle);
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const linkElement = document.getElementById(
      entry.target.firstElementChild.id + "-link"
    );
    if (entry.isIntersecting) {
      // console.log(entry.target)
      entry.target.classList.add("show");
      moveSidebarScroll2Element(linkElement);
      linkElement.classList.add("show");
    } else {
      entry.target.classList.remove("show");
      linkElement.classList.remove("show");
    }
  });
}, {});
const contentBlocks = document.querySelectorAll(".content-block");
contentBlocks.forEach((el) => observer.observe(el));

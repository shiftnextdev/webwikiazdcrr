const sidebar = document.getElementById("sidebar");

function toggleSidebar() {
  sidebar.classList.toggle("show");
}

function replaceContainerContent(id, content) {
  const container = document.getElementById(id);
  container.innerHTML = content;
}

function moveSidebarScroll2Element(element){
  const topval = element.getBoundingClientRect();
  const elMiddle = element.getBoundingClientRect().height / 2;
  document.getElementById('heading-pointer').style.top = (topval.top-elMiddle)+"px";
  // console.log(topval.top-elMiddle);
}
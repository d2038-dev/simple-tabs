const tabs = document.querySelectorAll("[data-tab-id]");
const content = document.querySelector("[data-id='content']");

document.addEventListener("DOMContentLoaded", addContent, { once: true });
tabs.forEach((tab) => {
  tab.addEventListener("click", changeContent);
});

function addContent(event) {
  const firstTab = tabs[0];
  content.textContent = "KONO DIO DA!";
  firstTab.classList.add("tabs__tab_active");
}

function changeContent(event) {
  const tabId = this.dataset.tabId;

  tabs.forEach((tab) => {
    tab.classList.remove("tabs__tab_active");
  });

  this.classList.add("tabs__tab_active");

  switch (tabId) {
    case "first":
      content.textContent = "KONO DIO DA!";
      break;

    case "second":
      content.textContent = "WRRRRRRYYYYYYYYYYYY!";
      break;

    case "third":
      content.textContent = "OH MY GOD!";
      break;

    case "fourth":
      content.textContent = "ORA ORA ORA ORA ORA ORA ORA!";
      break;
  }
}

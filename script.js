const tabs = document.querySelectorAll("[data-tab-id]");
const content = document.querySelector("[data-id='content']");

document.addEventListener("DOMContentLoaded", changeText, { once: true });
tabs.forEach((tab) => {
  tab.addEventListener("click", changeText);
});

function changeText(event) {
  const targetElement = event.target;
  let tabId = null;
  if (event.type === "DOMContentLoaded") {
    tabId = "first";
  } else if (targetElement.dataset.tabId) {
    tabId = targetElement.dataset.tabId;
  } else {
    return;
  }

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
      content.textContent = "Ora ora ora ora ora ora ora!";
      break;
  }
}

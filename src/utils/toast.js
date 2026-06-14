let toastContainer = null;

function createContainer() {
  if (toastContainer) return toastContainer;

  toastContainer = document.createElement("div");
  toastContainer.style.position = "fixed";
  toastContainer.style.top = "20px";
  toastContainer.style.right = "20px";
  toastContainer.style.zIndex = "9999";
  toastContainer.style.display = "flex";
  toastContainer.style.flexDirection = "column";
  toastContainer.style.gap = "10px";
  document.body.appendChild(toastContainer);

  return toastContainer;
}

function showToast(message, type = "success") {
  const container = createContainer();

  const toast = document.createElement("div");

  const colors = {
    success: "#16a34a",
    error: "#dc2626",
    info: "#2563eb",
  };

  const icons = {
    success: "✔",
    error: "❌",
    info: "ℹ",
  };

  toast.innerHTML = `
    <div style="
      display:flex;
      align-items:center;
      gap:10px;
      font-size:16px;
      font-weight:600;
    ">
      <span style="font-size:20px">${icons[type]}</span>
      <span>${message}</span>
    </div>
  `;

  toast.style.background = colors[type];
  toast.style.color = "white";
  toast.style.padding = "14px 18px";
  toast.style.borderRadius = "12px";
  toast.style.minWidth = "250px";
  toast.style.boxShadow = "0 10px 25px rgba(0,0,0,0.25)";
  toast.style.transform = "translateX(120%)";
  toast.style.transition = "all 0.4s ease";

  container.appendChild(toast);

  // animation in
  setTimeout(() => {
    toast.style.transform = "translateX(0)";
  }, 50);

  // auto remove
  setTimeout(() => {
    toast.style.transform = "translateX(120%)";
    toast.style.opacity = "0";

    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 2000);
}

export { showToast };
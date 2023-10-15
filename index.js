document.getElementById("file-input").addEventListener("change", (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    const jsonData = JSON.parse(e.target.result);
    const tree = document.getElementById("tree");
    tree.innerHTML = buildTree(jsonData);
  };

  if (file) {
    reader.readAsText(file);
  }
});

function buildTree(data) {
  if (typeof data === "object") {
    let html = "<ul>";

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        html += `<li><strong>${key}:</strong>`;
        html += buildTree(data[key]);
        html += "</li>";
      }
    }

    html += "</ul>";
    return html;
  } else {
    return ` ${data}`;
  }
}

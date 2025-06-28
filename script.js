async function findVideos() {
  const subs = document.getElementById("subs").value;
  const views = document.getElementById("views").value;
  const days = document.getElementById("days").value;
  document.getElementById("results").innerHTML = `
    <p>🛠 Searching videos with >${subs} subs, >${views} views, uploaded in last ${days} days...</p>
    <p>⚡ (Demo placeholder: real API call goes here)</p>`;
}

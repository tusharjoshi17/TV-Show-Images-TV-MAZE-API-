const form = document.querySelector("#searchForm");
const imageContainer = document.querySelector("#imageContainer");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  // console.dir(form)
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm } };
  const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
  makeImages(res.data);
  form.elements.query.value = "";
});

const makeImages = function (shows) {
  imageContainer.innerHTML = "";
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("IMG");
      img.src = result.show.image.medium;
      //   document.body.append(img);
      imageContainer.append(img);
    }
  }
};

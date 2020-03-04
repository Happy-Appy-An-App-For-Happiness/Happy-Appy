fetch("https://www.apitutor.org/flickr/?tags=dog")
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < 10; ++i) {
      let curr_img = data["items"][i];
      let my_a = document.createElement("a");
      let my_img = document.createElement("img");
      my_a.appendChild(my_img);
      document.querySelector("#content").appendChild(my_a);
      my_img.src = curr_img["media"]["m"];
      my_a.href = curr_img["link"];

      console.log(curr_img);
    }
  });

fetch(
  "https://www.apitutor.org/youtube/simple/?q=cute+animals&type=video&videoEmbeddable=true"
)
  .then(response => response.json())
  .then(data => {
    const main = document.querySelector("main");
    for (const video of data) {
      const a = document.createElement("a");
      main.appendChild(a);
      a.innerText = video.title;
      a.href = video.url;
      const str =
        '<iframe width="560" height="315" src="' +
        video.embed_url +
        '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
      a.innerHTML = str;

      console.log(video);
    }
  });

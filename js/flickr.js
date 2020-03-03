
fetch('https://www.apitutor.org/flickr/?tags=dog')
    .then(response => response.json())
    .then(data => {
        for (let i=0; i<10; ++i){

            let curr_img = data["items"][i];
            let my_a = document.createElement("a");
            let my_img = document.createElement("img");
            my_a.appendChild(my_img);
            document.querySelector("#content").appendChild(my_a);
            my_img.src = curr_img["media"]["m"];
            my_a.href= curr_img["link"];

            console.log(curr_img)

        }
    });
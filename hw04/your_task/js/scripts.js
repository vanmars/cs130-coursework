const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

// Note: AudioPlayer is defined in audio-player.js
const audioFile = 'https://p.scdn.co/mp3-preview/bfead324ff26bdd67bb793114f7ad3a7b328a48e?cid=9697a3a271d24deea38f8b7fbfa0e13c';
const audioPlayer = AudioPlayer('.player', audioFile);

const search = (ev) => {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

const getTracks = (term) => {
  // 1. Build the url
  let url = 'https://www.apitutor.org/spotify/simple/v1/search?type=track&q=' + term;
  // 2. Issue a fetch command
  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.querySelector('#tracks').innerHTML = "";
      if (data.length == 0) {
        document.querySelector('#tracks').innerHTML = "No tracks found.";
      }
      console.log(data[0], data[1], data[2], data[3], data[4]);
      const tracks = [data[0], data[1], data[2], data[3], data[4]];
      for (track of tracks){
      //   if (!track.preview-url){
      //     const template = `
      //     <section class="track-item preview" ">
      //       <img src="${track.album.image_url}">
      //       <i class="fas play-track fa-play" aria-hidden="true"></i>
      //       <div class="label">
      //         <h3>${track.name}</h3>
      //           <p>
      //             ${track.artist.name} cannot play.
      //           </p>
      //         </div>
      //     </section>`;
      //     document.querySelector('#tracks').innerHTML += template;
      //   } else {
      //     const template = `
      //     <section class="track-item preview" data-preview-track="${track.preview_url}">
      //       <img src="${track.album.image_url}">
      //       <i class="fas play-track fa-play" aria-hidden="true"></i>
      //       <div class="label">
      //         <h3>${track.name}</h3>
      //           <p>
      //             ${track.artist.name}
      //           </p>
      //         </div>
      //     </section>`;
      //     document.querySelector('#tracks').innerHTML += template;
      //   }
      // }
      // })
        const template = `
        <section class="track-item preview" data-preview-track="${track.preview_url}">
        <img src="${track.album.image_url}">
        <i class="fas play-track fa-play" aria-hidden="true"></i>
        <div class="label">
          <h3>${track.name}</h3>
            <p>
              ${track.artist.name}
            </p>
        </div>
        </section>`;
      document.querySelector('#tracks').innerHTML += template;
    }
    })
    .then(() => attachEventListeners());
};

const getAlbums = (term) => {
  // 1. Build the url
  let url = 'https://www.apitutor.org/spotify/simple/v1/search?type=album&q=' + term;
  // 2. Issue a fetch command
  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.querySelector('#albums').innerHTML = "";
      if (data.length == 0) {
        document.querySelector('#albums').innerHTML = "No albums found."
      }
      console.log(data);
      const albums = data;
      for (album of albums){
      const template = `
      <section class="album-card" id="${album.id}">
        <div>
          <img src="${album.image_url}">
          <h3>${album.name}</h3>
          <div class="footer">
              <a href="${album.spotify_url}" target="_blank">
                view on spotify
                </a>
                </div>
          </div>
          </section>`;
      document.querySelector('#albums').innerHTML += template;
      };
     });
};

const getArtist = (term) => {
  // 1. Build the url
  let url = 'https://www.apitutor.org/spotify/simple/v1/search?type=artist&q=' + term;
  // 2. Issue a fetch command
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.length == 0) {
        document.querySelector('#artist').innerHTML = "No artists found."
      }
      console.log(data[0]);
      const artist = data[0];
      const template = `
          <section class="artist-card" id="${artist.id}">
            <div>
              <img src="${artist.image_url}">
              <h3>${artist.name}</h3>
              <div class="footer">
                <a href="${artist.spotify_url}" target="_blank">
                  view on spotify
                  </a>
              </div>
            </div>
          </section>`;
        document.querySelector('#artist').innerHTML = template;
    });
};

const doSearch = (ev) => {
  if (ev.keyCode === 13) {
      console.log('Enter key has been pressed!');
      ev.preventDefault();
      search();
  }
};
document.querySelector('#search').onkeyup = doSearch;



const attachEventListeners = () => {
  const tracks = document.querySelectorAll(".track-item.preview");
  for (track of tracks) {
    track.onclick = handleClick;
  };
};

const handleClick = (e) => {
  document.querySelector("footer .track-item").innerHTML = e.currentTarget.innerHTML;
  audioPlayer.setAudioFile(e.currentTarget.getAttribute('data-preview-track'));
  audioPlayer.play();
};

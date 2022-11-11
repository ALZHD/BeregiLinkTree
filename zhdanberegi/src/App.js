
import './App.css';
import Photo from "./pic/IMG_5191 (1) (1).JPG"
import Inst from "./pic/pngegg.png"
import Tel from "./pic/kisspng-telegram-encapsulated-postscript-transfer-5b17060586a686.1271014115282355255515.png"
function App() {
  return (
    <div className="App">
<div class="container">
      <div class="containtersmall">
        <div class="mainphoto">
          <img src={Photo} alt="myphoto" />
        </div>
        <div class="namesbox">
          <div class="name">Z H D A N</div>
          <div class="song">Береги</div>
        </div>
        <div class="boxforlinks">
          <div class="instagram">
            <a href="https://www.instagram.com/zhdan.music/">
              <img src={Inst} alt="myinst"
            /></a>
          </div>
          <div class="telegram">
            <a id="links" href="https://t.me/zhdan_music">
              <img
                src={Tel}
                alt="myinst"
            /></a>
          </div>
        </div>
        <div class="boxforstores">
          <a class="main-link" href="https://music.yandex.ru/album/23967780">
            Cлушать на "Яндекс.Музыка"
          </a>
          <a
            class="main-link"
            href="https://open.spotify.com/album/1mFkaY0oPs6nIllqS24dlG"
          >
            Cлушать на "Spotify"
          </a>
          <a
            class="main-link"
            href="https://music.apple.com/ru/album/%D0%B1%D0%B5%D1%80%D0%B5%D0%B3%D0%B8/1653070890?i=1653070900"
          >
            Cлушать на "Apple Music"
          </a>
          <a
            class="main-link"
            href="https://vk.com/artist/zhdan_mty2ode1ntk1mq?z=audio_playlist-2000677433_16677433%2Fda4610324266e7bb28"
          >
            Cлушать на "VK Музыка"
          </a>
        </div>
        <div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;

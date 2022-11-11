
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

          <form action="https://music.yandex.ru/album/23967780" target="_blank">
   <button>Cлушать на Яндекс.Музыка</button>
  </form>
          <form action="https://open.spotify.com/album/1mFkaY0oPs6nIllqS24dlG" target="_blank">
   <button>Cлушать на Spotify</button>
  </form>
          <form action="https://music.apple.com/ru/album/%D0%B1%D0%B5%D1%80%D0%B5%D0%B3%D0%B8/1653070890?i=1653070900" target="_blank">
   <button> Cлушать на Apple Music</button>
  </form>
          <form action="https://vk.com/artist/zhdan_mty2ode1ntk1mq?z=audio_playlist-2000677433_16677433%2Fda4610324266e7bb28" target="_blank">
   <button>  Cлушать на VK Музыка</button>
  </form>
        </div>
        <div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;

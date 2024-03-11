import React, { useState, useEffect } from 'react';
import Styles from './SoundButton.module.scss';

function SoundButton() {
  const [isSoundOn, setIsSoundOn] = useState(false);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const soundIsOn = localStorage.getItem('soundIsOn');
    if (soundIsOn !== null) {
      setIsSoundOn(soundIsOn === 'true');
    }
  }, []);

  const toggleSound = () => {
    const audio = document.getElementById('audio');

    if (audio) {
      if (isSoundOn) {
        audio.pause();
      } else {
        audio.play();
        window.umami.track('sound_on')
      }
    }

    setIsSoundOn((prev) => !prev);
    setShowText(false);
  };

  return (
    <div className={Styles.BtnWrapper}>
      {showText && <div className={Styles.BtnText}>{isSoundOn ? '' : 'Включите звук для полного погружения'}</div>}
      <div className={Styles.Btn} onClick={toggleSound}>
        <div className={Styles.BtnInner}>
          <div className={Styles.BtnContent}>
            <img src={isSoundOn ? 'img/sound/sound-on.svg' : 'img/sound/sound-off.svg'} alt={isSoundOn ? 'Sound On' : 'Sound Off'} />
            <audio id='audio' loop>
              <source
                src='https://storage.yandexcloud.net/cdn.tsekh.design/Membrana/mts_ambience_loop.ogg'
                type='audio/ogg; codecs=vorbis'
              />
              <source src='https://storage.yandexcloud.net/cdn.tsekh.design/Membrana/mts_ambience_loop.mp3' type='audio/mpeg' />
              <source src='https://storage.yandexcloud.net/cdn.tsekh.design/Membrana/mts_ambience_loop.mp3' type='audio/mp3' />
            </audio>
          </div>
          <div className={Styles.BtnGradient}></div>
        </div>
      </div>
    </div>
  );
}

export default SoundButton;

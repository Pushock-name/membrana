import Header from '../Header/Header';
import { useWindowSize } from '../../hooks/useWindowSize';
import Styles from './HeroBlock.module.scss';
import { useEffect, useState } from 'react';
import SoundButton from "../ui/SoundButton/SoundButton";

const HeroBlock = ({ formBlockRef }) => {
  const { smallMobileWidth, desktopWidth, windowWidth } = useWindowSize();
  const [srcVideo, setSrcVideo] = useState(null);

  useEffect(() => {

    if (windowWidth !== null) {
      if (windowWidth > 440) {
        setSrcVideo(
          <source
            src={
              'https://storage.yandexcloud.net/cdn.tsekh.design/Membrana/benefits/%5BVer-9-New%5DMTS-Membrana-MainScreen_2880x1600_slow_szh2.mp4#t=0.001'
            }
            type='video/mp4'
          ></source>,
        );
      } else {
        setSrcVideo(
          <source
            src={
              'https://storage.yandexcloud.net/cdn.tsekh.design/Membrana/benefits/%5BVer-9-1_Mob%5DMTS-Membrana-MainScreen_750x1200_slow_szh.mp4#t=0.001'
            }
            type='video/mp4'
          ></source>,
        );
      }
    }
  }, [windowWidth]);

  return (
    <div className={Styles.Block}>
      <Header formBlockRef={formBlockRef} />
      <video autoPlay='1' playsInline preload={'metadata'} loop muted className={Styles.Video}>
        {srcVideo}
      </video>
      <div className={Styles.Wrapper}>
          {windowWidth > 1000 ? <p className={Styles.SubTitle}>
              Всё под контролем c&nbsp;Membrana:<br/> связь, данные, баланс работы и&nbsp;отдыха команды
          </p> : <p className={Styles.SubTitle}>
              Всё под контролем c&nbsp;Membrana: связь, данные, баланс работы и&nbsp;отдыха команды
          </p> }
        {smallMobileWidth && (
          <div className={Styles.Stick}>
            <div className={Styles.SmallerStick}></div>
          </div>
        )}
      </div>
        <SoundButton />
    </div>
  );
};

export default HeroBlock;

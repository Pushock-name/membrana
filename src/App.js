import HeroBlock from './components/HeroBlock/HeroBlock';
import { Research } from './components/Research/Research';
import BlockContent from '@components/BlockContent/BlockContent';
import Container from './components/ui/Container/Container';
import SoundButton from './components/ui/SoundButton/SoundButton';
import FaqBlock from './components/FaqBlock/FaqBlock';
import Footer from './components/Footer/Footer';
import '@assets/styles/index.scss';
import Styles from '@assets/styles/Home.module.scss';
import FormBlock from './components/FormBlock/FormBlock';
import { useRef } from 'react';
import jqueryScrolldepth from 'scroll-depth';

const blockContentArr = [
  {
    title: (
      <span>Информация останется конфиденциальной</span>
    ),
    text: [
      <span>
        На&nbsp;работе, в&nbsp;отпуске, в&nbsp;командировках наш сервис отследит угрозы и&nbsp;заблокирует подозрительные скрипты
      </span>,
      <span>
        На&nbsp;работе, в&nbsp;отпуске, в&nbsp;командировках наш сервис отследит угрозы и&nbsp;заблокирует подозрительные скрипты
      </span>,
    ],
    videoWidth: 494,
    videoHeight: 440,
    video: 'https://storage.yandexcloud.net/cdn.tsekh.design/Membrana/benefits/1_Privacy-Secure.mp4#t=0.001',
    gradient:
      'linear-gradient(90deg, #FFF -5.87%, rgba(255, 255, 255, 0.90) 6.23%, rgba(255, 255, 255, 0.00) 112.47%);',
    id: 1,
    circlePosition: [-280, 'auto', 'auto', -150],
    circleSize: [613, 613],
    styles: [{ marginLeft: "0px" }, { marginLeft: "160px" }]
  },
  {
    title: (
      <span>
        Спамеры больше не&nbsp;отвлекут от&nbsp;важных дел
      </span>
    ),
    text: [
      <span>
        Membrana проверяет звонки и&nbsp;блокирует спам сразу, чтобы вы&nbsp;не&nbsp;тратили на&nbsp;него время. Лишние уведомления вас не&nbsp;побеспокоят
      </span>,
      <span>
        Membrana проверяет звонки и&nbsp;блокирует спам сразу, чтобы вы&nbsp;не&nbsp;тратили на&nbsp;него время. Лишние уведомления вас не&nbsp;побеспокоят
      </span>,
    ],
    videoWidth: 494,
    videoHeight: 440,
    video: 'https://storage.yandexcloud.net/cdn.tsekh.design/Membrana/benefits/2_Prem-Cnnctn.mp4#t=0.001',
    gradient:
      'linear-gradient(269deg, #FFF 22.74%, rgba(255, 255, 255, 0.90) 35.49%, rgba(255, 255, 255, 0.00) 147.43%);',
    id: 2,
    circlePosition: [-300, -300, 'auto', 'auto'],
    circleSize: [725, 725],
    styles: [{ marginRight: "0px" }, { marginRight: "160px" }]
  },
  {
    title: (
      <span>
        Реклама исчезнет по&nbsp;вашему желанию
      </span>
    ),
    text: [
      <span>
        У&nbsp;сервиса Чистый интернет есть два режима: &laquo;Классический&raquo; работает на&nbsp;уровне доменов, а&nbsp;&laquo;Усиленный&raquo;&nbsp; анализирует контент страниц. Интернет-сёрфинг станет приятным и&nbsp;безопасным
      </span>,
      <span>
        У&nbsp;сервиса Чистый интернет есть два режима: &laquo;Классический&raquo; работает на&nbsp;уровне доменов, а&nbsp;&laquo;Усиленный&raquo;&nbsp; анализирует контент страниц. Интернет-сёрфинг станет приятным и&nbsp;безопасным
      </span>,
    ],
    videoWidth: 398,
    videoHeight: 398,
    video: 'https://storage.yandexcloud.net/cdn.tsekh.design/Membrana/benefits/3_Complete-Anonymity.mp4#t=0.001',
    gradient:
      'linear-gradient(269deg, #FFF 22.74%, rgba(255, 255, 255, 0.90) 35.49%, rgba(255, 255, 255, 0.00) 147.43%);',
    id: 3,
    circlePosition: [-150, 'auto', 'auto', -800],
    circleSize: [900, 900],
    styles: [{ marginRight: "0px" }, { marginLeft: "120px" }]
  },
  {
    title: <>Ответит на&nbsp;звонки за&nbsp;вас</>,
    text: [
      <span>
        Сервис Голос определит важные звонки. Если вашему близкому важен ваш ответ прямо сейчас, то&nbsp;он&nbsp;сразу&nbsp;же вас соединит. На&nbsp;несрочные звонки&nbsp;&mdash; ответит сам и&nbsp;сохранит для вас расшифровку диалога в&nbsp;приложении
      </span>,
      <span>
        Сервис Голос определит важные звонки. Если вашему близкому важен ваш ответ прямо сейчас, то&nbsp;он&nbsp;сразу&nbsp;же вас соединит. На&nbsp;несрочные звонки&nbsp;&mdash; ответит сам и&nbsp;сохранит для вас расшифровку диалога в&nbsp;приложении
      </span>,
    ],
    videoWidth: 501,
    videoHeight: 397,
    video: 'https://storage.yandexcloud.net/cdn.tsekh.design/Membrana/benefits/4_VPN%20(1).mp4#t=0.001',
    gradient:
      'linear-gradient(269deg, #FFF 1.16%, rgba(255, 255, 255, 0.90) 18.67%, rgba(255, 255, 255, 0.00) 172.36%);',
    id: 4,
    styles: [{ marginLeft: "0px" }, { marginRight: "160px" }]
  },
  {
    title: <span className={Styles.TitleString_4}>Маскировка IP</span>,
    text: [
      <span>
        Мы&nbsp;разработали собственный, легальный VPN чтобы вы&nbsp;могли пользоваться зарубежными сервисами по&nbsp;безопасному каналу и&nbsp;были уверены в&nbsp;сохранности своих данных
      </span>,
      <span>
        Мы&nbsp;разработали собственный, легальный VPN чтобы вы&nbsp;могли пользоваться зарубежными сервисами по&nbsp;безопасному каналу и&nbsp;были уверены в&nbsp;сохранности своих данных
      </span>,
    ],
    videoWidth: 378,
    videoHeight: 428,
    video: 'https://storage.yandexcloud.net/cdn.tsekh.design/Membrana/benefits/5_User-Care.mp4#t=0.001',
    gradient:
      ' linear-gradient(90deg, #FFF -4.7%, rgba(255, 255, 255, 0.90) 16.36%, rgba(255, 255, 255, 0.00) 201.18%);',
    id: 5,
    circlePosition: [250, 'auto', 'auto', -800],
    circleSize: [755, 755],
    styles: [{ marginLeft: "0px" }, { marginLeft: "160px" }]
  },
  {
    title: (
      <span>
        Премиум-связь с&nbsp;безлимитами
      </span>
    ),
    text: [
      <span>
        Безлимитный интернет. Безлимитные звонки на&nbsp;МТС и&nbsp;5000 минут для других операторов. Высокая скорость и&nbsp;качественная связь: в&nbsp;дороге, офисе, на&nbsp;встрече
      </span>
      ,
      <span>
        Безлимитный интернет. Безлимитные звонки на&nbsp;МТС и&nbsp;5000 минут для других операторов. Высокая скорость и&nbsp;качественная связь: в&nbsp;дороге, офисе, на&nbsp;встрече
      </span>
      ,
    ],
    videoWidth: 554,
    videoHeight: 554,
    video: 'https://storage.yandexcloud.net/cdn.tsekh.design/Membrana/benefits/8_VirtSecret.mp4#t=0.001',
    gradient:
      'background: linear-gradient(89deg, #FFF -12.79%, rgba(255, 255, 255, 0.90) 1.85%, rgba(255, 255, 255, 0.00) 130.36%);',
    id: 6,
    circlePosition: [-350, -400, 'auto', 'auto'],
    circleSize: [697, 697],
    ul: true,
    styles: [{ marginLeft: "50px" }, { marginLeft: "-50px" }],
    blockLast: true
  },
];

function App() {
  const formBlockRef = useRef(null);

  window.onload = function () {
    setTimeout(() => {
      const inputName = document.querySelector('#name')
      console.log(inputName)
      inputName.addEventListener('change', () => {
        window.umami.track('start_filling_form')
        // console.log('start_filling_form')
      })
      const inputCompany = document.querySelector('#company')
      console.log(inputCompany)
      inputCompany.addEventListener('change', () => {
        window.umami.track('start_filling_form')
        // console.log('start_filling_form')
      })
      const inputMobile = document.querySelector('#mobile')
      console.log(inputMobile)
      inputMobile.addEventListener('change', () => {
        window.umami.track('start_filling_form')
        // console.log('start_filling_form')
      })
      const button = document.querySelector('#ZVK_form_submit-button')
      console.log(button)
      button.addEventListener('click', () => {
        window.umami.track('send_form')
        // console.log('send_form')
      })
    }, 3000)
  }

  jqueryScrolldepth({
    eventHandler: function (data) {
      if (data.eventLabel == "25%") {
        window.umami.track('scroll_fc_25')
      } else if (data.eventLabel == "50%") {
        window.umami.track('scroll_fc_50')
      } else if (data.eventLabel == "75%") {
        window.umami.track('scroll_fc_75')
      } else {
        window.umami.track('scroll_fc_100')
      }
    },
    pixelDepth: false,
    userTiming: false,
  });

  return (
    <main className={Styles.Block}>

      <HeroBlock formBlockRef={formBlockRef} />
      <Research />
      <Container>
        <div className={Styles.mainWrapper}>
          <div className={Styles.Title}>
            <h2>Membrana защитит ваши данные</h2>
          </div>
          {blockContentArr.map((item, index) => (
            <BlockContent
              key={index}
              title={item.title}
              text={item.text}
              video={item.video}
              widthVideo={item.videoWidth}
              heightVideo={item.videoHeight}
              titleHeight={item.titleHeight}
              gradient={item.gradient}
              circlePosition={item.circlePosition}
              circleSize={item.circleSize}
              ul={item.ul}
              styles={item.styles}
              blockLast={item.blockLast}
            />
          ))}
          <FormBlock formBlockRef={formBlockRef} />
          <FaqBlock />
        </div>
      </Container>
      <Footer />
    </main>
  );
}

export default App;

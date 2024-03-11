import Container from '../ui/Container/Container';
import { useWindowSize } from '../../hooks/useWindowSize';
import Styles from './Research.module.scss';



const Research = () => {
  const { windowWidth } = useWindowSize();
  const arrAnimation = [
    {
      subTitle: '65 млрд рублей',
      text: 'ущерб от IT-преступлений в России в 2022 г. *',
    },
    {
      subTitle: '300 000',
      text: 'новых вредоносных программ создаётся ежедневно',
    },
    {
      subTitle: '92%',
      text: 'вредоносных программ распространяется через e-mail',
    },
    {
      subTitle: '4,1 млн',
      text: 'интернет-сайтов заражены вредоносным ПО **',
    },
  ];


  return (
    <Container>
      <div className={Styles.Block}>
        <div className={Styles.Box}>
          <div className={Styles.WrapperTop}>
            <div className={Styles.Left}>
              <h2 className={Styles.Title}>
                Кибератаки на&nbsp;бизнес:
                масштабы и&nbsp;потери
              </h2>
            </div>
            <div className={Styles.Right}>
              {arrAnimation.map((obj,index) => {
                 return <div key={index} className={Styles.RightContainer}>
                   <p className={Styles.SubTitle} >
                     {obj.subTitle}
                   </p>
                   <p className={Styles.Text}>
                     {obj.text}
                   </p>
                 </div>
              })}
            </div>
          </div>
          <div className={Styles.WrapperBottom}>
            <p>* По&nbsp;данным&nbsp; <a target={'_blank'} href="https://tass.ru/obschestvo/16094089">ТАСС</a> на&nbsp;начало 2022&nbsp;г. Дата обращения: 07.12.2023</p>
            <p>** По&nbsp;данным&nbsp; <a target={'_blank'} href="https://www.packetlabs.net/posts/239-cybersecurity-statistics-2023/">Packetlabs</a> за&nbsp;2023&nbsp;г. Дата обращения: 07.12.2023</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export { Research };

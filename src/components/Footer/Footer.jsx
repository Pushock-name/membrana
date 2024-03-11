import React from 'react';
import Container from '@components/ui/Container/Container';

import Styles from './Footer.module.scss';

const BlockContent = () => {
  return (
    <Container className={Styles.Container}>
      <div className={Styles.Footer}>
        <div className={Styles.Wrapper}>
          <div className={Styles.LeftLink}>
            <a
              href={
                'https://moskva.mts.ru/about/investoram-i-akcioneram/korporativnoe-upravlenie/dokumenti-pao-mts/politika-obrabotka-personalnih-dannih-v-pao-mts'
              }
              target={'_blank'}
              rel='noopener'
            >
              Политика обработки персональных данных
            </a>
            <a href={'https://moskva.mts.ru/personal/cookie'} target={'_blank'} rel='noopener'>
              Политика обработки файлов cookie
            </a>
          </div>
          <div className={Styles.RightLink}>
            <a href={'https://futurecrew.ru/'} target={'_blank'} rel='noopener' data-umami-event='link_futurecrew'>
              Продукт разработан командой FutureCrew
            </a>
            <p>© 2024. Все права защищены</p>
          </div>
        </div>
        <p className={Styles.footerText}>
          Сайт и&nbsp;опубликованная на&nbsp;нём информация о&nbsp;характеристиках и&nbsp;условиях приобретения тарифа &laquo;Membrana&raquo; не&nbsp;являются публичной офертой и&nbsp;могут быть изменены. Окончательные условия приобретения и&nbsp;характеристики тарифа &laquo;Membrana&raquo; определяются Пользовательским соглашением.
        </p>
      </div>
    </Container>

  );
};

export default BlockContent;




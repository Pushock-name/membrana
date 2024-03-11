import React, { useEffect, useState } from "react";
import { useWindowSize } from '../../hooks/useWindowSize';
import * as yup from 'yup';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';


import Styles from './FormBlock.module.scss';
import classNames from "classnames";


import axios from "axios";

const BlockContent = ({ formBlockRef }) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://digitalb2b.mts.ru/widget/app.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);
    const { windowWidth } = useWindowSize();

    window.onload = function () {
        setTimeout(() => {
            const inputName = document.querySelector('#name')
            console.log(inputName)
            inputName.addEventListener('change', () => {
                window.umami.track('start_filling_form')
                console.log('start_filling_form')
            })
            const inputCompany = document.querySelector('#company')
            console.log(inputCompany)
            inputCompany.addEventListener('change', () => {
                window.umami.track('start_filling_form')
                console.log('start_filling_form')
            })
            const inputMobile = document.querySelector('#mobile')
            console.log(inputMobile)
            inputMobile.addEventListener('change', () => {
                window.umami.track('start_filling_form')
                console.log('start_filling_form')
            })
            const button = document.querySelector('#ZVK_form_submit-button')
            console.log(button)
            button.addEventListener('click', () => {
                window.umami.track('send_form')
                console.log('send_form')
            })
        }, 3000)
    }

    return (
        <div className={Styles.Block} >
            <div className={classNames(Styles.Title, Styles.Title_one)}>
                <h2>Обеспечивает безопасность и&nbsp;сохранность данных</h2>
            </div>
            <div className={classNames(Styles.Subtitle, Styles.Subtitle_one)}>

                {windowWidth <= 500 ? <p>Membrana позволяет минизимировать риски утечек коммерческой информации</p> :
                    <p>Membrana позволяет минизимировать риски утечек коммерческой информации</p>}
            </div>
            <div className={Styles.HeadBlock} ref={formBlockRef} >
                <div className={classNames(Styles.Title, Styles.Title_two)}>
                    {windowWidth <= 500 ? <h2>
                        Позаботьтесь
                        о&nbsp;команде
                    </h2> : <h2>
                        Позаботьтесь
                        о&nbsp;команде
                    </h2>}
                </div>
                <div className={classNames(Styles.Subtitle, Styles.Subtitle_two)}>
                    {windowWidth <= 500
                        ? <p>Заполните форму&nbsp;&mdash; и&nbsp;мы&nbsp;с&nbsp;вами свяжемся. Покажем возможности для компаний и&nbsp;организуем демо Membrana </p>
                        : <p>Заполните форму&nbsp;&mdash; и&nbsp;мы&nbsp;с&nbsp;вами свяжемся. Покажем возможности для компаний и&nbsp;организуем демо Membrana</p>
                    }
                </div>
            </div>
            <div className={Styles.FormWrapper} >
                <div
                    id='digital_highway'
                    data-bo-theme={'dark'}
                    data-bo-product="membrana"
                    data-bo-hide-extra={'comment attachment email'}
                    data-bo-subline={''}
                    data-bo-required-inn={'true'}
                    data-bo-required-name={'true'}
                    data-bo-header={''}
                    data-bo-custom-styles="membrana"
                    data-vitrine='membrana'
                    data-region='77'
                />
            </div>
        </div>
    );
};

export default BlockContent;
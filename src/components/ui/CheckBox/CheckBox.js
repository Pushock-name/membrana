import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import Styles from './CheckBox.module.scss';

const CheckBox = ({ ariaLabel = '', id, register }) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className={Styles.CheckBox}>
            <input
                aria-label={ariaLabel}
                type='checkbox'
                checked={isChecked}
                id={id}
                {...register(id)}
                onChange={() => setIsChecked((prev) => !prev)}
            />

        </div>
    );
};

export default CheckBox;
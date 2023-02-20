import { FC, useState } from 'react'

import closeIcon from '../../assets/icon/closeIcon.png'
import warningIcon from '../../assets/icon/warningIcon.png'

import s from './error.module.scss'

export const Error: FC = () => {
    const [isCloseError, setIsCloseError] = useState(false);

    const onCloseError = () => {
        setIsCloseError(prevState => !prevState);
    }

    return (
        <div className={isCloseError ? s.hideErrorContainer : s.errorContainer} data-test-id='error'>
            <img src={warningIcon} alt='warning-icon' className={s.warningIcon} />
            <div className={s.errorText}>
                Что-то пошло не так. Обновите страницу через некоторое время.
            </div>
            <button onClick={onCloseError} className={s.closeButton} type='button'>
                <img src={closeIcon} alt='close-icon' />
            </button>
        </div>
    )
}
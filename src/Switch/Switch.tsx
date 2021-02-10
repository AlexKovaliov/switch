import React, {useCallback} from 'react';
import s from './Switch.module.sass'

type SwitchPropsType = {
    value: boolean,
    onChange: (value: boolean) => void
    activeTitle?: string
    inactiveTitle?: string
}


export const Switch = React.memo(({value, inactiveTitle = 'IS NOT', activeTitle = 'IS', onChange}: SwitchPropsType) => {

    const activate = useCallback(() => {
        onChange(true)
    }, [onChange])

    const inactivate = useCallback(() => {
        onChange(false)
    }, [onChange])

    return (
        <div className={s.container}>
            <div className={s.wrap}>

                <span className={value ? `${s.included} ${s.active}` : `${s.included}`}
                      onClick={activate}>{activeTitle}</span>

                <span className={value ? `${s.deactivate}` : `${s.deactivate} ${s.inactive}`}
                      onClick={inactivate}>{inactiveTitle}</span>

            </div>
        </div>
    )
})


import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../utils/font-awesome'

function IconSocial({style,socialLink, icon, size}) {

    return (
        <a className={style} href={socialLink} target="_blank">
            <FontAwesomeIcon icon={icon} size={size} />
        </a>
    )
}

export default IconSocial

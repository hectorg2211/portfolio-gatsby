import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../utils/font-awesome'

function IconSocial({classes,socialLink, icon, size}) {
    return (
        <a className={classes} href={socialLink} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={icon} size={size} />
        </a>
    )
}

export default IconSocial

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../utils/font-awesome'
import { Link } from 'gatsby-link'

function IconSocial({socialLink, icon, size}) {

    return (
        <a href={socialLink} target="_blank">
            <FontAwesomeIcon icon={icon} size={size} />
        </a>
    )
}

export default IconSocial

  
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/pine-tree-fire'

const Header = () => {
    return (
        <header className="header">
            <h1><Icon icon={locationIcon} /> Australian 2019-2020 Bushfire Season</h1>
        </header>
    )
}

export default Header
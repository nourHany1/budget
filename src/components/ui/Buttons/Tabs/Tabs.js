import React, { useState } from 'react'
import './tabs.css'
const Tabs = ({children ,defaultTap = 1}) => {
    const tab = [...children]
    const tabTitle = tab.map(t => t.props.title || '')
    const tabContent = tab.map(t => t.props.children)
    const [active,setActive] = useState(defaultTap)
    return (
        <div className='tabs'>
            <div className='tabs_titles'>
                {tabTitle.map((title, ix) => (
                    <div key={`tab-title-${ix +1}`} className={`tab_title ${active === ix +1  ? 'active' : ''}`} onClick={() => setActive(ix +1)}>{title}</div>                    
                ))}
            </div>
            <div className='tab_content'> {tabContent[active -1 ]} </div>
        </div>
    )
}

export default Tabs
import React, { useEffect, useRef, useState } from 'react'
import LogoImg from 'assets/images/logo.png'
import './header.css'
import Button from 'components/ui/Buttons/Button'
import Modal from 'components/ui/modal/Modal'
import BudgetForm from 'components/budget/budgetForm/BudgetForm'

function Header(props) {
    const [isScrolled, setIsScrolled] = useState(false)
    const isMount = useRef(false)
    useEffect(() => {
        if (isMount.current){
            window.addEventListener('scroll', () => {
                if (window.scrollY > 60) {
                    setIsScrolled(true)
                } else{
                    setIsScrolled(false)
                } 
            })
    }
        isMount.current = true
    } ,[])
    const [showModel,setShowModel] = useState(false)
    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''} `}>
            <div className='container'>
                <div className='header_row'>
                    {/* brand */}
                    <div className='header_brand'>
                        <div className='logo'>
                            <img src = {LogoImg} alt='brand logo'/>
                        </div>
                        <h1>Budget App</h1>
                    </div>
                    {/* action */}
                    <div className='header_actions'>
                        <div className='header_actions-add'>
                            <Button onClick={() => setShowModel(true)}> + </Button>
                        </div>
                    </div>
                </div>
                <Modal visable={showModel} closeModel = {() => setShowModel(false)}>
                    <BudgetForm visable={() => setShowModel(false)}/>
                </Modal>
            </div>
        </header>
    )
}

export default Header
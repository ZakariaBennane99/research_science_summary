import React from 'react'
import './index.css'
import profile from './media/profile.svg'
import home from './media/home.svg'
import articles from './media/articles.svg'
import profile2 from './media/profile2.svg'
import acc_set from './media/acc_set.svg'
import sign_out from './media/sign_out.svg'
import write_pen from './media/write_pen.svg'



function Dashabord() {

    let artH

    // get 70% of existing screen height
    const h = window.innerHeight * .7

    const artSecRef = React.useRef()

    const [artSecF, setartSecF] = React.useState()

    React.useEffect(() => {
        setartSecF(artSecRef.current)
    }, [])

    const artcles = [
        {
            title: 'How to create an ass kicking title for your next compaign',
            date: '21 Jun, 2022'
        },
        {
            title: 'How to create an ass kicking title for your next compaign',
            date: '21 Jun, 2022'
        },
        {
            title: 'How to create an ass kicking title for your next compaign',
            date: '21 Jun, 2022'
        },
        {
            title: 'How to create an ass kicking title for your next compaign',
            date: '21 Jun, 2022'
        },
        {
            title: 'How to create an ass kicking title for your next compaign',
            date: '21 Jun, 2022'
        },
        {
            title: 'How to create an ass kicking title for your next compaign',
            date: '21 Jun, 2022'
        }, {
            title: 'How to create an ass kicking title for your next compaign',
            date: '21 Jun, 2022'
        },
        {
            title: 'How to create an ass kicking title for your next compaign',
            date: '21 Jun, 2022'
        },
        {
            title: 'How to create an ass kicking title for your next compaign',
            date: '21 Jun, 2022'
        },
        {
            title: 'How to create an ass kicking title for your next compaign',
            date: '21 Jun, 2022'
        },
        {
            title: 'How to create an ass kicking title for your next compaign',
            date: '21 Jun, 2022'
        }
    ]

    return (
      <div className='dashboard-section'>

        <div className='left-hand-section'>
            <div className='profile-info'>
                <img src={profile} alt="" />
                <p>WELCOME</p>
                <h1>Zakaria Bennane</h1>
                <h2>BUSINESS</h2>
            </div>
            <div className='left-hand-menu'>
                <p><img src={home} alt="" />Home</p>
                <p><img src={articles} alt="" />My articles</p>
                <p><img src={profile2} alt="" />Profile</p>
                <p><img src={acc_set} alt="" />Account settings</p>
                <p><img src={sign_out} alt="" />Sign out</p>
            </div>
        </div>

        <div className='main-section'>
            <p id='write'><img src={write_pen} alt="" />Write An Article . . .</p>
            <h1>PUBLISHED ARTICLE</h1>
            <div className='articles'>
                {artcles.map((article, index) => {
                    if (artSecF && index === 0) {
                        artH = artSecF.clientHeight * 2
                    } else if (artSecF) {
                        artH += artSecF.clientHeight
                    }
                    if (artH > 0 && artH < h) {
                        return (<div ref={artSecRef}>
                            {article.title}
                            <p>{article.date}</p>
                        </div>)
                    } else if (artH === undefined) {
                        return (<div ref={artSecRef}>
                            {article.title}
                            <p>{article.date}</p>
                        </div>)
                    } else {
                        return null
                    }
                })}
                <div className='three-dots'>. . .</div>
            </div>
        </div>

        <div className='in-review'>
            <div className='three-dots'>. . .</div>
        </div>

      </div>
    )
}

export default Dashabord

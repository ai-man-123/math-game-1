import React, {useState} from 'react';

import {Link} from 'react-router-dom'

import RulesModal from '../Modals/RulesModal';

import css from './Welcome.module.css';

const Welcome = () => {

    const [modal, setModal] = useState(false);

    return(

        <div className={css.DivWelcome}>

            <div className={css.DivTitle}>

                <h1>Welcome To MathTrix</h1>
                <h2>A Math Game for Children</h2>

                <div className={css.DivBtns}>

                    <button onClick={() => setModal(true)}>Rules</button>

                    <Link className={css.Link} to='/play'>
                        Play
                    </Link>

                </div>


            </div>
            
            <footer>
                <a href='mailto:g.numa10@hotmail.com'>&copy; NumaX</a>
            </footer>

            {
                modal ? <RulesModal close={() => setModal(false)}/> : null
            }
        </div>

    )
}

export default Welcome;
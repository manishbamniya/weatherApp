import React from 'react'
import classes from './MainLayout.module.css'

export default function MainLayout(props) {
    return (
        <div className={classes.mainLayout}>
            {props.children}
        </div>
    )
}

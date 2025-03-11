import styles from "./Button.module.scss"
import clsx from "clsx"

function Button({Home , New , Contact ,primari , active ,disable , children}){
    const classes = clsx(styles.bnt ,'d-flex', {
        [styles.Home]:Home,
        [styles.New] : New,
        [styles.Contact] :Contact ,
        [styles.primari] :primari ,
        [styles.active] : active ,
        [styles.disable] :disable
        
    })
    return(
        <button className={classes}>
            Click Me ! {children}
        </button>
    )
}

export default Button
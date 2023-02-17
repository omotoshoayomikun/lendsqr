import styles from '../../Styles/Forms.module.scss'

export const Spinner = () => {
    return (
        <>
            <div className={`${styles.spinner_cont}`}>
                <div className={`${styles.spinner}`}>

                </div>
                <div className={`${styles.spin_text}`}>Loading...</div>
            </div>
        </>
    )
}

export const SmSpinner = () => {
    return (
        <>
            <div className={`${styles.sm_spinner_cont}`}>
                <div className={`${styles.md_spinner}`}>

                </div>
                <div className={`${styles.spin_text}`}>Loading...</div>
            </div>
        </>
    )
}
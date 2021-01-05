import React from 'react'
import Title from '../Title'
import styles from '../../css/contact.module.css'

const Contact = () => {
    return (
        <section className={styles.Contact}>
            <Title title='contact' subtitle='us'/>
            <div className={styles.center} >
                <form action="https://formspree.io/f/moqpyvdn" method="POST" className={styles.form}>
                    <div>
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            className={styles.formControl}
                            placeholder='JJoojdo'
                        />
                    </div>
                    <div>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            className={styles.formControl}
                            placeholder='@email'
                        />
                    </div>
                    <div>
                        <textarea 
                            
                            name="message" 
                            id="message" 
                            className={styles.formControl}
                            placeholder='hello'
                        />
                    </div>
                    <div>
                        <input type="submit" value="submit here" className={styles.submit} />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact

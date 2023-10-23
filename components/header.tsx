import { useAddress } from "@thirdweb-dev/react"
import styles from "../styles/Home.module.css";


export default function Header() {
     const address = useAddress();
  return (
    <div className={styles.header}>
        {address? (
            <h1 className={styles.title}>
            Welcome to{" "}
            <span className={styles.gradientText0}>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                M3T4.
              </a>
            </span>
          </h1>
        ):(
            <div>
            <h1 className={styles.title}>
            Welcome to <span className={styles.gradientText0}>M3T4</span> </h1>
            
            <br/>
            <p>Sign in and discorver next gen 3.0</p>
            </div>
           
        )}
          
          
          </div>
  )
}

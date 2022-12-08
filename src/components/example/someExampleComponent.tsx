import styles from './someExampleComponent.module.scss'
import React from 'react'

type SomeExampleComponentProps = {

}

const SomeExampleComponent: React.FC<SomeExampleComponentProps> = () => {
  return (
    <div className={styles.container}>
  <h1>Portfolio</h1>
  <p>My name is jeff</p>
</div>
  )
}

export default SomeExampleComponent

import styles from './Test.module.scss'
import Logo from '../../src/logo.png'
import svgIcon from '../../src/svg.svg'
import ArrowIcon from '../../src/assets/images/Arrow'

export const Test = () => {
  return (
    <div className={styles.test}>
      test
      <img src={Logo} alt="" />
      <img src={svgIcon} alt="" width={20} height={20} />
      <ArrowIcon />
    </div>
  )
}

import styles from './Test.module.scss'
import Logo from '../../src/logo.png'
import svgIcon from '../../src/svg.svg'
import ArrowIcon from '../../src/assets/images/Arrow'
import cn from 'classnames'
import { useState } from 'react'

export const Test = () => {
  const [state, setState] = useState<boolean>(true)

  return (
    <div className={styles.test}>
      test
      <img src={Logo} alt="" />
      <img src={svgIcon} alt="" width={20} height={20} />
      <ArrowIcon className={styles.arrow} height={20} width={20} fill="red" />
      <button
        onClick={() => setState(!state)}
        className={cn(styles.cn1, styles.cn2, {
          [styles.test3]: state,
        })}
      >
        cn test
      </button>
    </div>
  )
}

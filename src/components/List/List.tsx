import React from 'react'
import styles from './List.module.scss'
import cn from 'classnames'

export const List = () => {
  const list = [1, 2, 3, 4, 5]

  const [state, setState] = React.useState<number>(0)

  return (
    <div className={styles.test}>
      <ul>
        {list.map((item: number, index: number) => (
          <li
            onClick={() => setState(index)}
            onKeyDown={() => setState(index)}
            tabIndex={0}
            role={'presentation'}
            key={index}
            className={cn(styles.item, {
              [styles.active]: state === index,
            })}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

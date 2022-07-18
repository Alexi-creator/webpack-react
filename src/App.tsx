import './styles.scss'
import { Test } from './components/Test/Test'
import { ClickCounter } from './ClickCounter'
import { List } from './components/List/List'

export const App = () => {
  return (
    <>
      <h1>React typeScript</h1>
      <Test />
      counter:
      <ClickCounter />
      <List />
    </>
  )
}

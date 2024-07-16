import QuestionRadio from './QuestionRadio'
import PropsComponent from './PropsComponent'
import { QuestionRadioDefaultProps } from './interface'

export * from './interface'

export default {
  title: '单选',
  type: 'questionRadio',
  Component: QuestionRadio,
  PropsComponent,
  defaultProps: QuestionRadioDefaultProps,
}

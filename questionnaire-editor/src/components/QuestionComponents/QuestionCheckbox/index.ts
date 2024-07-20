import QuestionCheckbox from './QuestionCheckbox'
import PropsComponent from './PropsComponent'
import StatComponent from './StatComponent'
import { QuestionCheckboxDefaultProps } from './interface'

export * from './interface'

export default {
  title: '多选',
  type: 'questionCheckbox', // 要和后端统一好
  Component: QuestionCheckbox,
  PropsComponent,
  defaultProps: QuestionCheckboxDefaultProps,
  StatComponent,
}

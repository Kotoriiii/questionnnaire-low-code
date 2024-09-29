import PropsComponent from './PropsComponent'
import QuestionTitle from './QuestionTitle'
import { QuestionTitleDefaultProps } from './interface'

export * from './interface'

export default {
  title: '标题',
  type: 'questionTitle',
  Component: QuestionTitle,
  PropsComponent,
  defaultProps: QuestionTitleDefaultProps,
}

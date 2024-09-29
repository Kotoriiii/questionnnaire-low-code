import PropsComponent from './PropsComponent'
import QuestionInput from './QuestionInput'
import { QuestionInputDefaultProps } from './interface'

export * from './interface'

export default {
  title: '输入框',
  type: 'questionInput',
  Component: QuestionInput,
  PropsComponent,
  defaultProps: QuestionInputDefaultProps,
}

import QuestionInfo from './QuestionInfo'
import PropsComponent from './PropsComponent'
import { QuestionInfoDefaultProps } from './interface'

export * from './interface'

export default {
  title: '问卷信息',
  type: 'questionInfo',
  Component: QuestionInfo,
  PropsComponent,
  defaultProps: QuestionInfoDefaultProps,
}

import PropsComponent from './PropsComponent'
import QuestionParagraph from './QuestionParagraph'
import { QuestionParagraphDefaultProps } from './interface'

export * from './interface'

export default {
  title: '段落',
  type: 'questionParagraph', // 要和后端统一好
  Component: QuestionParagraph,
  PropsComponent,
  defaultProps: QuestionParagraphDefaultProps,
}

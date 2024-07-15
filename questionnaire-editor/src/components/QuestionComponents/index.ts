import { FC } from 'react'
import QuestionInputConf, { QuestionInputPropsType } from './QuestionInput'
import QuestionTitleConf, { QuestionTitlePropsType } from './QuestionTitle'

// 各个组件的props type
export type ComponentPropsType = QuestionInputPropsType & QuestionTitlePropsType

// 统一，组件的配置 type
export type ComponentConfigType = {
  title: string
  type: string
  Component: FC<ComponentPropsType>
  PropsComponent: FC<ComponentPropsType>
  defaultProps: ComponentPropsType
}

// 全部的组件配置的列表
const componentConfigList: ComponentConfigType[] = [QuestionInputConf, QuestionTitleConf]

// 组件分组
export const componentConfGroup = [
  {
    groupId: 'textGroup',
    groupName: '文本显示',
    components: [QuestionTitleConf],
  },
  {
    groupId: 'inputGroup',
    groupName: '用户输入',
    components: [QuestionInputConf],
  },
  //   {
  //     groupId: 'chooseGroup',
  //     groupName: '用户选择',
  //     components: [QuestionRadioConf, QuestionCheckboxConf],
  //   },
]

export function getComponentConfigByType(type: string) {
  return componentConfigList.find(c => c.type === type)
}

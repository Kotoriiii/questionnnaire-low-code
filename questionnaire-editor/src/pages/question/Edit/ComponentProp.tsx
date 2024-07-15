import { FC } from 'react'
import { useDispatch } from 'react-redux'
import useGetComponentInfo from '../../../hooks/useGetComponentInfo'
import {
  ComponentPropsType,
  getComponentConfigByType,
} from '../../../components/QuestionComponents'
import { changeComponentProps } from '../../../store/componentsReducer'

const NoProp: FC = () => {
  return <div style={{ textAlign: 'center' }}>未选中组件</div>
}

const ComponentProp: FC = () => {
  const dispatch = useDispatch()
  const { selectedComponent } = useGetComponentInfo()
  if (selectedComponent == null) return <NoProp />

  const { type, props } = selectedComponent
  const componentConf = getComponentConfigByType(type)
  if (componentConf == null) return <NoProp />

  const changeProps = (newProps: ComponentPropsType) => {
    if (selectedComponent === null) return
    const { fe_id } = selectedComponent
    dispatch(changeComponentProps({ fe_id, newProps }))
  }

  const { PropsComponent } = componentConf

  return <PropsComponent {...props} onChange={changeProps} />
}

export default ComponentProp

import { FC, MouseEvent } from 'react'
import { Spin } from 'antd'
import { useDispatch } from 'react-redux'
import classNames from 'classnames'
import useGetComponentInfo from '../../../hooks/useGetComponentInfo'
import { getComponentConfigByType } from '../../../components/QuestionComponents'
import { changeSelectedId, ComponentInfoType } from '../../../store/componentsReducer'
import styles from './EditCanvas.module.scss'

type PropsType = {
  loading: boolean
}

const getComponent = (componentInfo: ComponentInfoType) => {
  const { type, props } = componentInfo

  const componentConf = getComponentConfigByType(type)
  if (componentConf == null) return

  const { Component } = componentConf
  return <Component {...props} />
}

const EditCanvas: FC<PropsType> = ({ loading }) => {
  const { componentList, selectedId } = useGetComponentInfo()
  const dispatch = useDispatch()

  const handleClick = (event: MouseEvent, id: string) => {
    event.stopPropagation()
    dispatch(changeSelectedId(id))
  }

  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '24px' }}>
        <Spin />
      </div>
    )
  }

  return (
    <div className={styles.canvas}>
      {componentList.map(c => {
        const { fe_id } = c

        const wrapperDefaultClassName = styles['component-wrapper']
        const selectedClassName = styles.selected
        const wrapperClassName = classNames({
          [wrapperDefaultClassName]: true,
          [selectedClassName]: fe_id === selectedId,
        })

        return (
          <div key={fe_id} className={wrapperClassName} onClick={e => handleClick(e, fe_id)}>
            <div className={styles.component}>{getComponent(c)}</div>
          </div>
        )
      })}
    </div>
  )
}

export default EditCanvas

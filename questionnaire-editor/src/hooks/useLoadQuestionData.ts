/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { getQuestionService } from '../service/question'

const useLoadQuestionData = () => {
  const { id = '' } = useParams()

  async function load() {
    const data = await getQuestionService(id)
    return data
  }

  const { loading, data, error } = useRequest(load)

  return { loading, data, error }
}

export default useLoadQuestionData

import { useSearchParams } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { getQuestionListService } from '../service/question'
import { LIST_SEARCH_PARAM_KEY } from '../constants'

type OptionType = {
  isStar: boolean
  isDeleted: boolean
}

const useLoadingQuestionListData = (opt: Partial<OptionType> = {}) => {
  const { isDeleted, isStar } = opt
  const [searchParams] = useSearchParams()

  const { data, loading, error } = useRequest(
    async () => {
      const keyword = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''
      const data = await getQuestionListService({ keyword, isDeleted, isStar })
      return data
    },
    {
      refreshDeps: [searchParams], // 刷新的依赖项
    }
  )

  return { data, loading, error }
}

export default useLoadingQuestionListData

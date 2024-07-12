import { useSearchParams } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { getQuestionListService } from '../service/question'
import {
  LIST_PAGE_PARAM_KEY,
  LIST_PAGE_SIZE,
  LIST_PAGE_SIZE_PARAM_KEY,
  LIST_SEARCH_PARAM_KEY,
} from '../constants'

type OptionType = {
  isStar: boolean
  isDeleted: boolean
}

const useLoadingQuestionListData = (opt: Partial<OptionType> = {}) => {
  const { isDeleted, isStar } = opt
  const [searchParams] = useSearchParams()

  const { data, loading, error, refresh } = useRequest(
    async () => {
      const keyword = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''
      const page = parseInt(searchParams.get(LIST_PAGE_PARAM_KEY) || '') || 1
      const pageSize = parseInt(searchParams.get(LIST_PAGE_SIZE_PARAM_KEY) || '') || LIST_PAGE_SIZE

      const data = await getQuestionListService({ keyword, isDeleted, isStar, page, pageSize })
      return data
    },
    {
      refreshDeps: [searchParams], // 刷新的依赖项
    }
  )

  return { data, loading, error, refresh }
}

export default useLoadingQuestionListData

import { ChangeEvent, FC, useEffect, useState } from 'react'
import { Input } from 'antd'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { LIST_SEARCH_PARAM_KEY } from '../constants'

const { Search } = Input

const ListSearch: FC = () => {
  const [value, setValue] = useState('')
  const navigate = useNavigate()
  const { pathname } = useLocation()

  // 获取 url 参数，并设置到 input value
  const [searchParams] = useSearchParams()
  useEffect(() => {
    const curVal = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''
    setValue(curVal)
  }, [searchParams])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const handleSearch = (value: string) => {
    // 跳转页面，增加 url 参数
    navigate({ pathname, search: `${LIST_SEARCH_PARAM_KEY}=${value}` })
  }

  return (
    <Search
      placeholder="输入关键字"
      allowClear
      value={value}
      onChange={handleChange}
      onSearch={handleSearch}
      style={{ width: '260px' }}
    />
  )
}

export default ListSearch

/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useGetUserInfo from './useGetUserInfo'
import {
  isLoginOrRegister,
  isNoNeedUserInfo,
  MANAGE_INDEX_PATHNAME,
  LOGIN_PATHNAME,
} from '../router/index'

const useNavPage = (waitingUserData: boolean) => {
  const { username } = useGetUserInfo()
  const { pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (waitingUserData) return

    // 已经登录了
    if (username) {
      if (isLoginOrRegister(pathname)) {
        navigate(MANAGE_INDEX_PATHNAME)
      }
      return
    }

    // 未登录
    if (isNoNeedUserInfo(pathname)) {
      return
    } else {
      navigate(LOGIN_PATHNAME)
    }
  }, [waitingUserData, username, pathname])
}

export default useNavPage

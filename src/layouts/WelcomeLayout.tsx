import { animated, useTransition } from '@react-spring/web'
import { type ReactNode, useRef } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'

// const map: Record<string, ReactNode> = {}  // 会出现内存泄漏问题
export const WelcomeLayout: React.FC = () => {
  const location = useLocation() // 获取当前地址栏的信息
  const map = useRef<Record<string, ReactNode>>({})
  const outlet = useOutlet()
  map.current[location.pathname] = outlet
  const transtion = useTransition(location.pathname, {
    from: pathname => (pathname === '/welcome/1' ? { transform: 'translateX(0%)' } : { transform: 'translateX(100%)' }),
    enter: { transform: 'translateX(0%)' },
    leave: { transform: 'translateX(-100%)' },
    config: { duration: 300 },
  })
  return transtion((style, pathname) => {
    return <animated.div key={pathname} style={style}>
      <div style={{ textAlign: 'center' }}>
       {map.current[pathname]}
      </div>
    </animated.div>
  })
}

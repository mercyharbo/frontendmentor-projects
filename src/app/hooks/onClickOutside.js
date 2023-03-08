import { useEffect, useRef } from 'react'

export default function OnClickOutside(props) {
  const ref = useRef(null)
  const { onClickOutside } = props

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClickOutside && onClickOutside()
      }
    }

    document.addEventListener('click', handleClickOutside.true)
    return () => {
      document.removeEventListener('click', handleClickOutside.true)
    }
  }, [onClickOutside])

  if (!props.show) return null

  return <main ref={ref}>{props.message}</main>
}

//

import React from 'react'
import style from './title.module.scss'

export const Title = ({ children, tagName }: any) => {
  const Tag = tagName || 'h1'
  return (
    <Tag className={style.title}>
      <div className={style['title--content']}>{children}</div>
    </Tag>
  )
}

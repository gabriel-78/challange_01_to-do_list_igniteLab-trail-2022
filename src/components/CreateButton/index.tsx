import { PlusCircle } from 'phosphor-react'
import { ButtonHTMLAttributes, FC } from 'react'

import S from './index.module.css'

const CreateButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  ...props
}) => {
  return (
    <button className={S.button} {...props}>
      Criar
      <PlusCircle size={16} />
    </button>
  )
}

export default CreateButton

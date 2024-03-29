import { Anchor } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import styles from '../styles/header.module.css'
import clsx from 'clsx'

interface IProps {
  link: string
}

export function HeaderLink({ link }: IProps) {
  return (
    <Anchor href={link} target={'_blank'} className={clsx('mt-4 flex items-center duration-100 sm:mt-0', styles.headerLink)}>
      <IconArrowLeft className={styles.headerLinkSvg} />
      <span className={'ml-1'}>{'Powrót do wątku z aktualizacją'}</span>
    </Anchor>
  )
}

import english from './en.json'
import spanish from './es.json'
import type { LangInterface } from './lang-interface'

const LANGUAGES = {
    ENGLISH: 'en',
    SPANISH: 'es'
  }
  
  export const getI18N = ({
    currentLocale = 'en'
  }: {
    currentLocale: string | undefined
  }): LangInterface  => {
    if (currentLocale === LANGUAGES.ENGLISH) return english as any
    if (currentLocale === LANGUAGES.SPANISH) return spanish as any
    return spanish as any
  }
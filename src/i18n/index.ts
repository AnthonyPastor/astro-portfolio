import english from './en.json'
import spanish from './es.json'
import type { LangInterface } from './lang-interface'
import { getYearsOfExperience } from '@/utils/getYearsOfExperience'

const LANGUAGES = {
    ENGLISH: 'en',
    SPANISH: 'es'
  }

  const withYears = (data: any, years: number) => ({
    ...data,
    home: {
      ...data.home,
      hero_strong: data.home.hero_strong.replace('{{years}}', String(years)),
    },
  })

  export const getI18N = ({
    currentLocale = 'en'
  }: {
    currentLocale: string | undefined
  }): LangInterface  => {
    const years = getYearsOfExperience()
    if (currentLocale === LANGUAGES.ENGLISH) return withYears(english, years) as any
    if (currentLocale === LANGUAGES.SPANISH) return withYears(spanish, years) as any
    return withYears(spanish, years) as any
  }
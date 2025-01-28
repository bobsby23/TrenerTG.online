import create from 'zustand'
import { persist } from 'zustand/middleware'
import en from '@/locales/en.json'
import bg from '@/locales/bg.json'

type Language = 'en' | 'bg'

type State = {
  language: Language
  translations: typeof en
  setLanguage: (language: Language) => void
}

export const useStore = create<State>()(
  persist(
    (set) => ({
      language: 'en',
      translations: en,
      setLanguage: (language) => set({ language, translations: language === 'en' ? en : bg }),
    }),
    {
      name: 'language-storage',
    }
  )
)


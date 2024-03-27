import { MouseEvent, useEffect, useRef, useState } from 'react'

interface IMediaStore {
  value: boolean
  toggle: (e: MouseEvent) => void
}

interface DarkModeConfig {
  classNameDark?: string // A className to set "dark mode". Default = "dark".
  classNameLight?: string // A className to set "light mode". Default = "light".
  element?: HTMLElement | undefined | null // The element to apply the className. Default = `document.body`.
  storageKey?: string // Specify the `localStorage` key. Default = "darkMode". set to `undefined` to disable persistent storage.
  transition?: any // Specify the `animate` when switching the mode. Only Chromium >= 111 etc.
}

const darkModeKey = 'darkMode'
export const useDarkModeInternal = (
  initialState: boolean = Boolean(localStorage.getItem(darkModeKey)),
  options: DarkModeConfig = {} as any
): IMediaStore => {
  const {
    classNameDark = 'theme-dark',
    classNameLight = 'theme-light',
    storageKey = darkModeKey,
    element = globalThis.document && document.documentElement,
    transition = !!(document as any).startViewTransition &&
    !window.matchMedia(`(prefers-reduced-motion: reduce)`).matches
      ? (document as any).startViewTransition()
      : undefined,
  } = options

  const [darkMode, setDarkMode] = useState(initialState)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const presentedDarkMode = localStorage.getItem(storageKey)

    if (presentedDarkMode) {
      setDarkMode(presentedDarkMode === 'true')
    } else {
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches)
    }
  }, [storageKey])

  useEffect(() => {
    const handler = (e: MediaQueryListEvent) => {
      const storageValue = localStorage.getItem(storageKey)
      const parseStorageValueAsBool = storageValue === 'true'
      setDarkMode(e.matches)

      // reset dark mode, follow system
      if (parseStorageValueAsBool === e.matches) {
        localStorage.removeItem(storageKey)
      }
    }

    const storageHandler = () => {
      const storageValue = localStorage.getItem(storageKey)
      // if not storage color mode, switch to follow system
      if (storageValue === undefined) {
        setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches)
      } else {
        // make multiple pages to switch to dark mode together.
        setDarkMode(storageValue === 'true')
      }
    }

    window.addEventListener('storage', storageHandler)
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handler)

    return () => {
      window.removeEventListener('storage', storageHandler)
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handler)
    }
  }, [storageKey])

  const darkModeRef = useRef(darkMode)

  useEffect(() => {
    darkModeRef.current = darkMode
  }, [darkMode])

  useEffect(() => {
    const handler = () => {
      // if set color mode follow system, del storage
      if (window.matchMedia('(prefers-color-scheme: dark)').matches === darkModeRef.current) {
        localStorage.removeItem(darkModeKey)
      }
    }
    window.addEventListener('beforeunload', handler)

    return () => {
      window.removeEventListener('beforeunload', handler)
    }
  }, [])

  useEffect(() => {
    if (typeof darkMode === 'undefined') {
      return
    }

    const $el = element!
    const setDarkModeClass = () => {
      if (darkMode) {
        $el.classList.remove(classNameLight)
        $el.classList.add(classNameDark)
      } else {
        $el.classList.remove(classNameDark)
        $el.classList.add(classNameLight)
      }
    }

    const { x, y } = mousePosition
    const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))

    if (transition) {
      transition.ready.then(() => {
        setDarkModeClass()
        if (mousePosition.x === 0) return
        const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]
        $el.animate(
          {
            clipPath: !darkMode ? clipPath : [...clipPath].reverse(),
          },
          {
            duration: 400,
            easing: 'ease-in-out',
            pseudoElement: darkMode ? '::view-transition-old(root)' : '::view-transition-new(root)',
          }
        )
      })
    } else {
      setDarkModeClass()
    }
  }, [classNameDark, classNameLight, darkMode, element])

  return {
    value: darkMode,
    toggle: (e: MouseEvent) => {
      setDarkMode((d) => {
        if (storageKey) {
          localStorage.setItem(storageKey, String(!d))
          setMousePosition({ x: e.clientX, y: e.clientY })
        }
        return !d
      })
    },
  }
}

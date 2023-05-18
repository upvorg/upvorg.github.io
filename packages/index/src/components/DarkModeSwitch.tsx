// import { Switch } from '@headlessui/react'
// import { useDarkModeInternal } from '../hooks/useDarkMode'
// import classNames from 'classnames'

// export const DarkModeSwitch = () => {
//   const { value: isDark, toggle } = useDarkModeInternal()
//   return (
//     <Switch
//       checked={isDark || false}
//       onClick={(e) => toggle(e)}
//       className={classNames(
//         `${isDark ? 'bg-accent' : 'bg-gray-200'}`,
//         ` relative inline-flex h-6 w-11 items-center rounded-full text-base dark:text-always-gray-200 text-always-gray-700 align-middle`
//       )}
//     >
//       <span className="sr-only">Switch Dark Mode</span>
//       <span
//         className={`${
//           isDark ? 'translate-x-6' : 'translate-x-1'
//         } inline-block h-4 w-4 transform rounded-full bg-white transition`}
//       />

//       {isDark ? (
//         <i className="icon-[mingcute--moon-line] translate-x-2 scale-75" />
//       ) : (
//         <i className="icon-[mingcute--sun-line] scale-75 -translate-x-3" />
//       )}
//     </Switch>
//   )
// }

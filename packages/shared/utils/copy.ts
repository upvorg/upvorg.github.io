export const copyToClipboard = (textToCopy: string) => {
  const textarea = document.createElement('textarea')
  textarea.setAttribute('readonly', 'readonly')
  textarea.value = textToCopy
  textarea.style.position = 'fixed'
  textarea.style.top = '0'
  document.body.insertBefore(textarea, document.body.childNodes[0])
  textarea.focus()
  textarea.setSelectionRange(0, textToCopy.length) // 兼容 iOS select() 方法不可用问题。最大复制长度 9999
  if (document.execCommand('copy')) {
    document.execCommand('copy')
    document.body.removeChild(textarea)
    return 0
  }
  document.body.removeChild(textarea)
  return -1
}

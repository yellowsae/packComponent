import { ElMessage } from 'element-plus';

// 复制文本的功能
export const useCopy = (text: string) => {
  // 创建一个input 框
  const input = document.createElement('input')
  // 给value 复制
  input.value = text
  // 追加到body 里面去
  document.body.appendChild(input)
  // 选择输入框的操作
  input.select()
  // 执行复制操作
  document.execCommand('Copy')
  // 执行删除 input 
  document.body.removeChild(input)
  // 提示用户
  ElMessage.success('复制成功')
}

// 将驼峰命名 转为 - 的写法
export const toLine = (value: string) => {
  return value.replace(/(A-Z)g/, '-$1').toLocaleLowerCase()
}

// 配列で来たものが正しいかどうかをはんていする
type ValidationJudgment = {
  CollectList: { title: string; correct: string; type: 'text' }[]
  FormList: string[]
}
export const validationJudgment = ({
  CollectList,
  FormList,
}: ValidationJudgment): boolean => {
  const List = CollectList.map((CollectList) => {
    const { correct } = CollectList
    return correct
  })

  if (JSON.stringify(List) == JSON.stringify(FormList)) {
    return true
  } else {
    return false
  }
}

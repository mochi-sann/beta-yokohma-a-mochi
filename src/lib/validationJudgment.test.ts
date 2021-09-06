import { validationJudgment } from './validationJudgment'
describe('問題があっていればtrue 間違っていればfalseを返す', () => {
  test('あっている', () => {
    expect(
      validationJudgment({
        CollectList: [
          {
            correct: 'せいかいせいかい',
            type: 'text',
            title: 'タイトルタイトル',
          },
          {
            correct: 'せいかいせいかい',
            type: 'text',
            title: 'タイトルタイトル',
          },
          {
            correct: 'せいかいせいかい',
            type: 'text',
            title: 'タイトルタイトル',
          },
        ],
        FormList: ['せいかいせいかい', 'せいかいせいかい', 'せいかいせいかい'],
      })
    ).toBe(true)
  })
  test('間違っている', () => {
    expect(
      validationJudgment({
        CollectList: [
          {
            correct: 'せいかいせいかい',
            type: 'text',
            title: 'タイトルタイトル',
          },
          {
            correct: 'せいかいせいかい',
            type: 'text',
            title: 'タイトルタイトル',
          },
          {
            correct: 'せいかいせいかい',
            type: 'text',
            title: 'タイトルタイトル',
          },
        ],
        FormList: ['aaaaaaaaaaaaa', 'aaaaaaaaaaaaa', 'aaaaaaaaaaaaa'],
      })
    ).toBe(false)
  })
  test('あっている2', () => {
    expect(
      validationJudgment({
        CollectList: [
          {
            correct: 'せいかいせいかい',
            type: 'text',
            title: 'タイトルタイトル',
          },
          {
            correct: 'せいかいせいかい',
            type: 'text',
            title: 'タイトルタイトル',
          },
          {
            correct: 'せいかいせいかい',
            type: 'text',
            title: 'タイトルタイトル',
          },
          {
            correct: 'せいかいせいかい',
            type: 'text',
            title: 'タイトルタイトル',
          },
          {
            correct: 'せいかいせいかい',
            type: 'text',
            title: 'タイトルタイトル',
          },
          {
            correct: 'せいかいせいかい',
            type: 'text',
            title: 'タイトルタイトル',
          },
          {
            correct: 'せいかいせいかい',
            type: 'text',
            title: 'タイトルタイトル',
          },
          {
            correct: 'せいかいせいかい',
            type: 'text',
            title: 'タイトルタイトル',
          },
          {
            correct: 'せいかいせいかい',
            type: 'text',
            title: 'タイトルタイトル',
          },
          {
            correct: 'せいかいせいかい',
            type: 'text',
            title: 'タイトルタイトル',
          },
          {
            correct: 'せいかいせいかい',
            type: 'text',
            title: 'タイトルタイトル',
          },
          {
            correct: 'せいかいせいかい',
            type: 'text',
            title: 'タイトルタイトル',
          },
        ],
        FormList: [
          'せいかいせいかい',
          'せいかいせいかい',
          'せいかいせいかい',
          'せいかいせいかい',
          'せいかいせいかい',
          'せいかいせいかい',

          'せいかいせいかい',
          'せいかいせいかい',
          'せいかいせいかい',
        ],
      })
    ).toBe(false)
  })
})

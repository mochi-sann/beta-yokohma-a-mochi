/**
 * 画像のpathを返す
 * @param path 画像のpath
 * @param IsNotUseEnv 画像の環境変数の BASE_PATH を使うかどうか
 * @returns 画像のパス
 */
const ImagePath = (path: string, IsNotUseEnv?: boolean): string => {
  if (!IsNotUseEnv) {
    return (process.env.BASE_PATH || '') + path
  } else {
    return path
  }
}
export default ImagePath

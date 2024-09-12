/* eslint-disable no-undef */
import dotenv from 'dotenv'
import { join, dirname } from 'path'
import OSS from 'ali-oss'

const __dirname = dirname(new URL(import.meta.url).pathname)

dotenv.config({
  path: join(__dirname, '../.env.local'),
})

const client = new OSS({
  accessKeyId: process.env.OSS_ACCESS_KEY_ID!,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET!,
  region: 'oss-cn-shenzhen',
  bucket: 'jasonlidevelop-bucket',
})

const filePath = 'yourfilepath'

let checkpoint
async function resumeUpload() {
  // 重试五次。
  for (let i = 0; i < 5; i++) {
    try {
      const result = await client.multipartUpload('object-name', filePath, {
        checkpoint,
        async progress(percentage, cpt) {
          checkpoint = cpt
        },
      })
      console.log(result)
      break // 跳出当前循环。
    } catch (e) {
      console.log(e)
    }
  }
}

resumeUpload()

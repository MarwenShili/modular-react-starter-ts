import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const sizes = [192, 512]
const inputFile = path.join(__dirname, 'public', 'ar-flag.png')

async function generateIcons() {
  for (const size of sizes) {
    await sharp(inputFile)
      .resize(size, size)
      .toFile(path.join(__dirname, 'public', `icon-${size}x${size}.png`))
  }
}

generateIcons().catch(console.error)

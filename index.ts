import path from "path"
import fs from "fs"

const postsDir = path.resolve(process.cwd(), "blog")
const postsSlugs: string[] = fs.readdirSync(postsDir)

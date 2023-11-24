const path = require("path")
const withMDX = require("@next/mdx")({
	extension: /\.mdx$/,
})

module.exports = {
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	experimental: {
		swcPlugins: [["next-superjson-plugin", {}]],
	},
}

module.exports = withMDX({
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
})

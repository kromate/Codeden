import { definePlugin } from '@/plugins/index';




export const registerComponents = definePlugin(async ({ app }) => {
	const contexts = [
		require.context('../components/core', true, /\.vue$/),
		require.context('../layouts/', true, /\.vue$/)
	]

	contexts.forEach((context) => {
		context.keys().map(async (fileName) => {
			const componentConfig = context(fileName)

			const componentName = fileName.split('/').pop()?.replace(/\.\w+$/, '') ?? ''

			app.component(componentName, componentConfig.default || componentConfig)
		})
	})
})

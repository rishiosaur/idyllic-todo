import { IdyllicCompiler } from '@idyllic/compiler'
import { IdyllicServer } from '@idyllic/server'

;(async () => {
	const c = await (await IdyllicCompiler.fromFile('spec.idl')).compile()
	const server = new IdyllicServer(c)
	server.start(3000, () => {
		console.log('Idyllic server started!')
	})
})()

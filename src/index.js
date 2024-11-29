import Forward from '@mpietrucha/forward'
import * as Type from '@mpietrucha/utils/type'

export * from '@mpietrucha/utils/type'

export const not = () => Forward.negate(Type)

export default Type

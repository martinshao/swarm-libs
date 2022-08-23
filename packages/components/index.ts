import hookType, { hookLane, renderWithHooks } from "@swift/hooks";

const hooks = {
    name: 'hook'
}

const man = {
    name: 'xiaoming',
    age: 12,
}

console.info(hookType, hookLane, man)

renderWithHooks()

export default hooks
import hookType, { hookLane, renderWithHooks, ReactCurrentDispatcher } from "@swarm/hooks";

const hooks = {
    name: 'hook'
}

const man = {
    name: 'xiaoming',
    age: 12,
}

console.info(hookType, hookLane, man)

renderWithHooks()

console.info(ReactCurrentDispatcher)

export default hooks
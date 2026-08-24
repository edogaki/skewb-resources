import preloadShortSolutionStates from "#/utils/scramble/preloadShortSolutionStates";

const states = await preloadShortSolutionStates();
console.log(states);

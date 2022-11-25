export default {
  registerCoach(state, paylod) {
    state.coaches.push(paylod);
  },
  setCoaches(state, payload) {
    state.coaches = payload;
  },
};

export default {
  coaches(state) {
    return state.coaches;
  },
  hasCoaches() {
    return state.coaches && state.coaches.length > 0;
  },
};

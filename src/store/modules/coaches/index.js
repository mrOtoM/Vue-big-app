import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      coaches: [
        {
          id: 'c1',
          firstName: 'Oto',
          lastName: 'Machala',
          areas: ['frontend', 'backend', 'career'],
          description:
            "I'm Oto and I've worked as a freelance web developer one year.",
          hourlyRate: 20,
        },
        {
          id: 'c2',
          firstName: 'Peter',
          lastName: 'Sveter',
          areas: ['frontend', 'career'],
          description:
            'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 30,
        },
      ],
    };
  },
  mutations,
  getters,
  actions,
};

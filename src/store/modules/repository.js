import Vue from 'vue';

/*
 * State is like collections of variables (like data on each route)
 */
const state = {
  repositoryList: [],
  repositoryListFE: [],
  repositoryListBE: []
}

/*
* Getters is 'computed' property without having to set value to state
*/
const getters = {
  /*
  * 1st Parameter : state : Getting variable from THIS state
  * 2nd Parameter : getters : Getting value from another getters function
  * 3rd Parameter : rootState : Getting value from ANOTHER state
  */
  getRepositoryList: () => state.repositoryList,
  getRepositoryListFE: () => state.repositoryListFE,
  getRepositoryListBE: () => state.repositoryListBE,
  // getCookies: (state) => {
  //     return state.sessionCookies;
  // }
}

/*
* Actions is, collection of function that do something, and can do AJAX call etc.
* Action returns promise
*/
const actions = {
  /*
  * 1st Parameter : commit : Doing MUTATIONS to change state value
  * 1st Parameter : state : Getting variable from THIS state
  * 2nd Parameter : anything : Anything can be passed here when calling the action function
  */
  async getRepositories({ commit, state, rootState }, selectedTribe) {
    let repoResponseFE = await Vue.axios.get(`https://api.github.com/search/repositories`, {
      params: {
        access_token: `${rootState.auth.accessToken}`,
        q: `topic:${selectedTribe} frontend`,
        type: 'private'
      }
    })
    .catch(err => {
      return console.error(err);
    });

    let repoResponseBE = await Vue.axios.get(`https://api.github.com/search/repositories`, {
      params: {
        access_token: `${rootState.auth.accessToken}`,
        q: `topic:${selectedTribe} backend`,
        type: 'private'
      }
    })
    .catch(err => {
      return console.error(err);
    });

    commit('setRepositoryListFE', repoResponseFE.data.items);
    commit('setRepositoryListBE', repoResponseBE.data.items);
    commit('setRepositoryList', [...repoResponseFE.data.items, ...repoResponseBE.data.items]);
  }
}

/*
* Mutation is, collection of function change the state variables
* Mutation MUST be synchronous, so you cannot do AJAX here, do it on action and do mutation instead
* Basically, mutation does not return any value since it is doing something
*/
const mutations = {

  /*
   *  1st Parameter : state : Getting variable from THIS state
   *  2nd Parameter : anything : Anything can be passed here when calling the mutation function
   */

  setRepositoryListFE(state, value) {
    state.repositoryListFE = value;
  },

  setRepositoryListBE(state, value) {
    state.repositoryListBE = value;
  },

  setRepositoryList(state, value) {
    state.repositoryList = value;
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

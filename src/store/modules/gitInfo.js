import Vue from 'vue';

let generateChartObject = function(chartResponse) {
  return {
    labels: chartResponse.sort((a, b) => a.year - b.year).map(instance => instance.year),
    datasets: [
      {
        label: 'GitHub Contributions',
        backgroundColor: '#f87979',
        data: chartResponse.sort((a, b) => a.year - b.year).map(instance => instance.total),
      }
    ]
  };
};

/*
 * State is like collections of variables (like data on each route)
 */
const state = {
  myGitInfo: {},
  myContributions: [],
  chartDataLoaded: false,
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
  getMyGitInfo: () => state.myGitInfo,
  getMyContributions: () => state.myContributions,
  getChartDataLoaded: () => state.chartDataLoaded,
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
  async getMyContributions({ commit, state, rootState }, selectedTribe) {

    let contributionsResponse = await Vue.axios.get(`https://github-contributions-api.now.sh/v1/paskalouis`)
    .catch(err => {
      return console.error(err);
    });

    commit('setMyContributions', generateChartObject(contributionsResponse.data.years));
    // commit('setChartDataLoaded', true);

    // let repoResponseBE = await Vue.axios.get(`https://api.github.com/users/paskalouis`, {
    //   params: {
    //     access_token: `bf3ce24d0a7a00be1da480fb2c4bad9663ec4739`,
    //   }
    // })
    // .catch(err => {
    //   return console.error(err);
    // });

    // let responseMyGitInfo = await Vue.axios({
    //   method: "POST",
    //   url: "https://api.github.com/graphql",
    //   params: {
    //     access_token: 'bf3ce24d0a7a00be1da480fb2c4bad9663ec4739'
    //   },
    //   data: {
    //       query: `
    //           {
    //             user(login:"paskalouis") {
    //                 name
    //                 avatarUrl
    //                 bioHTML
    //                 companyHTML
    //                 contributionsCollection {
    //                   totalRepositoryContributions
    //                   totalRepositoriesWithContributedCommits
    //                   totalIssueContributions
    //                   totalPullRequestContributions
    //                   totalCommitContributions
    //                 }
    //             }
    //           }
    //       `
    //   }
    // })
    // .catch(err => {
    //   return console.error(err);
    // });

    // commit('setMyGitInfo', repoResponseFE.data.items);
  },

  setChartDataLoaded({ commit }, value) {
    commit('setChartDataLoaded', value);
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

  setMyGitInfo(state, value) {
    state.myGitInfo = value;
  },

  setMyContributions(state, value) {
    state.myContributions = value;
  },

  setChartDataLoaded(state, value) {
    state.chartDataLoaded = value;
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

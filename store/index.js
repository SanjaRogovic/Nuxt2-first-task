export const state = () => ({
    cards: [],
  });
  
  export const mutations = {
    addCard(state, card) {
      state.cards.push(card);
    },
  };
  
  export const getters = {
    getCardsStartingWithM: (state) => {
      return state.cards.filter((card) => card.serviceName.toLowerCase().startsWith('m'));
    },
  };
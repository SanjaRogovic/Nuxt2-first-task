export const state = () => ({
    cards: [], //declare an empty array of card objects
  });
  
  export const mutations = {
    addCard(state, card) {
      state.cards.push(card); //add a new card to the array
    },
  };
  
  export const getters = {
    cardsStartingWithM: (state) => {
      return state.cards.filter((card) => card.serviceName.toLowerCase().startsWith('m'));  //filter the cards whose service name starts with "m"
    },
  };
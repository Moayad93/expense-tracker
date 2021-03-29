export default function AppReducer(state, action) {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        // dispatched action with a type and payload
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      };
    default:
      return state;
  }
}

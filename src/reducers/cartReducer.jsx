export const cartInitialState = [];

export const CART_ACTIONS_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
};

export const Cartreducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;

  switch (actionType) {
    case CART_ACTIONS_TYPES.ADD_TO_CART: {
      const { id } = actionPayload;
      const productInCartIndex = state.findIndex((item) => item.id === id);

      if (productInCartIndex >= 0) {
        const newCartState = structuredClone(newCartState);
        newCartState[productInCartIndex].quantity += 1;
        return newCartState;
      }

      return [
        ...state,
        {
          ...actionPayload,
          quantity: 1,
        },
      ];
    }

    case CART_ACTIONS_TYPES.REMOVE_FROM_CART: {
      const { id } = actionPayload;
      return state.filter((item) => item.id !== id);
    }

    case CART_ACTIONS_TYPES.CLEAR_CART: {
      return cartInitialState;
    }
  }
};

const UPDATE_CART_BY_ACTION = {
  [CART_ACTIONS_TYPES.ADD_TO_CART]: (state, action) => {
    const { id } = action.payload;
    const productInCartIndex = state.findIndex((item) => item.id === id);

    if (productInCartIndex >= 0) {
      const newCartState = structuredClone(newCartState);
      newCartState[productInCartIndex].quantity += 1;
      return newCartState;
    }

    return [
      ...state,
      {
        ...action.payload,
        quantity: 1,
      },
    ];
  },
  [CART_ACTIONS_TYPES.REMOVE_FROM_CART]: (state, action) => {
    const { id } = action.payload;
    return state.filter((item) => item.id !== id);
  },
  [CART_ACTIONS_TYPES.CLEAR_CART]: () => {
    return cartInitialState;
  },
};

export const WITHOUT_SWITCH_CART_REDUCER = (state, action) => {
  const { type: actionType } = action;

  const updateState = UPDATE_CART_BY_ACTION[actionType];

  return updateState ? updateState(state, action) : state;
};

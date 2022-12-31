import { createReducer } from '@reduxjs/toolkit';
import {
  GET_CONFIG,
  GET_CONFIG_SUCCEEDED,
  GET_ALL_CONFIG,
  GET_ALL_CONFIG_SUCCEEDED,
  POST_ITEM_SUCCEEDED,
  POST_ITEM_FAILED,
  DELETE_ITEM_FAILED,
  DELETE_ITEM_SUCCEEDED,
  GET_ITEMS,
  GET_ITEMS_SUCCEEDED,
  GET_SINGLE_ITEM,
  GET_SINGLE_ITEM_SUCCEEDED,
  PUT_ITEM_SUCCEEDED,
  PUT_ITEM_FAILED,
  GET_RELATION,
  GET_RELATION_SUCCEEDED,
  POST_RELATION,
  POST_RELATION_SUCCEEDED,
  POST_RELATION_FAILED,
  DELETE_RELATION,
  DELETE_RELATION_SUCCEEDED,
  DELETE_RELATION_FAILED,
  GET_REFERENCE,
  GET_REFERENCE_SUCCEEDED,
  POST_REFERENCE,
  POST_REFERENCE_SUCCEEDED,
  POST_REFERENCE_FAILED,
  DELETE_REFERENCE,
  DELETE_REFERENCE_SUCCEEDED,
  DELETE_REFERENCE_FAILED,
} from '../actions/itemActions';

import { ItemReducer } from '../../models/itemReducer';

const initialState = {
  isConfigReceived: false,
  error: '',
};
const itemReducer = createReducer(initialState, (builder) => {
  builder.addCase(GET_CONFIG, (state, action) => {
    const key = action.payload.type || 'unknown';
    state[key] = new ItemReducer(
      Object.assign(
        {},
        {
          config: action.payload.Item,
          isConfigReceived: false,
        }
      )
    );
  });
  builder.addCase(GET_CONFIG_SUCCEEDED, (state, action) => {
    const key = action.payload.type || 'unknown';
    state[key] = new ItemReducer(
      Object.assign({}, state[key] && state[key].data(), {
        config: action.payload.Item,
        isConfigReceived: true,
      })
    );
  });

  builder.addCase(GET_ALL_CONFIG, (state, action) => {
    state.isConfigReceived = false;
  });
  builder.addCase(GET_ALL_CONFIG_SUCCEEDED, (state, action) => {
    const { Items } = action.payload;
    state.isConfigReceived = true;
    for (let k of Object.keys(Items)) {
      state[k] = new ItemReducer(
        Object.assign({}, state[k] && state[k].data(), {
          config: Items[k],
          isConfigReceived: true,
        })
      );
    }
  });

  builder.addCase(GET_ITEMS, (state, action) => {
    const key = action.payload.type || 'unknown';
    state[key] = new ItemReducer(
      Object.assign({}, state[key] && state[key].data(), {
        Items: [],
        isReceived: false,
      })
    );
  });
  builder.addCase(GET_ITEMS_SUCCEEDED, (state, action) => {
    const key = action.payload.type || 'unknown';
    state[key] = new ItemReducer(
      Object.assign({}, state[key] && state[key].data(), {
        Items: action.payload.Items[key],
        isReceived: true,
      })
    );
  });

  builder.addCase(GET_SINGLE_ITEM, (state, action) => {
    const key = action.payload.type || 'unknown';
    state[key] = new ItemReducer(
      Object.assign({}, state[key] && state[key].data(), {
        Items: null,
        isReceived: false,
      })
    );
  });
  builder.addCase(GET_SINGLE_ITEM_SUCCEEDED, (state, action) => {
    const key = action.payload.type || 'unknown';
    state[key] = new ItemReducer(
      Object.assign({}, state[key] && state[key].data(), {
        status: 'RECEIVED',
        Item: action.payload.Item,
        isReceived: true,
      })
    );
  });

  builder.addCase(POST_ITEM_SUCCEEDED, (state) => {
    state.status = 'POSTED';
  });
  builder.addCase(POST_ITEM_FAILED, (state, action) => {
    state.error = action.payload.errorMessage;
    state.status = 'ERROR';
  });

  builder.addCase(DELETE_ITEM_SUCCEEDED, (state) => {
    state.status = 'DELETED';
  });
  builder.addCase(DELETE_ITEM_FAILED, (state, action) => {
    state.status = 'ERROR';
    state.error = action.payload.errorMessage;
  });

  builder.addCase(PUT_ITEM_SUCCEEDED, (state) => {
    state.status = 'UPDATED';
  });
  builder.addCase(PUT_ITEM_FAILED, (state, action) => {
    state.status = 'ERROR';
    state.error = action.payload.errorMessage;
  });

  //関連アイテム
  builder.addCase(GET_RELATION, (state, action) => {
    const key = action.payload.type || 'unknown';
    state[key] = new ItemReducer(
      Object.assign({}, state[key] && state[key].data(), {
        isRelationReceived: false,
        relationItems: [],
      })
    );
  });
  builder.addCase(GET_RELATION_SUCCEEDED, (state, action) => {
    const key = action.payload.type || 'unknown';
    state[key] = new ItemReducer(
      Object.assign({}, state[key] && state[key].data(), {
        isRelationReceived: true,
        relationItems: action.payload.Items,
      })
    );
  });

  builder.addCase(POST_RELATION_SUCCEEDED, (state, action) => {
    state.status = 'POST_RELATION_SUCCEEDED';
  });
  builder.addCase(POST_RELATION_FAILED, (state, action) => {
    state.status = 'ERROR';
    state.error = action.payload.errorMessage;
  });

  builder.addCase(DELETE_RELATION_SUCCEEDED, (state, action) => {
    state.status = 'DELETE_RELATION_SUCCEEDED';
  });
  builder.addCase(DELETE_RELATION_FAILED, (state, action) => {
    state.status = 'ERROR';
    state.error = action.payload.errorMessage;
  });

  //参照アイテム
  builder.addCase(GET_REFERENCE, (state, action) => {
    const key = action.payload.type || 'unknown';
    state[key] = new ItemReducer(
      Object.assign({}, state[key] && state[key].data(), {
        isReferenceReceived: false,
        referenceItems: action.payload.Items,
      })
    );
  });
  builder.addCase(GET_REFERENCE_SUCCEEDED, (state, action) => {
    const key = action.payload.type || 'unknown';
    state[key] = new ItemReducer(
      Object.assign({}, state[key] && state[key].data(), {
        isReferenceReceived: true,
        referenceItems: action.payload.Items,
      })
    );
    //state[key].ReferenceItems = action.payload.Items.map(i => new Models[key](i))
  });

  builder.addCase(POST_REFERENCE_SUCCEEDED, (state, action) => {
    state.status = 'POST_REFERENCE_SUCCEEDED';
  });
  builder.addCase(POST_REFERENCE_FAILED, (state, action) => {
    state.status = 'ERROR';
    state.error = action.payload.errorMessage;
  });

  builder.addCase(DELETE_REFERENCE_SUCCEEDED, (state, action) => {
    state.status = 'DELETE_REFERENCE_SUCCEEDED';
  });
  builder.addCase(DELETE_REFERENCE_FAILED, (state, action) => {
    state.status = 'ERROR';
    state.error = action.payload.errorMessage;
  });
});

export default itemReducer;
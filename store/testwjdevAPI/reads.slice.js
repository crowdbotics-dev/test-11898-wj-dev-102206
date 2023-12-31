import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_reads_list = createAsyncThunk(
  "reads/api_v1_reads_list",
  async payload => {
    const response = await apiService.api_v1_reads_list(payload)
    return response.data
  }
)
export const api_v1_reads_create = createAsyncThunk(
  "reads/api_v1_reads_create",
  async payload => {
    const response = await apiService.api_v1_reads_create(payload)
    return response.data
  }
)
export const api_v1_reads_retrieve = createAsyncThunk(
  "reads/api_v1_reads_retrieve",
  async payload => {
    const response = await apiService.api_v1_reads_retrieve(payload)
    return response.data
  }
)
export const api_v1_reads_update = createAsyncThunk(
  "reads/api_v1_reads_update",
  async payload => {
    const response = await apiService.api_v1_reads_update(payload)
    return response.data
  }
)
export const api_v1_reads_partial_update = createAsyncThunk(
  "reads/api_v1_reads_partial_update",
  async payload => {
    const response = await apiService.api_v1_reads_partial_update(payload)
    return response.data
  }
)
export const api_v1_reads_destroy = createAsyncThunk(
  "reads/api_v1_reads_destroy",
  async payload => {
    const response = await apiService.api_v1_reads_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const readsSlice = createSlice({
  name: "reads",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_reads_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_reads_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_reads_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_reads_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_reads_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_reads_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_reads_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_reads_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_reads_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_reads_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_reads_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_reads_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_reads_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_reads_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_reads_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_reads_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_reads_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_reads_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_reads_list,
  api_v1_reads_create,
  api_v1_reads_retrieve,
  api_v1_reads_update,
  api_v1_reads_partial_update,
  api_v1_reads_destroy,
  slice: readsSlice
}

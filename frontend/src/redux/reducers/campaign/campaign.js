// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { CampaignService } from "src/services";

const initialState = {
  campaigns: [],
  params: {
    limit: 10,
    offset: 0,
  },
  meta: {
    total: 0,
    limit: 0,
    offset: 0,
  },
};

const slice = createSlice({
  initialState,
  name: "Campaign",
  reducers: {
    setParams(state, action) {
      Object.assign(state, {
        ...state,
        params: action.payload,
      });
    },
    setMeta(state, action) {
      Object.assign(state, {
        ...state,
        meta: action.payload,
      });
    },
    setCampaigns(state, action) {
      Object.assign(state, {
        ...state,
        campaigns: action.payload,
      });
    },
  },
});

const { setParams, setCampaigns, setMeta } = slice.actions;

export const useCampaignDispatcher = () => {
  const { params, campaigns, meta } = useSelector((state) => state.campaign);
  const dispatch = useDispatch();

  // fetchCampaigns from API
  const fetchCampaigns = async () => {
    try {
      const {
        data: { data, meta },
      } = await CampaignService.loadCampaign(params);
      dispatch(setCampaigns(data));
      dispatch(setMeta(meta));
    } catch (error) {
      console.log("error > ", error);
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, [params]);

  return {
    meta,
    params,
    campaigns,
  };
};

export default slice.reducer;

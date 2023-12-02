import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { AppDispatch } from "@app/store/store";

export const useTypedDispatch = (): Dispatch => useDispatch<AppDispatch>();

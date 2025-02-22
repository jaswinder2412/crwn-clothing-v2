import { createAction } from "../../utils/reducers/reducers"

import { CATEGORIES_ACTION_TYPE } from "./category.types"

export const setCategoriesMap = (categoriesMap) => createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES_MAP, categoriesMap)
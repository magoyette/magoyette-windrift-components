import undoable from 'redux-undo'
import cloneDeep from 'lodash.clonedeep'

import {
    Toc, IncrementSectionType, INCREMENT_SECTION,
    COUNT_SECTION, CountSectionType, TocItem, SHOW_NEXT_CHAPTER, ShowNextChapterType
} from 'core/types'

import { getChapter } from 'core/util'

const toc = (state: Toc = null,
    action: IncrementSectionType | CountSectionType | ShowNextChapterType): Toc => {
    let item: TocItem

    switch (action.type) {
        case INCREMENT_SECTION:
            const incState = cloneDeep(state)
            item = getChapter(incState, action.item.filename)
            item.bookmark = Math.min(item.bookmark + 1, item.sectionCount)
            return incState

        case COUNT_SECTION:
            const cntState = cloneDeep(state)
            item = getChapter(cntState, action.item.filename)

            item.sectionCount = action.count
            return cntState

        case SHOW_NEXT_CHAPTER:
            // Set the item after this one to visible
            const chptState = cloneDeep(state)
            const items = Object.values(chptState)

            // Find the item with this filename
            item = getChapter(chptState, action.item.filename)
            const index = items.indexOf(item)
            if (index < items.length - 1) { // Ensure there are more chapters
                items[index + 1].visible = true
            }
            return chptState

        default:
            return state
    }
}

export default undoable(toc)

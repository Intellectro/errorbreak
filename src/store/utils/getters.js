const showCurrentNav = state => {
    return state.currentNav;
}

const cmDataHandler = state => {
    return state.CMdata;
}

const borderHandler = state => {
    return state.borderHandler;
}

const faqHandler = state => {
    return state.faqData;
}

const cardsDataHandler = state => {
    return state.cardsData;
}

export {showCurrentNav, cmDataHandler, borderHandler, faqHandler, cardsDataHandler}
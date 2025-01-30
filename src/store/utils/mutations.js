const handleNavSwitch = (state, elem) => {
    if (elem || elem instanceof HTMLDivElement) {
        state.currentNav = elem;
    }
}

export {handleNavSwitch};
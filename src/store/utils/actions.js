const navHandler = ({commit}, elem) => {
    if (elem) {
        commit("handleNavSwitch", elem);
    }
}

export {navHandler};
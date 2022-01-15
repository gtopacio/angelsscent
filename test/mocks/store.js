const commit = jest.fn();

let state = {
    user: { uid: "TEMPUID" },
    isAdmin: true
}

export { commit, state }
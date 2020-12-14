interface Memory {
    id: number;
    title: string;
    image: string;
    description: string;
}

interface MemoriesState {
    memories: Array<Memory>;
}

const state: MemoriesState = {
    memories: [
        { id: 1, title: "New York", image: "", description: "Visit to the Big Apple in the heat of summer"},
        { id: 2, title: "Canada", image: "", description: "Travel through British Columbia and Alberta in winter"},
        { id: 3, title: "Egypt", image: "", description: "Endure the desert heat to see temples and pyramids"},
        { id: 4, title: "Cambodia", image: "", description: "See the culture and visit the historic sites"},
    ]
}

// getters
function memories(state: MemoriesState) {
    return state.memories;
}

const getters = {
    memories
}

const mutations = {}

const actions = {}

export default {
    state,
    getters,
    mutations,
    actions
}
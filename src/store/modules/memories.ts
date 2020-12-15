import { ActionContext } from 'vuex';
import Memory from "@/interfaces/Memory";

interface MemoriesState {
    memories: Array<Memory>;
}

const state: MemoriesState = {
    memories: [
        { id: 1, title: "New York", image: "https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg", description: "Visit to the Big Apple in the heat of summer"},
        { id: 2, title: "Canada", image: "https://pix10.agoda.net/geo/country/100/3_100_canada_02.jpg?s=1920x", description: "Travel through British Columbia and Alberta in winter"},
        { id: 3, title: "Egypt", image: "https://www.planetware.com/wpimages/2020/02/egypt-in-pictures-beautiful-places-to-photograph-abu-simbel-temples.jpg", description: "Endure the desert heat to see temples and pyramids"},
        { id: 4, title: "Cambodia", image: "https://cdn.britannica.com/24/77424-050-4FF80B58/Angkor-Wat-Cambodia.jpg", description: "See the culture and visit the historic sites"},
    ]
}

// getters
function memories(state: MemoriesState): Memory[] {
    return state.memories;
}

function memory(state: MemoriesState) {
    return (memoryId: number) => {
        return state.memories.find(m => m.id === memoryId);
    }
}

const getters = {
    memories,
    memory
}

function addMemory(state: MemoriesState, memoryData: Memory) {
    const newMemory: Memory = {
        id: state.memories.length + 1,
        title: memoryData.title,
        description: memoryData.description,
        image: memoryData.image
    };

    state.memories.unshift(newMemory);
}

const mutations = {
    addMemory
}

function createMemory(context: ActionContext<unknown, unknown>, memoryData: Memory) {
    context.commit('addMemory', memoryData);
}

const actions = {
    createMemory
}

export default {
    state,
    getters,
    mutations,
    actions
}
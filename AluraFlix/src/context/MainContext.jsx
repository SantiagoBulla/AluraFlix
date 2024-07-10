import { createContext, useEffect, useReducer, useState } from "react";

export const GlobalContext = createContext(); // crear el contexto

const initialState = {
    videos: [],
    categories: [],
    selectedVideo: {},
    editedVideo: {},
    openModal: false
}

const reducers = (state, action) => {
    switch (action.type) {
        case 'SET_VIDEOS':
            return { ...state, videos: action.payload, selectedVideo: { ...action.payload[0] } }
        case 'UPDATE_VIDEOS':
            return { ...state, videos: action.payload }
        case 'SET_CATEGORIES':
            return {
                ...state,
                categories: action.payload,
                selectedVideo: { ...state.selectedVideo, color: action.payload[0].color, category: action.payload[0].title }
            }
        case 'SET_SELECTED_VIDEO':
            return { ...state, selectedVideo: { ...action.payload, color: state.categories[action.payload.category].color, category: state.categories[action.payload.category].title } }
        case 'MODAL_STATE':
            let actualSelectedVideo = state.selectedVideo;
            if (state.selectedVideo.id === action.payload.id) {
                actualSelectedVideo = {
                    ...action.payload,
                    color: state.categories[action.payload.category].color,
                    category: state.categories[action.payload.category].title
                }
            }
            return { ...state, openModal: !state.openModal, selectedVideo: actualSelectedVideo, editedVideo: { ...action.payload } }
        case 'DELETE_VIDEO':
            let bannerVideo = state.selectedVideo;
            if (state.selectedVideo.id == action.payload) {
                bannerVideo = {
                    ...state.videos[0],
                    color: state.categories[state.videos[0].category].color,
                    category: state.categories[state.videos[0].category].title
                }
            }
            return { ...state, selectedVideo: bannerVideo }
        default:
            return state;
    }
};

const MainContext = ({ children }) => {

    const [state, dispatch] = useReducer(reducers, initialState)

    useEffect(() => {

        const getData = async (url, type) => {
            const response = await fetch(url);
            const data = await response.json();
            dispatch({ type: type, payload: data })
        }

        getData('http://localhost:3000/videos', 'SET_VIDEOS');
        setTimeout(() => getData('http://localhost:3000/categories', 'SET_CATEGORIES'), 3000);

    }, [])


    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default MainContext
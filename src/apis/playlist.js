import axiosInstance from '../config/axios'

export const getListTracksByUserID = async (user_id) => {
  const response = await axiosInstance.get(`/playlist/user/${user_id}/playlists`)
  return response.data
}

export const getListTracksByPlaylistID = async (playlist_id) => {
  const response = await axiosInstance.get(`/playlist/${playlist_id}/tracks`)
  return response.data
}
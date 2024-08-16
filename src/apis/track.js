import axiosInstance from '../config/axios'

export const getListTracks = async () => {
  const response = await axiosInstance.get(`/track/list`)
  return response.data
}
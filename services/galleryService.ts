import api from "@/lib/api";

export const getGallery = async () => {
  const res = await api.get("/gallery");

  return res.data;
};

export const deleteGallery = async (
  id: string,
  token: string
) => {
  const res = await api.delete(
    `/gallery/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};
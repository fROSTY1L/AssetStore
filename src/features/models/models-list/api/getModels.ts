import type { ModelsResponse } from "../types";
import { apiClient } from "../../../shared/api/client";

interface GetModelsParams {
  page: number;
  search: string;
}

export const getModels = async ({
  page,
  search
}: GetModelsParams): Promise<ModelsResponse> => {
  const queryParams = new URLSearchParams();
  queryParams.append('page', page.toString());
  
  if (search) {
    queryParams.append('search', search);
  }

  const response = await apiClient.get(`/models/verified?${queryParams.toString()}`);
  return response.data;
}
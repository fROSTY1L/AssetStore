import axios from 'axios';

// Типы для данных модели
export interface ModelCategory {
  id: number;
  name: string;
}

export interface ModelTag {
  id: number;
  name: string;
}

export interface Model {
  id: number;
  name: string;
  slug: string;
  price: string;
  preview_image: string | null;
  model_file_url: string | null;
  is_featured: boolean;
  created_at: string;
  Categories: ModelCategory[];
  Tags: ModelTag[];
}

export interface ModelsResponse {
  total: number;
  page: number;
  pages: number;
  models: Model[];
}

// Конфигурация API
const API_BASE_URL = 'http://localhost:3000/api';
const MODELS_ENDPOINT = '/models';

/**
 * Функция для получения списка моделей с сервера
 * @param page Номер страницы (по умолчанию 1)
 * @param limit Количество моделей на странице
 * @param featuredOnly Только избранные модели
 * @returns Promise с ответом сервера
 */
export const getModels = async (
  page: number = 1,
  limit?: number,
  featuredOnly?: boolean
): Promise<ModelsResponse> => {
  try {
    const params = new URLSearchParams();
    params.append('page', page.toString());
    
    if (limit) params.append('limit', limit.toString());
    if (featuredOnly) params.append('is_featured', 'true');

    const response = await axios.get<ModelsResponse>(
      `${API_BASE_URL}${MODELS_ENDPOINT}`,
      { params }
    );

    return response.data;
  } catch (error) {
    console.error('Ошибка при получении списка моделей:', error);
    throw error;
  }
};

/**
 * Функция для получения модели по slug
 * @param slug Уникальный идентификатор модели
 * @returns Promise с данными модели
 */
export const getModelBySlug = async (slug: string): Promise<Model> => {
  try {
    const response = await axios.get<Model>(
      `${API_BASE_URL}${MODELS_ENDPOINT}/${slug}`
    );
    return response.data;
  } catch (error) {
    console.error(`Ошибка при получении модели ${slug}:`, error);
    throw error;
  }
};
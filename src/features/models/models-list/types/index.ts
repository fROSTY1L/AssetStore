import type { TelegramUser } from "../../../auth/types";
import type { ModelCategory, ModelTag } from "../../api/getModels";

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
  description?: string; 
  file_size?: number;
  view_count?: number;
  creator?: TelegramUser;
}
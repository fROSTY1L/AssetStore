import { getModels } from "../../api"
import ModelCard from "./ModelCard";

/* const paginated = async (pageNumber: number) => {
  await getModels(pageNumber);
} 
*/

const modelsData = await getModels();

const ModelsList = () => {
  return (
    <>
      {modelsData.models.map((model) => 
        <ModelCard {...model}/>
      )}
    </>
  )
}

export default ModelsList

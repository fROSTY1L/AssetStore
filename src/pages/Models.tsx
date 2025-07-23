import ModelCard from "../features/models/model-card"

const modelData = {
  authorAvatarUrl: "123",
  name: "Author",
  previewUrl: "avatar",
  likes: 5,
  dislikes: 2,
  reviews: 6
}

const Models = () => {
    return (
        <div style={{ padding: 24 }}>
        <ModelCard {...modelData}/>   
    </div>
    )
}

export default Models
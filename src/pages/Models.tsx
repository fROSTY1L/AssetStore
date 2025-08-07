import { ProtectedRoute } from "../features/auth/ui"
import ModelsList from "../features/models/models-list/ui"

const Models = () => {
    return (
    <ProtectedRoute>
        <div style={{ padding: 24 }}> 
            <ModelsList />
        </div>
    </ProtectedRoute>
    )
}

export default Models
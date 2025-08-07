import { useRoutes } from "react-router-dom";
import { routes } from "../routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
    const routing = useRoutes(routes);

    return (
        <QueryClientProvider client={queryClient}>
            {routing}
        </QueryClientProvider>
    )
}

export default App;
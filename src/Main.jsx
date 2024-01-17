import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools  />
    </QueryClientProvider>
  </StrictMode>
);

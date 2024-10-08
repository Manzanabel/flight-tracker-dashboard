import Header from "./components/Header";
import { SearchBarCard } from "./modules";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import SingleResultCard from "./modules/SingleResultCard/SingleResultCard";
import { ErrorBoundary } from "react-error-boundary";
import { ResultsCard } from "./modules/ResultsCard/ResultsCard";
import { MapCard } from "./modules/MapCard/MapCard";
import { ChartCard } from "./modules/ChartCard/ChartCard";
import { MainPageError } from "./components/MainPageError/MainPageError";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary fallbackRender={MainPageError}>
        <Header />
        <div className="app-container">
          <div className="app-splitcards">
            <SearchBarCard />
            <ChartCard />
          </div>
          <ResultsCard />
          <MapCard />
          <SingleResultCard />
        </div>
      </ErrorBoundary>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}

export default App;

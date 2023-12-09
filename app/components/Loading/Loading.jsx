import { Skeleton } from "@/components/ui/skeleton";

const Loading = ({ innertext }) => {
  return (
    <div>
      <h1 className="font-semibold">{innertext}</h1>
      <div className="flex items-center space-x-4">
        <Skeleton className="h-30 w-30 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[350px]" />
          <Skeleton className="h-4 w-[300px]" />
        </div>
      </div>
    </div>
  );
};

export default Loading;

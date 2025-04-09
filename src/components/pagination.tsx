import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getPages = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 1) {
      return [1];
    }

    pages.push(1);

    if (currentPage >= 4) {
      pages.push("...");
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage <= totalPages - 3) {
      pages.push("...");
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const pages = getPages();

  return (
    <div className="space-x-2 flex justify-center items-center">
      <Button
        variant={"ghost"}
        className="border"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft />
      </Button>

      {pages.map((page, index) =>
        page === "..." ? (
          <span key={index}>...</span>
        ) : (
          <Button
            key={index}
            onClick={() => onPageChange(page as number)}
            variant={"ghost"}
            className={`border ${
              currentPage === page
                ? "bg-[#31a27c] text-gray-50 hover:bg-opacity-80 hover:text-white"
                : ""
            }`}
          >
            {page}
          </Button>
        )
      )}

      <Button
        variant={"ghost"}
        className="border"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight />
      </Button>
    </div>
  );
};

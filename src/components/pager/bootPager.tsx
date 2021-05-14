import React, { useState, useEffect } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

interface BootPagerProps {
  leng: number;
  onChange: (page: number) => void;
  refresh?: any;
}

function BootPager({ leng, onChange, refresh }: BootPagerProps) {
  const [pageNum, setPage] = useState<number>(1);
  const [rows, setRows] = useState<any[]>([]);

  useEffect(() => {
    leng && setRows(Array.from({ length: leng / 30 + 1 }, (_, i) => i + 1));
    setPage(1);
  }, [leng, refresh]);

  useEffect(() => {
    onChange(pageNum);
  }, [pageNum]);

  return (
    <Pagination
      className="prod-detail__pager"
      size="sm"
      aria-label="order menu paging"
      style={{ width: "fit-content" }}
    >
      <PaginationItem>
        <PaginationLink first onClick={() => setPage(1)} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink
          previous
          onClick={() =>
            setPage((prevState) => (prevState > 1 ? prevState - 1 : 1))
          }
        />
      </PaginationItem>
      {rows
        .slice(
          5 * Math.floor(pageNum % 5 === 0 ? pageNum / 5 - 1 : pageNum / 5),
          5 *
            (Math.floor(pageNum % 5 === 0 ? pageNum / 5 - 1 : pageNum / 5) + 1),
        )
        .map((row) => (
          <PaginationItem key={row} active={row === pageNum}>
            <PaginationLink onClick={() => setPage(row)}>{row}</PaginationLink>
          </PaginationItem>
        ))}

      <PaginationItem>
        <PaginationLink
          next
          onClick={() =>
            setPage((prevState) =>
              prevState < rows.length ? prevState + 1 : rows.length,
            )
          }
        />
      </PaginationItem>

      <PaginationItem>
        <PaginationLink last onClick={() => setPage(rows.length)} />
      </PaginationItem>
    </Pagination>
  );
}

export default BootPager;

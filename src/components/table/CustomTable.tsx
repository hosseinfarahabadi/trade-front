import React from "react";

interface Column {
  key: string;
  label: string;
}

interface Row {
  key: string;
  [key: string]: string;
}

interface CustomTableProps {
  ariaLabel: string;
  selectionMode: string;
  selectedKeys: Set<string>;
  onSelectionChange: (selectedKeys: Set<string>) => void;
  columns: Column[];
  rows: Row[];
}

const CustomTable: React.FC<CustomTableProps> = ({
  ariaLabel,
  selectionMode,
  selectedKeys,
  onSelectionChange,
  columns,
  rows,
}) => {
  interface TableColumnProps {
    children: React.ReactNode;
    className?: string; // Allow className prop
  }

  const TableColumn: React.FC<TableColumnProps> = ({ children, className }) => (
    <th className={className}>{children}</th>
  );

  return (
    <div className="relative overflow-x-auto mt-20 mb-52 p-6 pt-0 bg-white">
      <div className="overflow-x-auto ">
        <table className="w-full text-sm text-left rtl:text-right  text-gray-500 dark:text-gray-400 px-6">
          <thead className="text-xs text-gray-700 uppercase ">
            <tr>
              {columns.map((column) => (
                <TableColumn key={column.key} className="px-6 py-3">
                  {column.label}
                </TableColumn>
              ))}
            </tr>
            <tr>
              <th
                colSpan={columns.length}
                //   style={{ borderBottom: "2px solid black", padding: "0 1rem" }}
                className="border-b border-gray-500"
              ></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.key} className="bg-white  ">
                {columns.map((column) => (
                  <td
                    key={`${row.key}-${column.key}`}
                    scope="row"
                    className="px-6 py-4 whitespace-nowrap"
                  >
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomTable;

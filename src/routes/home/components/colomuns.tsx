import { ColumnDef } from "@tanstack/react-table"
import { statuses } from "./config"
import { Task } from "@/schemas/index"
import { DataTableColumnHeader } from "./data-table-column-header"
import { DataTableRowActions } from "./data-table-row-actions"

export const columns: ColumnDef<Task>[] = [
     {
          accessorKey: "id",
          header: ({ column }) => (
               <DataTableColumnHeader column={column} title="Номер заказа" />
          ),
          cell: ({ row }) => <div className="w-[80px] text-center">{row.getValue("id")}</div>,
          enableSorting: false,
          enableHiding: false,
     },
     {
          accessorKey: "name",
          header: ({ column }) => (
               <DataTableColumnHeader column={column} title="Имя клиента" />
          ),
          cell: ({ row }) => {

               return (
                    <div className="flex space-x-2">
                         <span className="max-w-[500px] truncate font-medium">
                              {row.getValue("name")}
                         </span>
                    </div>
               )
          },
     },
     {
          accessorKey: "status",
          header: ({ column }) => (
               <DataTableColumnHeader column={column} title="Статус" />
          ),
          cell: ({ row }) => {
               const status = statuses.find(
                    (status) => status.value === row.getValue("status")
               )

               if (!status) {
                    return null
               }

               return (
                    <div className="flex w-[140px] items-center">
                         {status.icon && (
                              <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                         )}
                         <span>{status.label}</span>
                    </div>
               )
          },
          filterFn: (row, id, value) => {
               return value.includes(row.getValue(id))
          },
     },
     {
          accessorKey: "date",
          header: ({ column }) => (
               <DataTableColumnHeader column={column} title="Дата" />
          ),
          cell: ({ row }) => {
               return (
                    <div className="flex items-center">
                         <span>{row.getValue("date")}</span>
                    </div>
               )
          },
     },
     {
          id: "actions",
          cell: ({ row }) => <DataTableRowActions
               status={row.original.status}
               id={row.original.id}
               price={row.original.price}
               count={row.original.count}
               name={row.original.name}
          />,
     },
]
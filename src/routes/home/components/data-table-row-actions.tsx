import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/AlertDialog"
import { Button } from "@/components/ui/Button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropDownMenu"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/Sheet";
import { notify } from "@/utils/notify.util"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select";
import { statuses } from "./config";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useModal } from "@/hooks/useModal";

interface DataTableRowActionsProps {
  id: string;
  status: string;
}

const orderStatus = z.object({
  status: z.string(),
});

export function DataTableRowActions({ id, status }: DataTableRowActionsProps) {

  const { close, open, visible } = useModal();

  const form = useForm<z.infer<typeof orderStatus>>({
    resolver: zodResolver(orderStatus),
    defaultValues: {
      status: status,
    },
  });

  const onEdit = async (formData: z.infer<typeof orderStatus>) => {
    // We can send this data to an API endpoint to save it
    console.log('formData', formData)
    close();
    notify(`${id} заказ успешно изменен`, {
      type: "success",
    })

  };
  return (
    <Sheet onClose={open} open={visible} modal>
      <AlertDialog>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
            >
              <DotsHorizontalIcon className="h-4 w-4" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[160px]">
            {/* Sheet Trigger */}
            <SheetTrigger onClick={open} asChild>
              <DropdownMenuItem>
                Изменить
              </DropdownMenuItem>
            </SheetTrigger>

            {/* Alert Dialog Trigger */}
            <AlertDialogTrigger asChild>
              <DropdownMenuItem>
                Удалить
              </DropdownMenuItem>
            </AlertDialogTrigger>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* Dialog Content */}
        <AlertDialogPortal>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Вы уверены что хотите удалить?</AlertDialogTitle>
              <AlertDialogDescription>
                Это действие нельзя будет отменить.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Отмена</AlertDialogCancel>
              <AlertDialogAction onClick={() => notify(`${id} успешно удалено`, { type: 'success' })}>Удалить</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogPortal>
      </AlertDialog>
      {/* Sheet Content */}
      <SheetContent onClose={close}>
        <SheetHeader>
          <SheetTitle>Изменить статус</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onEdit)}
              className="flex flex-col gap-y-3"
            >
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Изменить статус
                    </FormLabel>
                    <FormControl>
                      <Select
                        defaultValue={`${status}`}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder={status} />
                        </SelectTrigger>
                        <SelectContent>
                          {statuses.map((status) => (
                            <SelectItem
                              key={`${status.value}`}
                              value={`${status.value}`}
                            >
                              {status.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <SheetFooter className="flex gap-3">
                <Button className="bg-green-600" type="submit">
                  Изменить
                </Button>
                <Button className="bg-red-600" onClick={close} >
                  Cancel
                </Button>
              </SheetFooter>
            </form>
          </Form>
        </div>
      </SheetContent>
    </Sheet>
  )
}
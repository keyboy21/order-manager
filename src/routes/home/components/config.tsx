import {
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons"

export const statuses = [
  {
    value: "Отправлен",
    label: "Отправлен",
    icon: CircleIcon,
  },
  {
    value: "Ожидает оплаты",
    label: "Ожидает оплаты",
    icon: StopwatchIcon,
  },
  {
    value: "Доставлен",
    label: "Доставлен",
    icon: CheckCircledIcon,
  },
  {
    value: "Отменен",
    label: "Отменен",
    icon: CrossCircledIcon,
  },
]
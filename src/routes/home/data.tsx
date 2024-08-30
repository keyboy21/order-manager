import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
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

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDownIcon,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRightIcon,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUpIcon,
  },
]
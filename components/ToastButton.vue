<template>
  <button @click="click">{{ props.name }}</button>
</template>

<script setup>
import { useToast } from "@/components/ui/toast/use-toast";
import { ToastAction } from "@/components/ui/toast";

const { toast } = useToast();

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
});

const click = () => {
  toast({
    title: props.title,
    description: props.description,
    action: h(
      ToastAction,
      {
        altText: "Try again",
      },
      {
        default: () => "Try again",
      }
    ),
  });
};
</script>
